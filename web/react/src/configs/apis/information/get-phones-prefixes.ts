import { baseAPI } from '../../urls';
import { IEndpoint } from '../../interfaces';

const getPhonesPrefixes: IEndpoint = {
  id: 'getPhonesPrefixes',
  name: 'Get Phones Prefixes',
  public: true,
  method: 'GET',
  path: '/information/phones/prefixes',
  url: `${baseAPI}/information/phones/prefixes`,
  demo: 'information-phones-prefixes',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [{ name: 'prefix', type: 'string', required: false, description: '' }],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'id', type: 'string', description: '' },
        { name: 'prefix', type: 'string', description: '' },
        { name: 'provider', type: 'string', description: '' },
        { name: 'provider_id', type: 'string', description: '' }
      ],
      example: [
        {
          id: '<string>',
          prefix: '<string>',
          provider: '<string>',
          provider_id: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getPhonesPrefixes;
