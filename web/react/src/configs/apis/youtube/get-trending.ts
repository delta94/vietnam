import { baseAPI } from '../../urls';

const getTrending = {
  id: 'getTrending',
  name: 'Get Trending',
  public: true,
  method: 'GET',
  path: '/youtube/trending',
  url: `${baseAPI}/youtube/trending`,
  demo: 'youtube-trending',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'categoryId', type: 'number', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'id', type: 'string', description: '' },
        { name: 'channelId', type: 'string', description: '' },
        { name: 'title', type: 'string', description: '' },
        { name: 'publishedAt', type: 'string', description: '' },
        { name: 'description', type: 'string', description: '' },
        { name: 'channelTitle', type: 'string', description: '' },
        { name: 'tags', type: 'Array<string>', description: '' },
        { name: 'categoryId', type: 'string', description: '' },
        { name: 'url', type: 'string', description: '' }
      ],
      example: [
        {
          id: '<string>',
          channelId: '<string>',
          title: '<string>',
          publishedAt: '<string>',
          description: '<string>',
          channelTitle: '<string>',
          tags: '<Array<string>>',
          categoryId: '<string>',
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

export default getTrending;
