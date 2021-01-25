import { baseAPI } from '../../urls';

const calculateProfit = {
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
};

export default calculateProfit;
