import { baseAPI } from '../../urls';

const getGHNProvinces = {
  id: 'getGHNProvinces',
  name: 'GHN - Get Provinces',
  public: true,
  method: 'GET',
  path: '/open-apis/giaohangnhanh/provinces',
  url: `${baseAPI}/open-apis/giaohangnhanh/provinces`,
  demo: 'open-apis-ghn-provinces',
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
      ],
      example: [
        {
          province_id: '<string>',
          name: '<string>',
          code: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getGHNProvinces;
