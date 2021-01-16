import { baseAPI } from './urls';

const news = {
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
  },
  getCategories: {
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
  },
  getArticles: {
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
  }
};

export default news;
