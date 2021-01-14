import { baseAPI } from './urls';

const banks = {
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
          { name: 'total', type: 'number', description: '' },
          { name: 'banks', type: 'Array<string>', description: '' }
        ],
        example: [{ total: '<number>', banks: '<Array<string>>' }]
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
    public: true,
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
};

export default banks;
