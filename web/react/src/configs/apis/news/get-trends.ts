import { baseAPI } from '../../urls';

const getTrends = {
  id: 'getTrends',
  name: 'Get (Google) Trends',
  public: true,
  method: 'GET',
  path: '/news/trends',
  url: `${baseAPI}/news/trends`,
  demo: 'news-feed',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'year', type: 'number', description: '' },
        { name: 'month', type: 'number', description: '' },
        { name: 'date', type: 'number', description: '' },
        { name: 'hour', type: 'number', description: '' },
        { name: 'trends', type: 'Array<string>', description: '' }
      ],
      example: {
        year: '<number>',
        month: '<number>',
        date: '<number>',
        hour: '<number>',
        categories: '<Array<string>>'
      }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getTrends;
