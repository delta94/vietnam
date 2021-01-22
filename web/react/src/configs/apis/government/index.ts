import { baseAPI } from '../../urls';
import { IGovernmentEndpoints } from '../../interfaces';

const government: IGovernmentEndpoints = {
  getGeneralSecretaries: {
    id: 'getGeneralSecretaries',
    name: 'Get General Secretaries',
    public: true,
    method: 'GET',
    path: '/government/general-secretaries',
    url: `${baseAPI}/government/general-secretaries`,
    demo: 'government-general-secretaries',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'title_en', type: 'string', description: '' },
          { name: 'title_short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'gender_en', type: 'string', description: '' },
          { name: 'start_date', type: 'string', description: '' },
          { name: 'end_date', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            title_en: '<string>',
            title_short: '<string>',
            name: '<string>',
            gender: '<string>',
            gender_en: '<string>',
            start_date: '<string>',
            end_date: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getPresidents: {
    id: 'getPresidents',
    name: 'Get Presidents',
    public: true,
    method: 'GET',
    path: '/government/presidents',
    url: `${baseAPI}/government/presidents`,
    demo: 'government-presidents',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'title_en', type: 'number', description: '' },
          { name: 'title_short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'gender_en', type: 'string', description: '' },
          { name: 'start_date', type: 'string', description: '' },
          { name: 'end_date', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            title_en: '<string>',
            title_short: '<string>',
            name: '<string>',
            gender: '<string>',
            gender_en: '<string>',
            start_date: '<string>',
            end_date: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getPrimeMinisters: {
    id: 'getPrimeMinisters',
    name: 'Get Prime Ministers',
    public: true,
    method: 'GET',
    path: '/government/prime-ministers',
    url: `${baseAPI}/government/prime-ministers`,
    demo: 'government-prime-ministers',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'title_en', type: 'number', description: '' },
          { name: 'title_short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'gender_en', type: 'string', description: '' },
          { name: 'start_date', type: 'string', description: '' },
          { name: 'end_date', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            title_en: '<string>',
            title_short: '<string>',
            name: '<string>',
            gender: '<string>',
            gender_en: '<string>',
            start_date: '<string>',
            end_date: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getNationalAssemblyChairs: {
    id: 'getNationalAssemblyChairs',
    name: 'Get National Assembly Chairs',
    public: true,
    method: 'GET',
    path: '/government/national-assembly/chairs',
    url: `${baseAPI}/government/national-assembly/chairs`,
    demo: 'government-national-assembly-chairs',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'title_en', type: 'number', description: '' },
          { name: 'title_short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'gender_en', type: 'string', description: '' },
          { name: 'start_date', type: 'string', description: '' },
          { name: 'end_date', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            title_en: '<string>',
            title_short: '<string>',
            name: '<string>',
            gender: '<string>',
            gender_en: '<string>',
            start_date: '<string>',
            end_date: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getNationalAssemblyMembers: {
    id: 'getNationalAssemblyMembers',
    name: 'Get National Assembly Members',
    public: true,
    method: 'GET',
    path: '/government/national-assembly/members',
    url: `${baseAPI}/government/national-assembly/members`,
    demo: 'government-national-assembly-members',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'no', type: 'number', required: true, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'no', type: 'number', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'date_of_birth', type: 'string', description: '' },
          { name: 'city_of_birth', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'degree', type: 'string', description: '' },
          { name: 'province', type: 'string', description: '' },
          { name: 'district', type: 'string', description: '' },
          { name: 'percentage', type: 'number', description: '' }
        ],
        example: [
          {
            no: '<number>',
            name: '<string>',
            date_of_birth: '<string>',
            city_of_birth: '<string>',
            gender: '<string>',
            degree: '<string>',
            province: '<string>',
            district: '<string>',
            percentage: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getMinistries: {
    id: 'getMinistries',
    name: 'Get Ministries',
    public: true,
    method: 'GET',
    path: '/government/ministries',
    url: `${baseAPI}/government/ministries`,
    demo: 'government-ministries',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'level_en', type: 'string', required: false, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'name_en', type: 'string', description: '' },
          { name: 'level', type: 'string', description: '' },
          { name: 'level_en', type: 'string', description: '' }
        ],
        example: [
          {
            short: '<string>',
            name: '<string>',
            name_en: '<string>',
            level: '<string>',
            level_en: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getMinisters: {
    id: 'getMinisters',
    name: 'Get Ministers',
    public: true,
    method: 'GET',
    path: '/government/ministers',
    url: `${baseAPI}/government/ministers`,
    demo: 'government-ministers',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: [{ name: 'ministry', type: 'string', required: true, description: '' }]
    },
    response: {
      200: {
        schema: [
          { name: 'title', type: 'string', description: '' },
          { name: 'title_en', type: 'number', description: '' },
          { name: 'title_short', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'gender', type: 'string', description: '' },
          { name: 'gender_en', type: 'string', description: '' },
          { name: 'start_date', type: 'string', description: '' },
          { name: 'end_date', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            title_en: '<string>',
            title_short: '<string>',
            name: '<string>',
            gender: '<string>',
            gender_en: '<string>',
            start_date: '<string>',
            end_date: '<string>'
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

export default government;
