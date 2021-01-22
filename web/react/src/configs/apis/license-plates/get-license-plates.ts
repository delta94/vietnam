import { baseAPI } from '../../urls';

const getLicensePlates = {
  id: 'getLicensePlates',
  name: 'Get License Plates',
  public: true,
  method: 'GET',
  path: '/license-plates',
  url: `${baseAPI}/license-plates`,
  demo: 'license-plates-list',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'license', type: 'string', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'license', type: 'string', description: '' },
        { name: 'definition', type: 'string', description: '' },
        { name: 'type', type: 'string', description: '' }
      ],
      example: [{ license: '29', definition: 'Hà Nội', type: 'Tỉnh' }]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getLicensePlates;
