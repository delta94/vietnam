import { baseAPI } from './urls';
import { IYouTubeEndpoints } from './interfaces';

const youtube: IYouTubeEndpoints = {
  getTrending: {
    id: 'getTrending',
    name: 'Get Trending',
    public: true,
    method: 'GET',
    path: '/youtube/trending',
    url: `${baseAPI}/youtube/trending`,
    demo: 'youtube-trending',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [
        { name: 'categoryId', type: 'number', required: false, description: '' },
        { name: 'max', type: 'number', required: false, description: '' }
      ],
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
  },
  getVideoCategories: {
    id: 'getVideoCategories',
    name: 'Get Video Categories',
    public: true,
    method: 'GET',
    path: '/youtube/video-categories',
    url: `${baseAPI}/youtube/video-categories`,
    demo: 'youtube-video-categories',
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
  }
};

export default youtube;
