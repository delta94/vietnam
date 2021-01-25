import { baseAPI } from '../../urls';

const getStockHistory = {
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
};

export default getStockHistory;
