import { baseAPI } from '../../urls';

const syncForexRates = {
  id: 'syncForexRates',
  name: 'Sync Forex Rates',
  public: true,
  method: 'POST',
  path: '/banks/forex/sync',
  url: `${baseAPI}/banks/forex/sync`,
  demo: 'banks-forex-sync',
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
};

export default syncForexRates;
