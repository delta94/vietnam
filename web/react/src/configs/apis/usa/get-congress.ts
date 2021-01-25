import { baseAPI } from '../../urls';

const getCongressMembers = {
  id: 'getCongressMembers',
  name: 'Get Congress Members',
  public: false,
  method: 'GET',
  path: '/usa/congress',
  url: `${baseAPI}/usa/congress`,
  demo: 'usa-congress',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [
      { name: 'chamber', type: 'string', required: false, description: '' },
      { name: 'congress', type: 'number', required: false, description: '' }
    ],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'id', type: 'string', description: '' },
        { name: 'title', type: 'string', description: '' },
        { name: 'first_name', type: 'string', description: '' },
        { name: 'last_name', type: 'string', description: '' },
        { name: 'middle_name', type: 'string', description: '' },
        { name: 'state', type: 'string', description: '' },
        { name: 'district', type: 'string', description: '' },
        { name: 'seniority', type: 'string', description: '' },
        { name: 'gender', type: 'string', description: '' },
        { name: 'party', type: 'string', description: '' }
      ],
      example: [
        {
          id: '<string>',
          title: '<string>',
          first_name: '<string>',
          last_name: '<string>',
          middle_name: '<string>',
          state: '<string>',
          district: '<string>',
          seniority: '<string>',
          gender: '<string>',
          party: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getCongressMembers;
