import { baseGraphQL } from '../configs';

export default class GraphQL {
  private async graphql(key = '', query = '', fallback = {}): Promise<any> {
    const body = { query };
    const url = `${baseGraphQL}`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(res => {
          const { data = {} } = res;
          const result = data[key] || fallback;
          resolve(result);
        })
        .catch(error => {
          console.error(error);
          resolve({});
        });
    });
  }

  private async graphGet(key: string, fields: Array<string> = [], options: any = {}): Promise<any> {
    const fieldsString = fields.join(' ');
    const params = Object.keys(options)
      .map(key => {
        let value = options[key];
        if (key === 'filter') {
          const filterKeys = Object.keys(options[key]);
          value = filterKeys.map(_key => {
            const __value =
              typeof options[key][_key] === 'string'
                ? `"${options[key][_key]}"`
                : options[key][_key];
            return `${_key}: ${__value}`;
          });
          value = `{${value}}`;
        }
        return `${key}: ${value}`;
      })
      .join(',');
    const paramsString = params ? `(${params})` : '';
    const query = `query { ${key} ${paramsString} { ${fieldsString} } }`;
    const fallback: Array<any> = [];
    const list = await this.graphql(key, query, fallback);
    return list;
  }

  private async graphPost(key: string, body: any = {}, fields = []): Promise<any> {
    const newRecord = Object.keys(body)
      .filter(key => {
        const value = body[key];
        return !Array.isArray(value) || !Array.isArray(value);
      })
      .map(key => {
        const value = body[key];
        const valueType = typeof value;
        return valueType === 'string' ? `${key}: "${value}"` : `${key}: ${value}`;
      })
      .join(' ');
    const fieldsString = fields.join(' ');
    const mutation = `mutation {
      ${key}( record: { ${newRecord} } )
      { record { ${fieldsString} } }
    }`;
    const fallback = {};
    const { record = {} } = await this.graphql(key, mutation, fallback);
    return record;
  }

  private async graphPut(key: string, body: any = {}, fields = []): Promise<any> {
    const updatedRecord = Object.keys(body)
      .filter(key => {
        const value = body[key];
        return !Array.isArray(value) || !Array.isArray(value);
      })
      .map(key => {
        const value = body[key];
        const valueType = typeof value;
        if (valueType === 'string') return `${key}: "${value}"`;
        return `${key}: ${value}`;
      })
      .join(', ');
    const fieldsString = fields.join(' ');
    const mutation = `mutation {
      ${key}( record: { ${updatedRecord} } )
      { record { ${fieldsString} } }
    }`;
    const fallback = {};
    const { record = {} } = await this.graphql(key, mutation, fallback);
    return record;
  }

  private async graphDelete(key = '', id = '', fields = []): Promise<any> {
    const fieldsString = fields.join(' ');
    const mutation = `mutation { ${key}(_id: "${id}") { record { ${fieldsString} } } }`;
    const fallback = {};
    const { record = {} } = await this.graphql(key, mutation, fallback);
    return record;
  }
  /**
   * GraphQL Functions
   */
  public async count(prefix = ''): Promise<any> {
    const key = `${prefix}Count`;
    const query = `query { ${key} }`;
    const fallback = 0;
    const count = await this.graphql(key, query, fallback);
    return count;
  }

  public async find(prefix = '', fields: Array<string> = [], options = {}): Promise<any> {
    const key = `${prefix}Many`;
    const list = await this.graphGet(key, fields, options);
    return list;
  }

  public async add(prefix = '', body = {}, fields = []): Promise<any> {
    const key = `${prefix}CreateOne`;
    const item = await this.graphPost(key, body, fields);
    return item;
  }

  public async updateById(prefix = '', body = {}, fields = []): Promise<any> {
    const key = `${prefix}UpdateById`;
    const item = await this.graphPut(key, body, fields);
    return item;
  }

  public async removeById(prefix = '', id = '', fields = []): Promise<any> {
    const key = `${prefix}RemoveById`;
    const item = await this.graphDelete(key, id, fields);
    return item;
  }
}
