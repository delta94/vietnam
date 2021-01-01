'use strict';

import * as elasticsearch from '@elastic/elasticsearch';
const { Client } = elasticsearch;

export default class ElasticSearchClient {
  private client: elasticsearch.Client;

  constructor(node: string) {
    if (!node) return;
    this.client = new Client({ node });
  }

  public async add(index: string, body: any): Promise<any> {
    return new Promise(resolve => {
      this.client.index({ index, body }, (err: any, result: any) => {
        if (err) {
          const { meta = {} } = err;
          const { body = {} } = meta;
          const { status = 0, error = {} } = body;
          const { type = '', reason = '', root_cause = [], caused_by = {} } = error;
          console.error(status, type, reason, root_cause, caused_by);
          return resolve({});
        }
        resolve(result);
      });
    });
  }

  public async refresh(index: string): Promise<any> {
    return await this.client.indices.refresh({ index });
  }

  public async search(index: string, body: any): Promise<any> {
    return await this.client.search({ index, body });
  }
}
