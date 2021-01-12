import { baseAPI } from './urls';

const administrativeDivisions = {
  getPostalCodes: {
    id: 'getPostalCodes',
    name: 'Get Postal Codes',
    public: true,
    method: 'GET',
    path: '/administrative-divisions/postal-codes',
    url: `${baseAPI}/administrative-divisions/postal-codes`,
    demo: 'administrative-divisions-postal-codes',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'province_id', type: 'string', required: false, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'code', type: 'string', description: '' },
          { name: 'province', type: 'string', description: '' },
          { name: 'province_id', type: 'string', description: '' }
        ],
        example: [
          {
            code: '<string>',
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
  },
  getProvinces: {
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
  },
  getDistricts: {
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
  },
  getWards: {
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
  },
  getTotalWards: {
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
        example: [{ total: '<number>' }]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  }
};

export default administrativeDivisions;
