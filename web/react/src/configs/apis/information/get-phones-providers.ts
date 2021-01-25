import { baseAPI } from '../../urls';
import { IEndpoint } from '../../interfaces';

const getPhonesProviders: IEndpoint = {
  id: 'getPhonesProviders',
  name: 'Get Phones Providers',
  public: true,
  method: 'GET',
  path: '/information/phones/providers',
  url: `${baseAPI}/information/phones/providers`,
  demo: 'information-phones-providers',
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

export default getPhonesProviders;
