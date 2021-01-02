import { baseAPI } from '../configs';

const endpoints = {
  ethnicMinorities: {
    get: `${baseAPI}/ethnic-minorities`
  },
  government: {
    generalSecretaries: { get: `${baseAPI}/government/general-secretaries` },
    presidents: { get: `${baseAPI}/government/presidents` },
    primeMinisters: { get: `${baseAPI}/government/prime-ministers` },
    nationalAssemblyChairs: { get: `${baseAPI}/government/national-assembly/chairs` },
    ministries: { get: `${baseAPI}/government/ministries` }
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
    trends: { get: `${baseAPI}/news/trends` },
    sources: { get: `${baseAPI}/news/sources` },
    categories: { get: `${baseAPI}/news/categories` }
  },
  sports: {
    clubs: {
      get: `${baseAPI}/sports/clubs`
    }
  },
  technologies: {
    get: `${baseAPI}/technologies`
  }
};

export default endpoints;
