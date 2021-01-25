import { baseAPI } from '../../urls';

const getAirVisual = {
  id: 'getAirVisual',
  name: 'Get Air Visual',
  public: true,
  method: 'GET',
  path: '/weather/air-visual',
  url: `${baseAPI}/weather/air-visual`,
  demo: 'weather-air-visual',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'city', type: 'string', required: true, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'city', type: 'string', description: '' },
        { name: 'state', type: 'string', description: '' },
        { name: 'country', type: 'string', description: '' },
        { name: 'location', type: 'object', description: '' },
        { name: 'current', type: 'object', description: '' }
      ],
      example: [
        {
          city: '<string>',
          state: '<string>',
          country: '<string>',
          location: '<object>',
          current: '<object>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getAirVisual;
