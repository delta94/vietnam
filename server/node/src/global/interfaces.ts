'use strict';

export interface IRoute {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  middlewares: Array<string>;
}

export interface IPostgreConfigs {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

export interface IPostgreResult {
  command: string;
  rowCount: number;
  rows: Array<any>;
  fields: Array<any>;
}

export interface IStockCompany {
  id: string;
  symbol: string;
  market: string;
}

export interface ITanVietOptions {
  year?: number;
  industry?: string;
  period?: string;
  unit?: number;
}
