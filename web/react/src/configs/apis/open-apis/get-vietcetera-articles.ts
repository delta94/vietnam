import { baseAPI } from '../../urls';

const getVietceteraArticles = {
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
};

export default getVietceteraArticles;
