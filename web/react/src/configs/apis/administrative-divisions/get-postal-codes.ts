import { baseAPI } from '../../urls';

const getPostalCodes = {
  id: 'getPostalCodes',
  name: 'Get Postal Codes',
  public: true,
  method: 'GET',
  path: '/administrative-divisions/postal-codes',
  url: `${baseAPI}/administrative-divisions/postal-codes`,
  demo: 'administrative-divisions-postal-codes',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'province_id', type: 'string', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'code', type: 'string', description: '' },
        { name: 'province', type: 'string', description: '' },
        { name: 'province_id', type: 'string', description: '' }
      ],
      example: [
        {
          code: '<string>',
          province: '<string>',
          province_id: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getPostalCodes;
