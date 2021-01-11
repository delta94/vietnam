const { NODE_ENV = '' } = process.env;
const devAPI = 'http://localhost:8080/api';
const prodAPI = 'https://vietnamd.herokuapp.com/api';
export const baseAPI = NODE_ENV === 'development' ? devAPI : prodAPI;

const devGraphQL = 'http://localhost:8080/graphql';
const prodGraphQL = 'https://vietnamd.herokuapp.com/graphql';
export const baseGraphQL = NODE_ENV === 'development' ? devGraphQL : prodGraphQL;

interface IPeriod {
  label: string;
  value: string;
}

export const periods: Array<IPeriod> = [
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

interface IMonth {
  name: string;
  short: string;
}

export const months: Array<IMonth> = [
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

export type EndpointGroups =
  | 'administrativeDivisions'
  | 'banks'
  | 'calendar'
  | 'ethnicMinorities'
  | 'finance'
  | 'government'
  | 'licensePlates'
  | 'music'
  | 'news'
  | 'phones'
  | 'sports'
  | 'technologies';

export interface IEndpoints {
  administrativeDivisions: IAdministrativeDivisionsEndpoints;
  banks: IBanksEndpoints;
  calendar: ICalendarEndpoints;
  ethnicMinorities: IEthnicMinoritiesEndpoints;
  finance: IFinanceEndpoints;
  government: IGovernmentEndpoints;
  history: IHistoryEndpoints;
  licensePlates: ILicensePlatesEndpoints;
  music: IMusicEndpoints;
  news: INewsEndpoints;
  phones: IPhonesEndpoints;
  sports: ISportsEndpoints;
  technologies: ITechnologiesEndpoints;
}

interface IAdministrativeDivisionsEndpoints {
  getPostalCodes: IEndpoint;
  getProvinces: IEndpoint;
  getDistricts: IEndpoint;
  getWards: IEndpoint;
  getTotalWards: IEndpoint;
}

interface IBanksEndpoints {
  getForexBanks: IEndpoint;
  getForexRates: IEndpoint;
  syncForexRates: IEndpoint;
}
interface ICalendarEndpoints {
  convertLunarToSolar: IEndpoint;
  convertSolarToLunar: IEndpoint;
  getCanChi: IEndpoint;
}
interface IEthnicMinoritiesEndpoints {
  getEthnicMinorities: IEndpoint;
}
interface IFinanceEndpoints {
  getStockCompanies: IEndpoint;
  getStockHistory: IEndpoint;
  getStockHighlights: IEndpoint;
  getStockPotentials: IEndpoint;
  calculateProfit: IEndpoint;
}
interface IGovernmentEndpoints {
  getGeneralSecretaries: IEndpoint;
  getPresidents: IEndpoint;
  getPrimeMinisters: IEndpoint;
  getNationalAssemblyChairs: IEndpoint;
  getNationalAssemblyMembers: IEndpoint;
  getMinistries: IEndpoint;
  getMinisters: IEndpoint;
}

interface IHistoryEndpoints {}

interface ILicensePlatesEndpoints {
  getLicensePlates: IEndpoint;
}

interface IMusicEndpoints {
  getMusicArtists: IEndpoint;
}

interface INewsEndpoints {
  getArticles: IEndpoint;
  getTrends: IEndpoint;
  getSources: IEndpoint;
  getCategories: IEndpoint;
}
interface IPhonesEndpoints {
  getPhonesPrefixes: IEndpoint;
  getPhonesProviders: IEndpoint;
}
interface ISportsEndpoints {
  getSportsClubs: IEndpoint;
}
interface ITechnologiesEndpoints {
  getTechnologies: IEndpoint;
  getGHNProvinces: IEndpoint;
  getGHNDistricts: IEndpoint;
  getGHNWards: IEndpoint;
  getVietceteraArticles: IEndpoint;
}

export interface IEndpoint {
  id: string;
  public: boolean;
  name: string;
  path: string;
  url: string;
  demo: string;
  method: string;
  request: IEndpointRequest;
  response: IEndpointResponse;
}

export interface IEndpointRequest {
  headers?: Array<IEndpointRequestHeader>;
  query: Array<IEndpointRequestQuery>;
  body: Array<IEndpointRequestBody>;
}

interface IEndpointRequestHeader {
  key: string;
  value: string;
}

interface IEndpointRequestQuery {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface IEndpointRequestBody {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface IEndpointResponse {
  200: IEndpointResponseDetails;
  400: IEndpointResponseDetails;
}

interface IEndpointResponseDetails {
  schema: Array<IEndpointResponseSchema>;
  example: any;
}

interface IEndpointResponseSchema {
  name: string;
  type: string;
  description: string;
}

export const endpoints: IEndpoints = {
  administrativeDivisions: {
    getPostalCodes: {
      id: 'getPostalCodes',
      name: 'Get Postal Codes',
      public: true,
      method: 'GET',
      path: '/administrative-divisions/postal-codes',
      url: `${baseAPI}/administrative-divisions/postal-codes`,
      demo: 'administrative-divisions-postal-codes',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'province_id', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'code', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' },
            { name: 'province_id', type: 'string', description: '' }
          ],
          example: [
            {
              code: '<string>',
              province: '<string>',
              province_id: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getProvinces: {
      id: 'getProvinces',
      name: 'Get Provinces',
      public: true,
      method: 'GET',
      path: '/administrative-divisions/provinces',
      url: `${baseAPI}/administrative-divisions/provinces`,
      demo: 'administrative-divisions-provinces',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [
          { name: 'level_en', type: 'string', required: false, description: '' },
          { name: 'macro_region_en', type: 'string', required: false, description: '' }
        ],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'province_id', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'capital', type: 'string', description: '' },
            { name: 'level', type: 'string', description: '' },
            { name: 'level_en', type: 'string', description: '' },
            { name: 'macro_region', type: 'string', description: '' },
            { name: 'macro_region_en', type: 'string', description: '' },
            { name: 'region', type: 'string', description: '' },
            { name: 'region_en', type: 'string', description: '' }
          ],
          example: [
            {
              province_id: '<string>',
              name: '<string>',
              capital: '<string>',
              level: '<string>',
              level_en: '<string>',
              macro_region: '<string>',
              macro_region_en: '<string>',
              region: '<string>',
              region_en: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getDistricts: {
      id: 'getDistricts',
      name: 'Get Districts',
      public: true,
      method: 'GET',
      path: '/administrative-divisions/districts',
      url: `${baseAPI}/administrative-divisions/districts`,
      demo: 'administrative-divisions-districts',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'province_id', type: 'string', required: true, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'name', type: 'string', description: '' },
            { name: 'level', type: 'string', description: '' },
            { name: 'level_en', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' },
            { name: 'province_id', type: 'string', description: '' }
          ],
          example: [
            {
              name: '<string>',
              level: '<string>',
              level_en: '<string>',
              province: '<string>',
              province_id: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getWards: {
      id: 'getWards',
      name: 'Get Wards',
      public: true,
      method: 'GET',
      path: '/administrative-divisions/wards',
      url: `${baseAPI}/administrative-divisions/wards`,
      demo: 'administrative-divisions-wards',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [
          { name: 'skip', type: 'number', required: false, description: '' },
          { name: 'limit', type: 'number', required: false, description: '' }
        ],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'ward', type: 'string', description: '' },
            { name: 'district', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' }
          ],
          example: [
            {
              ward: '<string>',
              district: '<string>',
              province: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getTotalWards: {
      id: 'getTotalWards',
      name: 'Get Total Wards',
      public: false,
      method: 'GET',
      path: '/administrative-divisions/wards/total',
      url: `${baseAPI}/administrative-divisions/wards/total`,
      demo: 'administrative-divisions-wards',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [{ name: 'total', type: 'number', description: '' }],
          example: [{ total: '<number>' }]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  banks: {
    getForexBanks: {
      id: 'getForexBanks',
      name: 'Get Forex Banks',
      public: true,
      path: '/banks/forex/banks',
      url: `${baseAPI}/banks/forex/banks`,
      demo: 'banks-list',
      method: 'GET',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'id', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' }
          ],
          example: [{ id: '<string>', name: '<string>', url: '<string>' }]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getForexRates: {
      id: 'getForexRates',
      name: 'Get Forex Rates',
      public: true,
      method: 'GET',
      path: '/banks/forex/rates',
      url: `${baseAPI}/banks/forex/rates`,
      demo: 'banks-forex',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'currencies', type: 'Array<string>', description: '' },
            { name: 'data', type: 'Array<Rates>', description: '' }
          ],
          example: {
            currencies: '<Array<string>>',
            data: '<Array<any>>'
          }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    syncForexRates: {
      id: 'syncForexRates',
      name: 'Sync Forex Rates',
      public: false,
      method: 'POST',
      path: '/banks/forex/sync',
      url: `${baseAPI}/banks/forex/sync`,
      demo: 'banks-list',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [{ name: 'id', required: true, type: 'string', description: '' }]
      },
      response: {
        200: {
          schema: [{ name: 'status', type: 'string', description: '' }],
          example: { status: '<string>' }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  calendar: {
    convertLunarToSolar: {
      id: 'convertLunarToSolar',
      name: 'Convert Lunar Date to Solar Date',
      public: true,
      method: 'POST',
      path: '/calendar/lunar2solar',
      url: `${baseAPI}/calendar/lunar2solar`,
      demo: 'calendar-converter',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'year', required: true, type: 'number', description: '' },
          { name: 'month', required: true, type: 'number', description: '' },
          { name: 'date', required: true, type: 'number', description: '' }
        ]
      },
      response: {
        200: {
          schema: [
            { name: 'year', type: 'number', description: '' },
            { name: 'month', type: 'number', description: '' },
            { name: 'date', type: 'number', description: '' }
          ],
          example: { year: '<number>', month: '<number>', date: '<number>' }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    convertSolarToLunar: {
      id: 'convertSolarToLunar',
      name: 'Convert Solar Date to Lunar Date',
      public: true,
      method: 'POST',
      path: '/calendar/solar2lunar',
      url: `${baseAPI}/calendar/solar2lunar`,
      demo: 'calendar-converter',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'year', required: true, type: 'number', description: '' },
          { name: 'month', required: true, type: 'number', description: '' },
          { name: 'date', required: true, type: 'number', description: '' }
        ]
      },
      response: {
        200: {
          schema: [
            { name: 'year', type: 'number', description: '' },
            { name: 'month', type: 'number', description: '' },
            { name: 'date', type: 'number', description: '' }
          ],
          example: { year: '<number>', month: '<number>', date: '<number>' }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getCanChi: {
      id: 'getCanChi',
      name: 'Get Can Chi of Lunar Date',
      public: true,
      method: 'POST',
      path: '/calendar/lunar/can-chi',
      url: `${baseAPI}/calendar/lunar/can-chi`,
      demo: 'calendar-converter',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'year', required: true, type: 'number', description: '' },
          { name: 'month', required: true, type: 'number', description: '' },
          { name: 'date', required: true, type: 'number', description: '' }
        ]
      },
      response: {
        200: {
          schema: [{ name: 'canChi', type: 'string', description: '' }],
          example: { canChi: '<string>' }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  ethnicMinorities: {
    getEthnicMinorities: {
      id: 'getEthnicMinorities',
      name: 'Get Ethnic Minorities',
      public: true,
      method: 'GET',
      path: '/ethnic-minorities',
      url: `${baseAPI}/ethnic-minorities`,
      demo: 'ethnic-minorities-list',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'type_en', required: false, type: 'string', description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'name', type: 'string', description: '' },
            { name: 'type', type: 'string', description: '' },
            { name: 'type_en', type: 'string', description: '' }
          ],
          example: [{ name: 'Kinh', type: 'Việt - Mường', type_en: 'Vietic' }]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  finance: {
    getStockCompanies: {
      id: 'getStockCompanies',
      name: 'Get Listed Companies',
      public: true,
      method: 'GET',
      path: '/finance/companies',
      url: `${baseAPI}/finance/companies`,
      demo: 'finance-companies',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'market', type: 'string', description: '' },
            { name: 'group', type: 'string', description: '' },
            { name: 'symbol', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'industry', type: 'string', description: '' },
            { name: 'supersector', type: 'string', description: '' },
            { name: 'sector', type: 'string', description: '' },
            { name: 'subsector', type: 'string', description: '' },
            { name: 'listingDate', type: 'string', description: '' }
          ],
          example: [
            {
              market: '<string>',
              group: '<string>',
              symbol: '<string>',
              name: '<string>',
              industry: '<string>',
              supersector: '<string>',
              sector: '<string>',
              subsector: '<string>',
              listingDate: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getStockHistory: {
      id: 'getStockHistory',
      name: 'Get Stock History',
      public: true,
      method: 'GET',
      path: '/finance/history',
      url: `${baseAPI}/finance/history`,
      demo: 'finance-history',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [
          { name: 'symbol', type: 'string', required: true, description: '' },
          { name: 'from', type: 'number', required: true, description: '' },
          { name: 'to', type: 'number', required: true, description: '' }
        ],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'symbol', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'group', type: 'string', description: '' },
            { name: 'industry', type: 'string', description: '' },
            { name: 'subsector', type: 'string', description: '' },
            { name: 'history', type: 'Array<Date>', description: '' }
          ],
          example: {
            symbol: '<string>',
            name: '<string>',
            group: '<string>',
            industry: '<string>',
            subsector: '<string>',
            history: '<Array<any>>'
          }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getStockHighlights: {
      id: 'getStockHighlights',
      name: 'Get Stock Highlights',
      public: false,
      method: 'POST',
      path: '/finance/highlights',
      url: `${baseAPI}/finance/highlights`,
      demo: 'finance-highlights',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'from', type: 'number', required: true, description: '' },
          { name: 'to', type: 'number', required: true, description: '' }
        ]
      },
      response: {
        200: {
          schema: [
            { name: 'average', type: 'number', description: '' },
            { name: 'diff', type: 'number', description: '' },
            { name: 'diffToMax', type: 'number', description: '' },
            { name: 'diffToMin', type: 'number', description: '' },
            { name: 'group', type: 'string', description: '' },
            { name: 'industry', type: 'string', description: '' },
            { name: 'latest', type: 'number', description: '' },
            { name: 'latestDate', type: 'string', description: '' },
            { name: 'low', type: 'boolean', description: '' },
            { name: 'max', type: 'number', description: '' },
            { name: 'maxDate', type: 'string', description: '' },
            { name: 'median', type: 'number', description: '' },
            { name: 'min', type: 'number', description: '' },
            { name: 'minDate', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'numberOfDates', type: 'number', description: '' },
            { name: 'start', type: 'number', description: '' },
            { name: 'startDate', type: 'string', description: '' },
            { name: 'subsector', type: 'string', description: '' },
            { name: 'symbol', type: 'string', description: '' }
          ],
          example: [
            {
              average: '<number>',
              diff: '<number>',
              diffToMax: '<number>',
              diffToMin: '<number>',
              group: '<string>',
              industry: '<string>',
              latest: '<number>',
              latestDate: '<string>',
              low: '<boolean>',
              max: '<number>',
              maxDate: '<string>',
              median: '<number>',
              min: '<number>',
              minDate: '<string>',
              name: '<string>',
              numberOfDates: '<number>',
              start: '<number>',
              startDate: '<string>',
              subsector: '<string>',
              symbol: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getStockPotentials: {
      id: 'getStockPotentials',
      name: 'Get Stock Potentials',
      public: false,
      method: 'POST',
      path: '/finance/potentials',
      url: `${baseAPI}/finance/potentials`,
      demo: 'finance-potentials',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'from', type: 'number', required: true, description: '' },
          { name: 'to', type: 'number', required: true, description: '' }
        ]
      },
      response: {
        200: {
          schema: [
            { name: 'average', type: 'number', description: '' },
            { name: 'diff', type: 'number', description: '' },
            { name: 'diffToMax', type: 'number', description: '' },
            { name: 'diffToMin', type: 'number', description: '' },
            { name: 'group', type: 'string', description: '' },
            { name: 'industry', type: 'string', description: '' },
            { name: 'latest', type: 'number', description: '' },
            { name: 'latestDate', type: 'string', description: '' },
            { name: 'low', type: 'boolean', description: '' },
            { name: 'max', type: 'number', description: '' },
            { name: 'maxDate', type: 'string', description: '' },
            { name: 'median', type: 'number', description: '' },
            { name: 'min', type: 'number', description: '' },
            { name: 'minDate', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'numberOfDates', type: 'number', description: '' },
            { name: 'start', type: 'number', description: '' },
            { name: 'startDate', type: 'string', description: '' },
            { name: 'subsector', type: 'string', description: '' },
            { name: 'symbol', type: 'string', description: '' }
          ],
          example: [
            {
              average: '<number>',
              diff: '<number>',
              diffToMax: '<number>',
              diffToMin: '<number>',
              group: '<string>',
              industry: '<string>',
              latest: '<number>',
              latestDate: '<string>',
              low: '<boolean>',
              max: '<number>',
              maxDate: '<string>',
              median: '<number>',
              min: '<number>',
              minDate: '<string>',
              name: '<string>',
              numberOfDates: '<number>',
              start: '<number>',
              startDate: '<string>',
              subsector: '<string>',
              symbol: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    calculateProfit: {
      id: 'calculateProfit',
      name: 'Calculate Profit',
      public: false,
      method: 'POST',
      path: '/finance/profit',
      url: `${baseAPI}/finance/profit`,
      demo: 'finance-profit',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'buy', type: 'number', required: true, description: '' },
          { name: 'sell', type: 'number', required: true, description: '' },
          { name: 'volume', type: 'number', required: true, description: '' }
        ]
      },
      response: {
        200: {
          schema: [{ name: 'profit', type: 'number', description: '' }],
          example: { profit: '<number>' }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  government: {
    getGeneralSecretaries: {
      id: 'getGeneralSecretaries',
      name: 'Get General Secretaries',
      public: true,
      method: 'GET',
      path: '/government/general-secretaries',
      url: `${baseAPI}/government/general-secretaries`,
      demo: 'government-general-secretaries',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'title_en', type: 'string', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              title_en: '<string>',
              title_short: '<string>',
              name: '<string>',
              gender: '<string>',
              gender_en: '<string>',
              start_date: '<string>',
              end_date: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getPresidents: {
      id: 'getPresidents',
      name: 'Get Presidents',
      public: true,
      method: 'GET',
      path: '/government/presidents',
      url: `${baseAPI}/government/presidents`,
      demo: 'government-presidents',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'title_en', type: 'number', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              title_en: '<string>',
              title_short: '<string>',
              name: '<string>',
              gender: '<string>',
              gender_en: '<string>',
              start_date: '<string>',
              end_date: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getPrimeMinisters: {
      id: 'getPrimeMinisters',
      name: 'Get Prime Ministers',
      public: true,
      method: 'GET',
      path: '/government/prime-ministers',
      url: `${baseAPI}/government/prime-ministers`,
      demo: 'government-prime-ministers',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'title_en', type: 'number', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              title_en: '<string>',
              title_short: '<string>',
              name: '<string>',
              gender: '<string>',
              gender_en: '<string>',
              start_date: '<string>',
              end_date: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getNationalAssemblyChairs: {
      id: 'getNationalAssemblyChairs',
      name: 'Get National Assembly Chairs',
      public: true,
      method: 'GET',
      path: '/government/national-assembly/chairs',
      url: `${baseAPI}/government/national-assembly/chairs`,
      demo: 'government-national-assembly-chairs',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'title_en', type: 'number', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              title_en: '<string>',
              title_short: '<string>',
              name: '<string>',
              gender: '<string>',
              gender_en: '<string>',
              start_date: '<string>',
              end_date: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getNationalAssemblyMembers: {
      id: 'getNationalAssemblyMembers',
      name: 'Get National Assembly Members',
      public: true,
      method: 'GET',
      path: '/government/national-assembly/members',
      url: `${baseAPI}/government/national-assembly/members`,
      demo: 'government-national-assembly-members',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'no', type: 'number', required: true, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'no', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'date_of_birth', type: 'string', description: '' },
            { name: 'city_of_birth', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'degree', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' },
            { name: 'district', type: 'string', description: '' },
            { name: 'percentage', type: 'number', description: '' }
          ],
          example: [
            {
              no: '<number>',
              name: '<string>',
              date_of_birth: '<string>',
              city_of_birth: '<string>',
              gender: '<string>',
              degree: '<string>',
              province: '<string>',
              district: '<string>',
              percentage: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getMinistries: {
      id: 'getMinistries',
      name: 'Get Ministries',
      public: true,
      method: 'GET',
      path: '/government/ministries',
      url: `${baseAPI}/government/ministries`,
      demo: 'government-ministries',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'level_en', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'name_en', type: 'string', description: '' },
            { name: 'level', type: 'string', description: '' },
            { name: 'level_en', type: 'string', description: '' }
          ],
          example: [
            {
              short: '<string>',
              name: '<string>',
              name_en: '<string>',
              level: '<string>',
              level_en: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getMinisters: {
      id: 'getMinisters',
      name: 'Get Ministers',
      public: true,
      method: 'GET',
      path: '/government/ministers',
      url: `${baseAPI}/government/ministers`,
      demo: 'government-ministers',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [{ name: 'ministry', type: 'string', required: true, description: '' }]
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'title_en', type: 'number', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              title_en: '<string>',
              title_short: '<string>',
              name: '<string>',
              gender: '<string>',
              gender_en: '<string>',
              start_date: '<string>',
              end_date: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  history: {},
  licensePlates: {
    getLicensePlates: {
      id: 'getLicensePlates',
      name: 'Get License Plates',
      public: true,
      method: 'GET',
      path: '/license-plates',
      url: `${baseAPI}/license-plates`,
      demo: 'license-plates-list',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'license', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'license', type: 'string', description: '' },
            { name: 'definition', type: 'string', description: '' },
            { name: 'type', type: 'string', description: '' }
          ],
          example: [{ license: '29', definition: 'Hà Nội', type: 'Tỉnh' }]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  music: {
    getMusicArtists: {
      id: 'getMusicArtists',
      name: 'Get Music Artists',
      public: true,
      method: 'GET',
      path: '/music/artists',
      url: `${baseAPI}/music/artists`,
      demo: 'music-artists',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [{ name: 'name', type: 'string', description: '' }],
          example: [
            {
              name: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  news: {
    getArticles: {
      id: 'getArticles',
      name: 'Get Articles',
      public: true,
      method: 'GET',
      path: '/news',
      url: `${baseAPI}/news`,
      demo: 'news-feed',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [
          { name: 'category', type: 'string', required: true, description: '' },
          { name: 'source', type: 'string', required: true, description: '' }
        ],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' },
            { name: 'source', type: 'string', description: '' },
            { name: 'description', type: 'string', description: '' },
            { name: 'pubDate', type: 'string', description: '' },
            { name: 'day', type: 'string', description: '' },
            { name: 'year', type: 'number', description: '' },
            { name: 'month', type: 'number', description: '' },
            { name: 'date', type: 'number', description: '' },
            { name: 'hours', type: 'number', description: '' },
            { name: 'minutes', type: 'number', description: '' },
            { name: 'seconds', type: 'number', description: '' },
            { name: 'timestamp', type: 'number', description: '' },
            { name: 'dateTimeString', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              url: '<string>',
              source: '<string>',
              description: '<string>',
              pubDate: '<string>',
              day: '<string>',
              year: '<number>',
              month: '<number>',
              date: '<number>',
              hours: '<number>',
              minutes: '<number>',
              seconds: '<number>',
              timestamp: '<number>',
              dateTimeString: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getTrends: {
      id: 'getTrends',
      name: 'Get (Google) Trends',
      public: true,
      method: 'GET',
      path: '/news/trends',
      url: `${baseAPI}/news/trends`,
      demo: 'news-trends',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'year', type: 'number', description: '' },
            { name: 'month', type: 'number', description: '' },
            { name: 'date', type: 'number', description: '' },
            { name: 'hour', type: 'number', description: '' },
            { name: 'trends', type: 'Array<string>', description: '' }
          ],
          example: {
            year: '<number>',
            month: '<number>',
            date: '<number>',
            hour: '<number>',
            categories: '<Array<string>>'
          }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getSources: {
      id: 'getSources',
      name: 'Get Sources',
      public: true,
      method: 'GET',
      path: '/news/sources',
      url: `${baseAPI}/news/sources`,
      demo: 'news-sources',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'id', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' },
            { name: 'category', type: 'string', description: '' },
            { name: 'categories', type: 'Array<string>', description: '' }
          ],
          example: [
            {
              id: '<string>',
              name: '<string>',
              url: '<string>',
              category: '<string>',
              categories: '<Array<string>>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getCategories: {
      id: 'getCategories',
      name: 'Get Categories',
      public: true,
      method: 'GET',
      path: '/news/categories',
      url: `${baseAPI}/news/categories`,
      demo: 'news-categories',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'total', type: 'number', description: '' },
            { name: 'categories', type: 'Array<string>', description: '' }
          ],
          example: {
            total: '<number>',
            categories: '<Array<string>>'
          }
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  phones: {
    getPhonesPrefixes: {
      id: 'getPhonesPrefixes',
      name: 'Get Phone Prefixes',
      public: true,
      method: 'GET',
      path: '/phones/prefixes',
      url: `${baseAPI}/phones/prefixes`,
      demo: 'phones-prefixes',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'prefix', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'id', type: 'string', description: '' },
            { name: 'prefix', type: 'string', description: '' },
            { name: 'provider', type: 'string', description: '' },
            { name: 'provider_id', type: 'string', description: '' }
          ],
          example: [
            {
              id: '<string>',
              prefix: '<string>',
              provider: '<string>',
              provider_id: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getPhonesProviders: {
      id: 'getPhonesProviders',
      name: 'Get Phone Providers',
      public: true,
      method: 'GET',
      path: '/phones/providers',
      url: `${baseAPI}/phones/providers`,
      demo: 'phones-providers',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'provider', type: 'string', description: '' },
            { name: 'prefixes', type: 'Array<string>', description: '' }
          ],
          example: [
            {
              provider: '<string>',
              prefixes: '<Array<string>>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  sports: {
    getSportsClubs: {
      id: 'getSportsClubs',
      name: 'Get Sports Clubs',
      public: true,
      method: 'GET',
      path: '/sports/clubs',
      url: `${baseAPI}/sports/clubs`,
      demo: 'sports-clubs',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'sport_en', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'sport', type: 'string', description: '' },
            { name: 'sport_en', type: 'string', description: '' },
            { name: 'competition', type: 'string', description: '' },
            { name: 'city', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' }
          ],
          example: [
            {
              sport: '<string>',
              sport_en: '<string>',
              competition: '<string>',
              city: '<string>',
              name: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  },
  technologies: {
    getTechnologies: {
      id: 'getTechnologies',
      name: 'Get Public APIs',
      public: true,
      method: 'GET',
      path: '/technologies',
      url: `${baseAPI}/technologies`,
      demo: 'technologies-apis',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'type_id', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'name', type: 'string', description: '' },
            { name: 'type', type: 'string', description: '' },
            { name: 'type_id', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' },
            { name: 'npm', type: 'string', description: '' }
          ],
          example: [
            {
              name: '<string>',
              type: '<string>',
              type_id: '<string>',
              url: '<string>',
              npm: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getGHNProvinces: {
      id: 'getGHNProvinces',
      name: 'GHN - Get Provinces',
      public: true,
      method: 'GET',
      path: '/technologies/giaohangnhanh/provinces',
      url: `${baseAPI}/technologies/giaohangnhanh/provinces`,
      demo: 'technologies-ghn-provinces',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'province_id', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'code', type: 'string', description: '' }
          ],
          example: [
            {
              province_id: '<string>',
              name: '<string>',
              code: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getGHNDistricts: {
      id: 'getGHNDistricts',
      name: 'GHN - Get Districts',
      public: true,
      method: 'GET',
      path: '/technologies/giaohangnhanh/districts',
      url: `${baseAPI}/technologies/giaohangnhanh/districts`,
      demo: 'technologies-ghn-districts',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'province_id', type: 'number', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'district_id', type: 'number', description: '' },
            { name: 'province_id', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'code', type: 'string', description: '' },
            { name: 'type', type: 'number', description: '' },
            { name: 'support_type', type: 'number', description: '' }
          ],
          example: [
            {
              district_id: '<string>',
              province_id: '<string>',
              name: '<string>',
              code: '<string>',
              type: '<number>',
              support_type: '<number>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getGHNWards: {
      id: 'getGHNWards',
      name: 'GHN - Get Wards',
      public: true,
      method: 'GET',
      path: '/technologies/giaohangnhanh/wards',
      url: `${baseAPI}/technologies/giaohangnhanh/wards`,
      demo: 'technologies-ghn-wards',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'district_id', type: 'number', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'district_id', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'code', type: 'string', description: '' }
          ],
          example: [
            {
              district_id: '<string>',
              name: '<string>',
              code: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    },
    getVietceteraArticles: {
      id: 'getVietceteraArticles',
      name: 'Get Vietcetera Articles',
      public: true,
      method: 'GET',
      path: '/technologies/vietcetera',
      url: `${baseAPI}/technologies/vietcetera`,
      demo: 'technologies-vietcetera',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'type', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'title', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' },
            { name: 'publishDate', type: 'string', description: '' },
            { name: 'description', type: 'string', description: '' }
          ],
          example: [
            {
              title: '<string>',
              url: '<string>',
              publishDate: '<string>',
              description: '<string>'
            }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: '<string>' }
        }
      }
    }
  }
};
