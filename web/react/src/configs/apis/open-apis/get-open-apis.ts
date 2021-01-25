import { baseAPI } from '../../urls';

const getOpenAPIs = {
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
};

export default getOpenAPIs;
