import { baseAPI } from '../../urls';

const getNationalAssemblyMembers = {
  id: 'getNationalAssemblyMembers',
  name: 'Get National Assembly Members',
  public: true,
  method: 'GET',
  path: '/government/national-assembly/members',
  url: `${baseAPI}/government/national-assembly/members`,
  demo: 'government-national-assembly-members',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'no', type: 'number', required: true, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'no', type: 'number', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'date_of_birth', type: 'string', description: '' },
        { name: 'city_of_birth', type: 'string', description: '' },
        { name: 'gender', type: 'string', description: '' },
        { name: 'degree', type: 'string', description: '' },
        { name: 'province', type: 'string', description: '' },
        { name: 'district', type: 'string', description: '' },
        { name: 'percentage', type: 'number', description: '' }
      ],
      example: [
        {
          no: '<number>',
          name: '<string>',
          date_of_birth: '<string>',
          city_of_birth: '<string>',
          gender: '<string>',
          degree: '<string>',
          province: '<string>',
          district: '<string>',
          percentage: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getNationalAssemblyMembers;
