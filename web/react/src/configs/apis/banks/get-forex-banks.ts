import { baseAPI } from '../../urls';

const getForexBanks = {
  id: 'getForexBanks',
  name: 'Get Forex Banks',
  public: true,
  path: '/banks/forex/banks',
  url: `${baseAPI}/banks/forex/banks`,
  demo: 'banks-forex-sync',
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
};

export default getForexBanks;
