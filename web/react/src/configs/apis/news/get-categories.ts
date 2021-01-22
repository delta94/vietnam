import { baseAPI } from '../../urls';

const getCategories = {
  id: 'getCategories',
  name: 'Get Categories',
  public: true,
  method: 'GET',
  path: '/news/categories',
  url: `${baseAPI}/news/categories`,
  demo: 'news-feed',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'source', type: 'string', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'total', type: 'number', description: '' },
        { name: 'categories', type: 'Array<string>', description: '' }
      ],
      example: {
        total: '<number>',
        categories: '<Array<string>>'
      }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getCategories;
