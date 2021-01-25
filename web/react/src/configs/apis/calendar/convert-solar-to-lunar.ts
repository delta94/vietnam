import { baseAPI } from '../../urls';

const convertSolarToLunar = {
  id: 'convertSolarToLunar',
  name: 'Convert Solar Date to Lunar Date',
  public: true,
  method: 'POST',
  path: '/calendar/solar2lunar',
  url: `${baseAPI}/calendar/solar2lunar`,
  demo: 'calendar-converter',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: [
      { name: 'year', required: true, type: 'number', description: '' },
      { name: 'month', required: true, type: 'number', description: '' },
      { name: 'date', required: true, type: 'number', description: '' }
    ]
  },
  response: {
    200: {
      schema: [
        { name: 'year', type: 'number', description: '' },
        { name: 'month', type: 'number', description: '' },
        { name: 'date', type: 'number', description: '' }
      ],
      example: { year: '<number>', month: '<number>', date: '<number>' }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default convertSolarToLunar;
