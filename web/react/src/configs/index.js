const { NODE_ENV = '' } = process.env;
const devAPI = 'http://localhost:8080/api';
const prodAPI = 'https://vietnamd.herokuapp.com/api';
export const baseAPI = NODE_ENV === 'development' ? devAPI : prodAPI;

const devGraphQL = 'http://localhost:8080/graphql';
const prodGraphQL = 'https://vietnamd.herokuapp.com/graphql';
export const baseGraphQL = NODE_ENV === 'development' ? devGraphQL : prodGraphQL;

export const periods = [
  { label: '1 Week', value: '1W' },
  { label: '2 Weeks', value: '2W' },
  { label: '3 Weeks', value: '3W' },
  { label: '1 Month', value: '1M' },
  { label: '2 Months', value: '2M' },
  { label: '3 Months', value: '3M' },
  { label: '6 Months', value: '6M' },
  { label: '1 Year', value: '1Y' },
  { label: '2 Years', value: '2Y' },
  { label: '3 Years', value: '3Y' },
  { label: '4 Years', value: '4Y' },
  { label: '5 Years', value: '5Y' }
];

export const months = [
  { name: 'january', short: 'jan' },
  { name: 'february', short: 'feb' },
  { name: 'march', short: 'mar' },
  { name: 'april', short: 'apr' },
  { name: 'may', short: 'may' },
  { name: 'june', short: 'jun' },
  { name: 'july', short: 'jul' },
  { name: 'august', short: 'aug' },
  { name: 'september', short: 'sep' },
  { name: 'october', short: 'oct' },
  { name: 'november', short: 'nov' },
  { name: 'december', short: 'dec' }
];

