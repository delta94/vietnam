import { baseAPI } from '../../urls';

const getAirVisualCities = {
  id: 'getAirVisualCities',
  name: 'Get Air Visual Cities',
  public: true,
  method: 'GET',
  path: '/weather/air-visual/cities',
  url: `${baseAPI}/weather/air-visual/cities`,
  demo: 'weather-air-visual',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'city', type: 'string', description: '' },
        { name: 'state', type: 'string', description: '' },
        { name: 'country', type: 'string', description: '' }
      ],
      example: [
        {
          city: '<string>',
          state: '<string>',
          country: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getAirVisualCities;
