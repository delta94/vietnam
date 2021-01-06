'use strict';

import fetch from 'node-fetch';

import { baseURL } from '../constants';

export default class Base {
  public async fetch(endpoint: string): Promise<Array<any>> {
    const url = `${baseURL}/${endpoint}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((list: Array<any> = []) => {
          resolve(list);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
