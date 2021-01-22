import { baseAPI } from '../../urls';
import { IWeatherEndpoints } from '../../interfaces';

const weather: IWeatherEndpoints = {
  getCurrentWeather: {
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
  },
  getAirVisual: {
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
  },
  getAirVisualCities: {
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
  }
};

export default weather;
