import { baseAPI } from '../../urls';

const getProvinces = {
  id: 'getProvinces',
  name: 'Get Provinces',
  public: true,
  method: 'GET',
  path: '/administrative-divisions/provinces',
  url: `${baseAPI}/administrative-divisions/provinces`,
  demo: 'administrative-divisions-provinces',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [
      { name: 'level_en', type: 'string', required: false, description: '' },
      { name: 'macro_region_en', type: 'string', required: false, description: '' }
    ],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'province_id', type: 'string', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'capital', type: 'string', description: '' },
        { name: 'level', type: 'string', description: '' },
        { name: 'level_en', type: 'string', description: '' },
        { name: 'macro_region', type: 'string', description: '' },
        { name: 'macro_region_en', type: 'string', description: '' },
        { name: 'region', type: 'string', description: '' },
        { name: 'region_en', type: 'string', description: '' }
      ],
      example: [
        {
          province_id: '<string>',
          name: '<string>',
          capital: '<string>',
          level: '<string>',
          level_en: '<string>',
          macro_region: '<string>',
          macro_region_en: '<string>',
          region: '<string>',
          region_en: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getProvinces;
