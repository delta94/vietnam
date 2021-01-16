'use strict';

import { openAPIs } from '../constants';

export default class OpenAPIsService {
  public async getTechnologies(type_id: string): Promise<Array<any>> {
    return openAPIs.filter((api: any) =>
      type_id ? api.type_id.toString().toLowerCase().includes(type_id.toLowerCase()) : true
    );
  }
}
