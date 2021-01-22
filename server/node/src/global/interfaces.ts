'use strict';

export interface IRoute {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTION';
  path: string;
  middlewares: Array<string>;
  query: Array<IRouteParameter>;
  body: Array<IRouteParameter>;
}

export interface IRouteParameter {
  name: string;
  type: any | 'string' | 'number';
  required: boolean;
  defaultValue?: string;
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

export interface ITelegramMessage {
  chat_id?: string | number;
  text?: string;
  parse_mode?: 'HTML' | 'MarkdownV2' | 'Markdown';
}

export type TelegramMethod = 'GET' | 'POST';

export type TelegramCommand = 'setWebhook' | 'sendMessage' | 'getMe';

export interface IYouTubeVideo {
  id: string;
  channelId: string;
  title: string;
  publishedAt: string;
  description: string;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  url: string;
}

export interface IYouTubeVideoCategory {
  id: string;
  title: string;
  assignable: boolean;
  channelId: string;
}
