import { baseAPI } from '../../urls';

const getDynasties = {
  id: 'getDynasties',
  name: 'Get Dynasties',
  public: true,
  method: 'GET',
  path: '/history/dynasties',
  url: `${baseAPI}/history/dynasties`,
  demo: 'history-dynasties',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'temple_name', type: 'string', description: '' },
        { name: 'birth_name', type: 'string', description: '' },
        { name: 'birth', type: 'number', description: '' },
        { name: 'death', type: 'number', description: '' },
        { name: 'start_year', type: 'number', description: '' },
        { name: 'end_year', type: 'number', description: '' },
        { name: 'dynasty', type: 'string', description: '' }
      ],
      example: [
        {
          temple_name: '<string>',
          birth_name: '<string>',
          birth: '<number>',
          death: '<number>',
          start_year: '<number>',
          end_year: '<number>',
          dynasty: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getDynasties;
