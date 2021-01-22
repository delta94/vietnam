import { baseAPI } from '../../urls';

const getTotalWards = {
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
      example: { total: '<number>' }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getTotalWards;
