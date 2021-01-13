'use strict';

const DB_BONSAI_URL: string = process.env.DB_BONSAI_URL || '';
const DB_MONGO_ATLAS_URL: string = process.env.DB_MONGO_ATLAS_URL || '';
const DB_POSTGRE_USER: string = process.env.DB_POSTGRE_USER || '';
const DB_POSTGRE_PASSWORD: string = process.env.DB_POSTGRE_PASSWORD || '';
const DB_POSTGRE_HOST: string = process.env.DB_POSTGRE_HOST || '';
const DB_POSTGRE_PORT: number = parseInt(process.env.DB_POSTGRE_PORT, 10) || 5432;
const DB_POSTGRE_DATABASE: string = process.env.DB_POSTGRE_DATABASE || '';
const TELEGRAM_API_KEY: string = process.env.TELEGRAM_API_KEY || '';

import CacheClient from './cache';
import ElasticSearchClient from './elasticsearch';
import MongooseClient from './mongoose';
import PostgreClient from './postgre';
import TelegramClient from './telegram';
import RedisClient from './redis';

export { CacheClient };
export const telegramClient: TelegramClient = new TelegramClient(TELEGRAM_API_KEY);
export const mongooseClient: MongooseClient = new MongooseClient(DB_MONGO_ATLAS_URL);
export const esClient: ElasticSearchClient = new ElasticSearchClient(DB_BONSAI_URL);

const postgreConfigs = {
  user: DB_POSTGRE_USER,
  password: DB_POSTGRE_PASSWORD,
  host: DB_POSTGRE_HOST,
  port: DB_POSTGRE_PORT,
  database: DB_POSTGRE_DATABASE
};
export const postgreClient: PostgreClient = new PostgreClient(postgreConfigs);

const REDIS_HOST: string = process.env.REDIS_HOST || '';
const REDIS_PORT: number = parseInt(process.env.REDIS_PORT, 10) || 19035;
const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || '';
export const redisClient: RedisClient = new RedisClient(REDIS_HOST, REDIS_PORT, REDIS_PASSWORD);
