import { baseGraphQL } from '../configs';

const graphql = async (key = '', query = '', fallback = {}): Promise<any> => {
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
};

const graphGet = async (key: string, fields: Array<string> = [], options: any = {}) => {
  const fieldsString = fields.join(' ');
  const params = Object.keys(options)
    .map(key => {
      let value = options[key];
      if (key === 'filter') {
        const filterKeys = Object.keys(options[key]);
        value = filterKeys.map(_key => {
          const __value =
            typeof options[key][_key] === 'string' ? `"${options[key][_key]}"` : options[key][_key];
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
  const list = await graphql(key, query, fallback);
  return list;
};

const graphPost = async (key: string, body: any = {}, fields = []) => {
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
  const { record = {} } = await graphql(key, mutation, fallback);
  return record;
};

const graphPut = async (key: string, body: any = {}, fields = []) => {
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
  const { record = {} } = await graphql(key, mutation, fallback);
  return record;
};

const graphDelete = async (key = '', id = '', fields = []) => {
  const fieldsString = fields.join(' ');
  const mutation = `mutation { ${key}(_id: "${id}") { record { ${fieldsString} } } }`;
  const fallback = {};
  const { record = {} } = await graphql(key, mutation, fallback);
  return record;
};
/**
 * GraphQL Functions
 */
export const count = async (prefix = '') => {
  const key = `${prefix}Count`;
  const query = `query { ${key} }`;
  const fallback = 0;
  const count = await graphql(key, query, fallback);
  return count;
};

export const find = async (prefix = '', fields: Array<string> = [], options = {}) => {
  const key = `${prefix}Many`;
  const list = await graphGet(key, fields, options);
  return list;
};

export const add = async (prefix = '', body = {}, fields = []) => {
  const key = `${prefix}CreateOne`;
  const item = await graphPost(key, body, fields);
  return item;
};

export const updateById = async (prefix = '', body = {}, fields = []) => {
  const key = `${prefix}UpdateById`;
  const item = await graphPut(key, body, fields);
  return item;
};

export const removeById = async (prefix = '', id = '', fields = []) => {
  const key = `${prefix}RemoveById`;
  const item = await graphDelete(key, id, fields);
  return item;
};
