'use strict';

import AdministrativeDivisionsService from './administration-divisions';
import BanksService from './banks';
import EthnicMinoritiesService from './ethnic-minorities';
import FinanceService from './finance';
import GovernmentService from './government';
import HistoryService from './history';
import LicensePlatesService from './license-plates';
import MusicService from './music';
import NewsService from './news';
import OpenAPIsService from './open-apis';
import PhonesService from './phones';
import SportsService from './sports';
import WeatherService from './weather';

export const administrativeDivisionsService: AdministrativeDivisionsService = new AdministrativeDivisionsService();
export const banksService: BanksService = new BanksService();
export const ethnicMinoritiesService: EthnicMinoritiesService = new EthnicMinoritiesService();
export const financeService: FinanceService = new FinanceService();
export const governmentService: GovernmentService = new GovernmentService();
export const historyService: HistoryService = new HistoryService();
export const licensePlatesService: LicensePlatesService = new LicensePlatesService();
export const musicService: MusicService = new MusicService();
export const newsService: NewsService = new NewsService();
export const phonesService: PhonesService = new PhonesService();
export const sportsService: SportsService = new SportsService();
export const openAPIsService: OpenAPIsService = new OpenAPIsService();
export const weatherService: WeatherService = new WeatherService();
