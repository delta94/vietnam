import { baseAPI } from '../../urls';

const getCurrentWeather = {
  id: 'getCurrentWeather',
  name: 'Get Current Weather',
  public: true,
  method: 'GET',
  path: '/weather',
  url: `${baseAPI}/weather`,
  demo: 'weather-current',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'city', type: 'string', required: true, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'coord', type: 'object', description: '' },
        { name: 'weather', type: 'Array<object>', description: '' },
        { name: 'base', type: 'string', description: '' },
        { name: 'main', type: 'object', description: '' },
        { name: 'visibility', type: 'number', description: '' },
        { name: 'wind', type: 'object', description: '' },
        { name: 'clouds', type: 'object', description: '' },
        { name: 'dt', type: 'number', description: '' },
        { name: 'sys', type: 'number', description: '' },
        { name: 'timezone', type: 'number', description: '' },
        { name: 'id', type: 'number', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'cod', type: 'number', description: '' }
      ],
      example: [
        {
          coord: '<object>',
          weather: '<Array<object>>',
          base: '<string>',
          main: '<object>',
          visibility: '<number>',
          wind: '<object>',
          clouds: '<object>',
          dt: '<number>',
          sys: '<number>',
          timezone: '<number>',
          id: '<number>',
          name: '<string>',
          cod: '<number>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getCurrentWeather;
