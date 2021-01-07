import { baseAPI } from '../configs';

const endpoints = {
  banks: {
    getForexBanks: { url: `${baseAPI}/banks/forex/banks`, method: 'GET' },
    getForexRates: { method: 'GET', url: `${baseAPI}/banks/forex/rates` },
    syncForex: { method: 'POST', url: `${baseAPI}/banks/forex/sync` }
  },
  calendar: {
    convertLunarToSolar: { method: 'POST', url: `${baseAPI}/calendar/lunar2solar` },
    convertSolarToLunar: { method: 'POST', url: `${baseAPI}/calendar/solar2lunar` },
    getCanChi: { method: 'POST', url: `${baseAPI}/calendar/lunar/can-chi` }
  },
  ethnicMinorities: {
    getEthnicMinorities: { method: 'GET', url: `${baseAPI}/ethnic-minorities` }
  },
  finance: {
    getStockCompanies: { method: 'GET', url: `${baseAPI}/finance/companies` },
    getStockHighlights: { method: 'POST', url: `${baseAPI}/finance/highlights` },
    getStockHistory: { method: 'POST', url: `${baseAPI}/finance/history` },
    getStockPotentials: { method: 'POST', url: `${baseAPI}/finance/potentials` },
    calculateProfit: { method: 'POST', url: `${baseAPI}/finance/profit` }
  },
  government: {
    getGeneralSecretaries: { method: 'GET', url: `${baseAPI}/government/general-secretaries` },
    getPresidents: { method: 'GET', url: `${baseAPI}/government/presidents` },
    getPrimeMinisters: { method: 'GET', url: `${baseAPI}/government/prime-ministers` },
    getNationalAssemblyChairs: {
      method: 'GET',
      url: `${baseAPI}/government/national-assembly/chairs`
    },
    getNationalAssemblyMembers: {
      method: 'GET',
      url: `${baseAPI}/government/national-assembly/members`
    },
    getMinistries: { method: 'GET', url: `${baseAPI}/government/ministries` },
    getMinisters: { method: 'GET', url: `${baseAPI}/government/ministers` }
  },
  licensePlates: {
    getLicensePlates: { method: 'GET', url: `${baseAPI}/license-plates` }
  },
  maps: {
    getPostalCodes: { method: 'GET', url: `${baseAPI}/maps/postal-codes` },
    getProvinces: { method: 'GET', url: `${baseAPI}/maps/provinces` },
    getDistricts: { method: 'GET', url: `${baseAPI}/maps/districts` },
    getWards: { method: 'GET', url: `${baseAPI}/maps/wards` }
  },
  news: {
    getArticles: { method: 'GET', url: `${baseAPI}/news` },
    getTrends: { method: 'GET', url: `${baseAPI}/news/trends` },
    getSources: { method: 'GET', url: `${baseAPI}/news/sources` },
    getCategories: { method: 'GET', url: `${baseAPI}/news/categories` }
  },
  phones: {
    getPhonesProviders: { method: 'GET', url: `${baseAPI}/phones/providers` }
  },
  sports: {
    getSportsClubs: { method: 'GET', url: `${baseAPI}/sports/clubs` }
  },
  technologies: {
    getTechnologies: { method: 'GET', url: `${baseAPI}/technologies` },
    getGHNProvinces: { method: 'GET', url: `${baseAPI}/technologies/giaohangnhanh/provinces` }
  }
};

export default endpoints;
