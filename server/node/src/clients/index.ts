'use strict';

const DB_BONSAI_URL: string = process.env.DB_BONSAI_URL || '';
const DB_MONGO_ATLAS_URL: string = process.env.DB_MONGO_ATLAS_URL || '';
const DB_POSTGRE_USER: string = process.env.DB_POSTGRE_USER || '';
const DB_POSTGRE_PASSWORD: string = process.env.DB_POSTGRE_PASSWORD || '';
const DB_POSTGRE_HOST: string = process.env.DB_POSTGRE_HOST || '';
const DB_POSTGRE_PORT: number = parseInt(process.env.DB_POSTGRE_PORT, 10) || 5432;
const DB_POSTGRE_DATABASE: string = process.env.DB_POSTGRE_DATABASE || '';
const TELEGRAM_API_KEY: string = process.env.TELEGRAM_API_KEY || '';

import CacheClient from './client.cache';
import ElasticSearchClient from './client.elasticsearch';
import MongooseClient from './client.mongoose';
import PostgreClient from './client.postgre';
import TelegramClient from './client.telegram';

export { CacheClient };
export const telegramClient: TelegramClient = new TelegramClient(TELEGRAM_API_KEY);
export const mongooseClient: MongooseClient = new MongooseClient(DB_MONGO_ATLAS_URL);
export const esClient = new ElasticSearchClient(DB_BONSAI_URL);

const postgreConfigs = {
  user: DB_POSTGRE_USER,
  password: DB_POSTGRE_PASSWORD,
  host: DB_POSTGRE_HOST,
  port: DB_POSTGRE_PORT,
  database: DB_POSTGRE_DATABASE
};
export const postgreClient = new PostgreClient(postgreConfigs);
