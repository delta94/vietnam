import { IPhonesEndpoints } from './interfaces';
import { baseAPI } from './urls';

const phones: IPhonesEndpoints = {
  getPrefixes: {
    id: 'getPrefixes',
    name: 'Get Prefixes',
    public: true,
    method: 'GET',
    path: '/phones/prefixes',
    url: `${baseAPI}/phones/prefixes`,
    demo: 'phones-prefixes',
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
  },
  getProviders: {
    id: 'getProviders',
    name: 'Get Providers',
    public: true,
    method: 'GET',
    path: '/phones/providers',
    url: `${baseAPI}/phones/providers`,
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
  }
};

export default phones;
