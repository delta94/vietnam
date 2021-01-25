import { baseAPI } from '../../urls';

const getForexRates = {
  id: 'getForexRates',
  name: 'Get Forex Rates',
  public: true,
  method: 'GET',
  path: '/banks/forex/rates',
  url: `${baseAPI}/banks/forex/rates`,
  demo: 'banks-forex-rates',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'bank', type: 'string', description: '' },
        { name: 'code', type: 'string', description: '' },
        { name: 'buyCash', type: 'string', description: '' },
        { name: 'buyTransfer', type: 'string', description: '' },
        { name: 'sellCash', type: 'string', description: '' },
        { name: 'sellTransfer', type: 'string', description: '' }
      ],
      example: {
        bank: '<string>',
        code: '<string>',
        buyCash: '<string>',
        buyTransfer: '<string>',
        sellCash: '<string>',
        sellTransfer: '<string>'
      }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getForexRates;
