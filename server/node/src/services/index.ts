'use strict';

import BanksService from './banks';
import EthnicMinoritiesService from './ethnic-minorities';
import FinanceService from './finance';
import GovernmentService from './government';
import LicensePlatesService from './license-plates';
import MapsService from './maps';
import NewsService from './news';
import PhonesService from './phones';
import SportsService from './sports';
import TechnologiesService from './technologies';

export const banksService: BanksService = new BanksService();
export const ethnicMinoritiesService: EthnicMinoritiesService = new EthnicMinoritiesService();
export const financeService: FinanceService = new FinanceService();
export const governmentService: GovernmentService = new GovernmentService();
export const licensePlatesService: LicensePlatesService = new LicensePlatesService();
export const mapsService: MapsService = new MapsService();
export const newsService: NewsService = new NewsService();
export const phonesService: PhonesService = new PhonesService();
export const sportsService: SportsService = new SportsService();
export const technologiesService: TechnologiesService = new TechnologiesService();
