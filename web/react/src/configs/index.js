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
      id: 'getForexBanks',
      name: 'Get Forex Banks',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getForexRates: {
      id: 'getForexRates',
      name: 'Get Forex Rates',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    syncForexRates: {
      id: 'syncForexRates',
      name: 'Sync Forex Rates',
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
        200: { schema: [{ name: 'status', type: 'string', description: '' }] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  calendar: {
    convertLunarToSolar: {
      id: 'convertLunarToSolar',
      name: 'Convert Lunar Date to Solar Date',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    convertSolarToLunar: {
      id: 'convertSolarToLunar',
      name: 'Convert Solar Date to Lunar Date',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getCanChi: {
      id: 'getCanChi',
      name: 'Get Can Chi of Lunar Date',
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
        200: { schema: [{ name: 'canChi', type: 'string', description: '' }] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  ethnicMinorities: {
    getEthnicMinorities: {
      id: 'getEthnicMinorities',
      name: 'Get Ethnic Minorities',
      method: 'GET',
      path: '/ethnic-minorities',
      url: `${baseAPI}/ethnic-minorities`,
      demo: 'ethnic-minorities',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  finance: {
    getStockCompanies: {
      id: 'getStockCompanies',
      name: 'Get Listed Companies',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getStockHistory: {
      id: 'getStockHistory',
      name: 'Get Stock History',
      method: 'POST',
      path: '/finance/history',
      url: `${baseAPI}/finance/history`,
      demo: 'finance-history',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: [
          { name: 'symbol', type: 'string', required: true, description: '' },
          { name: 'from', type: 'number', required: true, description: '' },
          { name: 'to', type: 'number', required: true, description: '' }
        ]
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getStockHighlights: {
      id: 'getStockHighlights',
      name: 'Get Stock Highlights',
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
        200: { schema: [] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getStockPotentials: {
      id: 'getStockPotentials',
      name: 'Get Stock Potentials',
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
        200: { schema: [] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    calculateProfit: {
      id: 'calculateProfit',
      name: 'Calculate Profit',
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
        200: { schema: [{ name: 'profit', type: 'number', description: '' }] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  government: {
    getGeneralSecretaries: {
      id: 'getGeneralSecretaries',
      name: 'Get General Secretaries',
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
            { name: 'title_en', type: 'number', description: '' },
            { name: 'title_short', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'gender', type: 'string', description: '' },
            { name: 'gender_en', type: 'string', description: '' },
            { name: 'start_date', type: 'string', description: '' },
            { name: 'end_date', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getPresidents: {
      id: 'getPresidents',
      name: 'Get Presidents',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getPrimeMinisters: {
      id: 'getPrimeMinisters',
      name: 'Get Prime Ministers',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getNationalAssemblyChairs: {
      id: 'getNationalAssemblyChairs',
      name: 'Get National Assembly Chairs',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getNationalAssemblyMembers: {
      id: 'getNationalAssemblyMembers',
      name: 'Get National Assembly Members',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getMinistries: {
      id: 'getMinistries',
      name: 'Get Ministries',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getMinisters: {
      id: 'getMinisters',
      name: 'Get Ministers',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  licensePlates: {
    getLicensePlates: {
      id: 'getLicensePlates',
      name: 'Get License Plates',
      method: 'GET',
      path: '/license-plates',
      url: `${baseAPI}/license-plates`,
      demo: 'license-plates',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  maps: {
    getMapsPostalCodes: {
      id: 'getMapsPostalCodes',
      name: 'Get Postal Codes',
      method: 'GET',
      path: '/maps/postal-codes',
      url: `${baseAPI}/maps/postal-codes`,
      demo: 'maps-postal-codes',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'province_id', type: 'string', required: false, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'id', type: 'number', description: '' },
            { name: 'code', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' },
            { name: 'province_id', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getMapsProvinces: {
      id: 'getMapsProvinces',
      name: 'Get Provinces',
      method: 'GET',
      path: '/maps/provinces',
      url: `${baseAPI}/maps/provinces`,
      demo: 'maps-provinces',
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
            { name: 'id', type: 'number', description: '' },
            { name: 'province_id', type: 'string', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'capital', type: 'string', description: '' },
            { name: 'level', type: 'string', description: '' },
            { name: 'level_en', type: 'string', description: '' },
            { name: 'macro_region', type: 'string', description: '' },
            { name: 'macro_region_en', type: 'string', description: '' },
            { name: 'region', type: 'string', description: '' },
            { name: 'region_en', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getMapsDistricts: {
      id: 'getMapsDistricts',
      name: 'Get Districts',
      method: 'GET',
      path: '/maps/districts',
      url: `${baseAPI}/maps/districts`,
      demo: 'maps-districts',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [{ name: 'province_id', type: 'string', required: true, description: '' }],
        body: []
      },
      response: {
        200: {
          schema: [
            { name: 'id', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'level', type: 'string', description: '' },
            { name: 'level_en', type: 'string', description: '' },
            { name: 'province', type: 'string', description: '' },
            { name: 'province_id', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getMapsWards: {
      id: 'getMapsWards',
      name: 'Get Wards',
      method: 'GET',
      path: '/maps/wards',
      url: `${baseAPI}/maps/wards`,
      demo: 'maps-wards',
      request: {
        headers: [{ key: 'Content-Type', value: 'application/json' }],
        query: [],
        body: []
      },
      response: {
        200: { schema: [] },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  news: {
    getArticles: {
      id: 'getArticles',
      name: 'Get Articles',
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
            { name: 'date', type: 'string', description: '' },
            { name: 'year', type: 'number', description: '' },
            { name: 'month', type: 'number', description: '' },
            { name: 'date', type: 'number', description: '' },
            { name: 'hours', type: 'number', description: '' },
            { name: 'minutes', type: 'number', description: '' },
            { name: 'seconds', type: 'number', description: '' },
            { name: 'timestamp', type: 'number', description: '' },
            { name: 'dateTimeString', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getTrends: {
      id: 'getTrends',
      name: 'Get (Google) Trends',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getSources: {
      id: 'getSources',
      name: 'Get Sources',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getCategories: {
      id: 'getCategories',
      name: 'Get Categories',
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
          schema: []
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  phones: {
    getPhonesPrefixes: {
      id: 'getPhonesPrefixes',
      name: 'Get Phone Prefixes',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getPhonesProviders: {
      id: 'getPhonesProviders',
      name: 'Get Phone Providers',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  sports: {
    getSportsClubs: {
      id: 'getSportsClubs',
      name: 'Get Sports Clubs',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  },
  technologies: {
    getTechnologies: {
      id: 'getTechnologies',
      name: 'Get Public APIs',
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
            { name: 'id', type: 'number', description: '' },
            { name: 'name', type: 'string', description: '' },
            { name: 'type', type: 'string', description: '' },
            { name: 'type_id', type: 'string', description: '' },
            { name: 'url', type: 'string', description: '' },
            { name: 'npm', type: 'string', description: '' }
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getGHNProvinces: {
      id: 'getGHNProvinces',
      name: 'GHN - Get Provinces',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    },
    getVietceteraArticles: {
      id: 'getVietceteraArticles',
      name: 'Get Vietcetera Articles',
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
          ]
        },
        400: {
          schema: [{ name: 'message', type: 'string', description: '' }],
          example: { message: 'string' }
        }
      }
    }
  }
};
