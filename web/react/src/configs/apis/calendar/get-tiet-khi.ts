import { baseAPI } from '../../urls';

const getTietKhi = {
  id: 'getTietKhi',
  name: 'Get Tiet Khi of Lunar Date',
  public: true,
  method: 'POST',
  path: '/calendar/lunar/tiet-khi',
  url: `${baseAPI}/calendar/lunar/tiet-khi`,
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
      schema: [{ name: 'tietKhi', type: 'string', description: '' }],
      example: { tietKhi: '<string>' }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getTietKhi;
