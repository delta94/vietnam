import { baseAPI } from '../../urls';

const getGHNWards = {
  id: 'getGHNWards',
  name: 'GHN - Get Wards',
  public: true,
  method: 'GET',
  path: '/open-apis/giaohangnhanh/wards',
  url: `${baseAPI}/open-apis/giaohangnhanh/wards`,
  demo: 'open-apis-ghn-wards',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'district_id', type: 'number', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'district_id', type: 'number', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'code', type: 'string', description: '' }
      ],
      example: [
        {
          district_id: '<string>',
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

export default getGHNWards;
