'use strict';

import * as redis from 'redis';

export default class Redis {
  private client: any;

  constructor(host: string, port: number, password: string) {
    this.client = redis.createClient({ host, port, password });

    this.client.on('connect', () => {
      console.log('REDIS SUCCESS');
    });

    this.client.on('error', error => {
      console.error(error);
    });
  }

  async get(key: string): Promise<string> {
    return new Promise(resolve => {
      this.client.get(key, (error, reply) => {
        if (error) {
          console.error('error', error);
          return resolve('{}');
        }
        resolve(reply);
      });
    });
  }

  async set(key: string, value: string): Promise<void> {
    return await this.client.set(key, value);
  }

  async setex(key: string, value: string, expiredSeconds: number = 0): Promise<void> {
    return await this.client.setex(key, expiredSeconds, value);
  }
}
