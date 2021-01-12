import { baseAPI } from './urls';

const news = {
  getArticles: {
    id: 'getArticles',
    name: 'Get Articles',
    public: true,
    method: 'GET',
    path: '/news',
    url: `${baseAPI}/news`,
    demo: 'news-feed',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [
        { name: 'category', type: 'string', required: true, description: '' },
        { name: 'source', type: 'string', required: true, description: '' }
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
          { name: 'pubDate', type: 'string', description: '' },
          { name: 'day', type: 'string', description: '' },
          { name: 'year', type: 'number', description: '' },
          { name: 'month', type: 'number', description: '' },
          { name: 'date', type: 'number', description: '' },
          { name: 'hours', type: 'number', description: '' },
          { name: 'minutes', type: 'number', description: '' },
          { name: 'seconds', type: 'number', description: '' },
          { name: 'timestamp', type: 'number', description: '' },
          { name: 'dateTimeString', type: 'string', description: '' }
        ],
        example: [
          {
            title: '<string>',
            url: '<string>',
            source: '<string>',
            description: '<string>',
            pubDate: '<string>',
            day: '<string>',
            year: '<number>',
            month: '<number>',
            date: '<number>',
            hours: '<number>',
            minutes: '<number>',
            seconds: '<number>',
            timestamp: '<number>',
            dateTimeString: '<string>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getTrends: {
    id: 'getTrends',
    name: 'Get (Google) Trends',
    public: true,
    method: 'GET',
    path: '/news/trends',
    url: `${baseAPI}/news/trends`,
    demo: 'news-trends',
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
  },
  getSources: {
    id: 'getSources',
    name: 'Get Sources',
    public: true,
    method: 'GET',
    path: '/news/sources',
    url: `${baseAPI}/news/sources`,
    demo: 'news-sources',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'id', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          { name: 'url', type: 'string', description: '' },
          { name: 'category', type: 'string', description: '' },
          { name: 'categories', type: 'Array<string>', description: '' }
        ],
        example: [
          {
            id: '<string>',
            name: '<string>',
            url: '<string>',
            category: '<string>',
            categories: '<Array<string>>'
          }
        ]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  },
  getCategories: {
    id: 'getCategories',
    name: 'Get Categories',
    public: true,
    method: 'GET',
    path: '/news/categories',
    url: `${baseAPI}/news/categories`,
    demo: 'news-categories',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
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
  }
};

export default news;
