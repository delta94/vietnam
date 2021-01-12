import { baseAPI } from './urls';

const openAPIs = {
  getOpenAPIs: {
    id: 'getOpenAPIs',
    name: 'Get Open APIs',
    public: true,
    method: 'GET',
    path: '/open-apis',
    url: `${baseAPI}/open-apis`,
    demo: 'open-apis-list',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'type_id', type: 'string', required: false, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'name', type: 'string', description: '' },
          { name: 'type', type: 'string', description: '' },
          { name: 'type_id', type: 'string', description: '' },
          { name: 'url', type: 'string', description: '' },
          { name: 'npm', type: 'string', description: '' }
        ],
        example: [
          {
            name: '<string>',
            type: '<string>',
            type_id: '<string>',
            url: '<string>',
            npm: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getGHNProvinces: {
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
  },
  getGHNDistricts: {
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
  },
  getGHNWards: {
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
  },
  getVietceteraArticles: {
    id: 'getVietceteraArticles',
    name: 'Get Vietcetera Articles',
    public: true,
    method: 'GET',
    path: '/open-apis/vietcetera',
    url: `${baseAPI}/open-apis/vietcetera`,
    demo: 'open-apis-vietcetera',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'type', type: 'string', required: false, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'url', type: 'string', description: '' },
          { name: 'publishDate', type: 'string', description: '' },
          { name: 'description', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            url: '<string>',
            publishDate: '<string>',
            description: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  }
};

export default openAPIs;
