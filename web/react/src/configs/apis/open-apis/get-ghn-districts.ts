import { baseAPI } from '../../urls';

const getGHNDistricts = {
  id: 'getGHNDistricts',
  name: 'GHN - Get Districts',
  public: true,
  method: 'GET',
  path: '/open-apis/giaohangnhanh/districts',
  url: `${baseAPI}/open-apis/giaohangnhanh/districts`,
  demo: 'open-apis-ghn-districts',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'province_id', type: 'number', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'district_id', type: 'number', description: '' },
        { name: 'province_id', type: 'number', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'code', type: 'string', description: '' },
        { name: 'type', type: 'number', description: '' },
        { name: 'support_type', type: 'number', description: '' }
      ],
      example: [
        {
          district_id: '<string>',
          province_id: '<string>',
          name: '<string>',
          code: '<string>',
          type: '<number>',
          support_type: '<number>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getGHNDistricts;
