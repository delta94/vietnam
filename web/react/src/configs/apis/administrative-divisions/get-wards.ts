import { baseAPI } from '../../urls';

const getWards = {
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
};

export default getWards;
