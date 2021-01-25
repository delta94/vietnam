import { baseAPI } from '../../urls';

const getBanks = {
  id: 'getBanks',
  name: 'Get Banks',
  public: true,
  path: '/banks',
  url: `${baseAPI}/banks`,
  demo: 'banks-list',
  method: 'GET',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'code', type: 'string', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'name_en', type: 'string', description: '' },
        { name: 'name_short', type: 'string', description: '' },
        { name: 'type', type: 'string', description: '' },
        { name: 'type_en', type: 'string', description: '' },
        { name: 'url', type: 'string', description: '' }
      ],
      example: [
        {
          code: '<string>',
          name: '<string>',
          name_en: '<string>',
          name_short: '<string>',
          type: '<string>',
          type_en: '<string>',
          url: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getBanks;
