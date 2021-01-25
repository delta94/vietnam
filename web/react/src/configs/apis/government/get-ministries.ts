import { baseAPI } from '../../urls';

const getMinistries = {
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
};

export default getMinistries;
