import { baseAPI } from '../../urls';

const getNationalAssemblyChairs = {
  id: 'getNationalAssemblyChairs',
  name: 'Get National Assembly Chairs',
  public: true,
  method: 'GET',
  path: '/government/national-assembly/chairs',
  url: `${baseAPI}/government/national-assembly/chairs`,
  demo: 'government-national-assembly-chairs',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
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

export default getNationalAssemblyChairs;
