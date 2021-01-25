import { baseAPI } from '../../urls';

const getMinisters = {
  id: 'getMinisters',
  name: 'Get Ministers',
  public: true,
  method: 'GET',
  path: '/government/ministers',
  url: `${baseAPI}/government/ministers`,
  demo: 'government-ministers',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: [{ name: 'ministry', type: 'string', required: true, description: '' }]
  },
  response: {
    200: {
      schema: [
        { name: 'title', type: 'string', description: '' },
        { name: 'title_en', type: 'number', description: '' },
        { name: 'title_short', type: 'string', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'gender', type: 'string', description: '' },
        { name: 'gender_en', type: 'string', description: '' },
        { name: 'start_date', type: 'string', description: '' },
        { name: 'end_date', type: 'string', description: '' }
      ],
      example: [
        {
          title: '<string>',
          title_en: '<string>',
          title_short: '<string>',
          name: '<string>',
          gender: '<string>',
          gender_en: '<string>',
          start_date: '<string>',
          end_date: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getMinisters;
