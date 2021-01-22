import { baseAPI } from '../../urls';

const getVideoCategories = {
  id: 'getVideoCategories',
  name: 'Get Video Categories',
  public: true,
  method: 'GET',
  path: '/youtube/video-categories',
  url: `${baseAPI}/youtube/video-categories`,
  demo: 'youtube-trending',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'id', type: 'string', description: '' },
        { name: 'title', type: 'string', description: '' },
        { name: 'assignable', type: 'boolean', description: '' },
        { name: 'channelId', type: 'string', description: '' }
      ],
      example: [
        {
          id: '<string>',
          title: '<string>',
          assignable: '<string>',
          channelId: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getVideoCategories;
