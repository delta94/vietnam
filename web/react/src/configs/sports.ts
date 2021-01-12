import { baseAPI } from './urls';

const sports = {
  getSportsClubs: {
    id: 'getSportsClubs',
    name: 'Get Sports Clubs',
    public: true,
    method: 'GET',
    path: '/sports/clubs',
    url: `${baseAPI}/sports/clubs`,
    demo: 'sports-clubs',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'sport_en', type: 'string', required: false, description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'sport', type: 'string', description: '' },
          { name: 'sport_en', type: 'string', description: '' },
          { name: 'competition', type: 'string', description: '' },
          { name: 'city', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' }
        ],
        example: [
          {
            sport: '<string>',
            sport_en: '<string>',
            competition: '<string>',
            city: '<string>',
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

export default sports;
