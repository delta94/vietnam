import { baseAPI } from '../../urls';

const getArticles = {
  id: 'getArticles',
  name: 'Get Articles',
  public: true,
  method: 'GET',
  path: '/news/articles',
  url: `${baseAPI}/news/articles`,
  demo: 'news-feed',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [
      { name: 'source', type: 'string', required: false, description: '' },
      { name: 'category', type: 'string', required: false, description: '' }
    ],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'title', type: 'string', description: '' },
        { name: 'url', type: 'string', description: '' },
        { name: 'source', type: 'string', description: '' },
        { name: 'description', type: 'string', description: '' },
        { name: 'publishedDate', type: 'string', description: '' },
        { name: 'sourceURL', type: 'string', description: '' }
      ],
      example: [
        {
          title: '<string>',
          url: '<string>',
          source: '<string>',
          sourceURL: '<string>',
          description: '<string>',
          publishedDate: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getArticles;
