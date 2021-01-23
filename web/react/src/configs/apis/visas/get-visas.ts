import { baseAPI } from '../../urls';

const getVisas = {
  id: 'getVisas',
  name: 'Get Visas',
  public: true,
  method: 'GET',
  path: '/visas',
  url: `${baseAPI}/visas`,
  demo: 'visas-list',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'country', type: 'string', description: '' },
        { name: 'requirement', type: 'string', description: '' }
      ],
      example: [
        {
          country: '<string>',
          requirement: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getVisas;
