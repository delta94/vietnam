import { baseAPI } from '../../urls';

const getDistricts = {
  id: 'getDistricts',
  name: 'Get Districts',
  public: true,
  method: 'GET',
  path: '/administrative-divisions/districts',
  url: `${baseAPI}/administrative-divisions/districts`,
  demo: 'administrative-divisions-districts',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'province_id', type: 'string', required: true, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'name', type: 'string', description: '' },
        { name: 'level', type: 'string', description: '' },
        { name: 'level_en', type: 'string', description: '' },
        { name: 'province', type: 'string', description: '' },
        { name: 'province_id', type: 'string', description: '' }
      ],
      example: [
        {
          name: '<string>',
          level: '<string>',
          level_en: '<string>',
          province: '<string>',
          province_id: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getDistricts;
