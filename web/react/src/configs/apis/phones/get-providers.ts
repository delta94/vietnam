import { baseAPI } from '../../urls';
import { IEndpoint } from '../../interfaces';

const getProviders: IEndpoint = {
  id: 'getProviders',
  name: 'Get Providers',
  public: true,
  method: 'GET',
  path: '/information/phones/providers',
  url: `${baseAPI}/information/phones/providers`,
  demo: 'phones-providers',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'provider', type: 'string', description: '' },
        { name: 'prefixes', type: 'Array<string>', description: '' }
      ],
      example: [
        {
          provider: '<string>',
          prefixes: '<Array<string>>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getProviders;
