import { baseAPI } from './urls';

const music = {
  getMusicArtists: {
    id: 'getMusicArtists',
    name: 'Get Music Artists',
    public: true,
    method: 'GET',
    path: '/music/artists',
    url: `${baseAPI}/music/artists`,
    demo: 'music-artists',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [],
      body: []
    },
    response: {
      200: {
        schema: [{ name: 'name', type: 'string', description: '' }],
        example: [
          {
            name: '<string>'
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

export default music;
