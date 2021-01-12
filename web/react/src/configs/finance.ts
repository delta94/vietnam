import { baseAPI } from './urls';

const finance = {
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
};

export default finance;