export const endpoints = {
  banks: {
    getForexBanks: {
      name: 'Get Forex Banks',
      url: `${baseAPI}/banks/forex/banks`,
      method: 'GET',
      query: [],
      body: []
    },
    getForexRates: {
      name: 'Get Forex Rates',
      method: 'GET',
      url: `${baseAPI}/banks/forex/rates`,
      query: [],
      body: []
    },
    syncForexRates: {
      name: 'Sync Forex Rates',
      method: 'POST',
      url: `${baseAPI}/banks/forex/sync`,
      query: [],
      body: [{ name: 'id', required: true, type: 'string', description: '' }]
    }
  },
  calendar: {
    convertLunarToSolar: {
      name: 'Convert Lunar Date to Solar Date',
      method: 'POST',
      url: `${baseAPI}/calendar/lunar2solar`,
      query: [],
      body: [
        { name: 'year', required: true, type: 'number', description: '' },
        { name: 'month', required: true, type: 'number', description: '' },
        { name: 'date', required: true, type: 'number', description: '' }
      ]
    },
    convertSolarToLunar: {
      name: 'Convert Solar Date to Lunar Date',
      method: 'POST',
      url: `${baseAPI}/calendar/solar2lunar`,
      query: [],
      body: [
        { name: 'year', required: true, type: 'number', description: '' },
        { name: 'month', required: true, type: 'number', description: '' },
        { name: 'date', required: true, type: 'number', description: '' }
      ]
    },
    getCanChi: {
      name: 'Get Can Chi of Lunar Date',
      method: 'POST',
      url: `${baseAPI}/calendar/lunar/can-chi`,
      query: [],
      body: [
        { name: 'year', required: true, type: 'number', description: '' },
        { name: 'month', required: true, type: 'number', description: '' },
        { name: 'date', required: true, type: 'number', description: '' }
      ]
    }
  },
  ethnicMinorities: {
    getEthnicMinorities: {
      name: 'Get Ethnic Minorities',
      method: 'GET',
      url: `${baseAPI}/ethnic-minorities`,
      query: [],
      body: []
    }
  },
  finance: {
    getStockCompanies: {
      name: 'Get Listed Companies',
      method: 'GET',
      url: `${baseAPI}/finance/companies`,
      query: [],
      body: []
    },
    getStockHistory: {
      name: 'Get Stock History',
      method: 'POST',
      url: `${baseAPI}/finance/history`,
      query: [],
      body: [
        { name: 'symbol', type: 'string', required: true, description: '' },
        { name: 'from', type: 'number', required: true, description: '' },
        { name: 'to', type: 'number', required: true, description: '' }
      ]
    },
    getStockHighlights: {
      name: 'Get Stock Highlights',
      method: 'POST',
      url: `${baseAPI}/finance/highlights`,
      query: [],
      body: [
        { name: 'from', type: 'number', required: true, description: '' },
        { name: 'to', type: 'number', required: true, description: '' }
      ]
    },
    getStockPotentials: {
      name: 'Get Stock Potentials',
      method: 'POST',
      url: `${baseAPI}/finance/potentials`,
      query: [],
      body: [
        { name: 'from', type: 'number', required: true, description: '' },
        { name: 'to', type: 'number', required: true, description: '' }
      ]
    },
    calculateProfit: {
      name: 'Calculate Profit',
      method: 'POST',
      url: `${baseAPI}/finance/profit`,
      query: [],
      body: [
        { name: 'buy', type: 'number', required: true, description: '' },
        { name: 'sell', type: 'number', required: true, description: '' },
        { name: 'volume', type: 'number', required: true, description: '' }
      ]
    }
  },
  government: {
    getGeneralSecretaries: {
      name: 'Get General Secretaries',
      method: 'GET',
      url: `${baseAPI}/government/general-secretaries`,
      query: [],
      body: []
    },
    getPresidents: {
      name: 'Get Presidents',
      method: 'GET',
      url: `${baseAPI}/government/presidents`,
      query: [],
      body: []
    },
    getPrimeMinisters: {
      name: 'Get Prime Ministers',
      method: 'GET',
      url: `${baseAPI}/government/prime-ministers`,
      query: [],
      body: []
    },
    getNationalAssemblyChairs: {
      name: 'Get National Assembly Chairs',
      method: 'GET',
      url: `${baseAPI}/government/national-assembly/chairs`,
      query: [],
      body: []
    },
    getNationalAssemblyMembers: {
      name: 'Get National Assembly Members',
      method: 'GET',
      url: `${baseAPI}/government/national-assembly/members`,
      query: [{ name: 'no', type: 'number', required: true, description: '' }],
      body: []
    },
    getMinistries: {
      name: 'Get Ministries',
      method: 'GET',
      url: `${baseAPI}/government/ministries`,
      query: [],
      body: []
    },
    getMinisters: {
      name: 'Get Ministers',
      method: 'GET',
      url: `${baseAPI}/government/ministers`,
      query: [],
      body: [{ name: 'ministry', type: 'string', required: true, description: '' }]
    }
  },
  licensePlates: {
    getLicensePlates: {
      name: 'Get License Plates',
      method: 'GET',
      url: `${baseAPI}/license-plates`,
      query: [],
      body: []
    }
  },
  maps: {
    getPostalCodes: {
      name: 'Get Postal Codes',
      method: 'GET',
      url: `${baseAPI}/maps/postal-codes`,
      query: [],
      body: []
    },
    getProvinces: {
      name: 'Get Provinces',
      method: 'GET',
      url: `${baseAPI}/maps/provinces`,
      query: [],
      body: []
    },
    getDistricts: {
      name: 'Get Districts',
      method: 'GET',
      url: `${baseAPI}/maps/districts`,
      query: [],
      body: []
    },
    getWards: {
      name: 'Get Wards',
      method: 'GET',
      url: `${baseAPI}/maps/wards`,
      query: [],
      body: []
    }
  },
  news: {
    getArticles: {
      name: 'Get Articles',
      method: 'GET',
      url: `${baseAPI}/news`,
      query: [
        { name: 'category', type: 'string', required: true, description: '' },
        { name: 'source', type: 'string', required: true, description: '' }
      ],
      body: []
    },
    getTrends: {
      name: 'Get (Google) Trends',
      method: 'GET',
      url: `${baseAPI}/news/trends`,
      query: [],
      body: []
    },
    getSources: {
      name: 'Get Sources',
      method: 'GET',
      url: `${baseAPI}/news/sources`,
      query: [],
      body: []
    },
    getCategories: {
      name: 'Get Categories',
      method: 'GET',
      url: `${baseAPI}/news/categories`,
      query: [],
      body: []
    }
  },
  phones: {
    getPhonesProviders: {
      name: 'Get Phone Providers',
      method: 'GET',
      url: `${baseAPI}/phones/providers`,
      query: [],
      body: []
    }
  },
  sports: {
    getSportsClubs: {
      name: 'Get Sports Clubs',
      method: 'GET',
      url: `${baseAPI}/sports/clubs`,
      query: [],
      body: []
    }
  },
  technologies: {
    getTechnologies: {
      name: 'Get Public APIs',
      method: 'GET',
      url: `${baseAPI}/technologies`,
      query: [],
      body: []
    },
    getGHNProvinces: {
      name: 'giaohangnhanh - Get Provinces',
      method: 'GET',
      url: `${baseAPI}/technologies/giaohangnhanh/provinces`,
      query: [],
      body: []
    }
  }
};
