'use strict';

import SSI from './stock/ssi';
import TanViet from './stock/tanviet';

import Banks from './banks';
import BCrypt from './bcrypt';
import Calendar from './calendar';
import LiveScore from './live-score';
import JWT from './jwt';
import News from './news';
import Google from './news/google';
import AirVisual from './weather/air-visual';
import OpenWeatherMap from './weather/open-weather-map';
import PassportIndex from './passport-index';
import ProPublica from './propublica';
import Utils from './utils';
import TaskQueueProcessor from './task-queue-processor';
import YouTube from './youtube';

import GHN from 'giaohangnhanh';

import Vietcetera from 'vietcetera';

export const banks: Banks = new Banks();
export const calendar: Calendar = new Calendar();
export const liveScore: LiveScore = new LiveScore();
export const news: News = new News();
export const google: Google = new Google();
export const ssi: SSI = new SSI();
export const tanViet: TanViet = new TanViet();
export const passportIndex: PassportIndex = new PassportIndex();

const OPEN_WEATHER_MAP_API: string = process.env.OPEN_WEATHER_MAP_API || '';
export const openWeatherMap: OpenWeatherMap = new OpenWeatherMap(OPEN_WEATHER_MAP_API);

export const taskQueueProcessor: TaskQueueProcessor = new TaskQueueProcessor();
export const utils: Utils = new Utils();

const GIAO_HANG_NHANH_API: string = process.env.GIAO_HANG_NHANH_API || '';
export const ghn: GHN = new GHN(GIAO_HANG_NHANH_API, { test: true });

export const vietcetera: Vietcetera = new Vietcetera();

const YOUTUBE_API: string = process.env.YOUTUBE_API || '';
export const youTube: YouTube = new YouTube(YOUTUBE_API);

const AIR_VISUAL_API: string = process.env.AIR_VISUAL_API || '';
export const airVisual: AirVisual = new AirVisual(AIR_VISUAL_API);

const PROPUBLICA_API: string = process.env.PROPUBLICA_API || '';
export const proPublica: ProPublica = new ProPublica(PROPUBLICA_API);

const X_TOKEN_SECRET: string = process.env.X_TOKEN_SECRET || '';
export const jwt: JWT = new JWT(X_TOKEN_SECRET);

const BCRYPT_ROUNDS: number = parseInt(process.env.BCRYPT_ROUNDS || '6', 10) || 6;
export const bcrypt: BCrypt = new BCrypt(BCRYPT_ROUNDS);
