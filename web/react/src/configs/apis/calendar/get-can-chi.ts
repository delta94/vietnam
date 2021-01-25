import { baseAPI } from '../../urls';

const getCanChi = {
  id: 'getCanChi',
  name: 'Get Can Chi of Lunar Date',
  public: true,
  method: 'POST',
  path: '/calendar/lunar/can-chi',
  url: `${baseAPI}/calendar/lunar/can-chi`,
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
      schema: [{ name: 'canChi', type: 'string', description: '' }],
      example: { canChi: '<string>' }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getCanChi;
