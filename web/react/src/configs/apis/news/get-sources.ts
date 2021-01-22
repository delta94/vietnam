import { baseAPI } from '../../urls';

const getSources = {
  id: 'getSources',
  name: 'Get Sources',
  public: true,
  method: 'GET',
  path: '/news/sources',
  url: `${baseAPI}/news/sources`,
  demo: 'news-feed',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'total', type: 'number', description: '' },
        { name: 'sources', type: 'Array<string>', description: '' }
      ],
      example: {
        total: '<number>',
        sources: '<Array<string>>'
      }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getSources;
