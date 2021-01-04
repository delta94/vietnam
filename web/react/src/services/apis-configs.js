import { baseAPI } from '../configs';

const endpoints = {
  banks: {
    get: `${baseAPI}/banks`,
    forex: {
      rates: { get: `${baseAPI}/banks/forex/rates` },
      sync: { post: `${baseAPI}/banks/forex/sync` }
    }
  },
  ethnicMinorities: {
    get: `${baseAPI}/ethnic-minorities`
  },
  finance: {
    companies: { get: `${baseAPI}/finance/companies` },
    highlights: { post: `${baseAPI}/finance/highlights` },
    history: { post: `${baseAPI}/finance/history` },
    potentials: { post: `${baseAPI}/finance/potentials` },
    profit: { post: `${baseAPI}/finance/profit` }
  },
  government: {
    generalSecretaries: { get: `${baseAPI}/government/general-secretaries` },
    presidents: { get: `${baseAPI}/government/presidents` },
    primeMinisters: { get: `${baseAPI}/government/prime-ministers` },
    nationalAssemblyChairs: { get: `${baseAPI}/government/national-assembly/chairs` },
    ministries: { get: `${baseAPI}/government/ministries` },
    ministers: { get: `${baseAPI}/government/ministers` }
  },
  licensePlates: {
    get: `${baseAPI}/license-plates`
  },
  maps: {
    postalCodes: { get: `${baseAPI}/maps/postal-codes` },
    provinces: { get: `${baseAPI}/maps/provinces` },
    districts: { get: `${baseAPI}/maps/districts` },
    wards: { get: `${baseAPI}/maps/wards` }
  },
  news: {
    get: `${baseAPI}/news`,
    trends: { get: `${baseAPI}/news/trends` },
    sources: { get: `${baseAPI}/news/sources` },
    categories: { get: `${baseAPI}/news/categories` }
  },
  phones: {
    providers: { get: `${baseAPI}/phones/providers` }
  },
  sports: {
    clubs: {
      get: `${baseAPI}/sports/clubs`
    }
  },
  technologies: {
    get: `${baseAPI}/technologies`,
    giaohangnhanh: {
      provinces: { get: `${baseAPI}/technologies/giaohangnhanh/provinces` }
    }
  }
};

export default endpoints;
