import { baseAPI } from './urls';

const ethnicMinorities = {
  getEthnicMinorities: {
    id: 'getEthnicMinorities',
    name: 'Get Ethnic Minorities',
    public: true,
    method: 'GET',
    path: '/ethnic-minorities',
    url: `${baseAPI}/ethnic-minorities`,
    demo: 'ethnic-minorities-list',
    request: {
      headers: [{ key: 'Content-Type', value: 'application/json' }],
      query: [{ name: 'type_en', required: false, type: 'string', description: '' }],
      body: []
    },
    response: {
      200: {
        schema: [
          { name: 'name', type: 'string', description: '' },
          { name: 'type', type: 'string', description: '' },
          { name: 'type_en', type: 'string', description: '' }
        ],
        example: [{ name: 'Kinh', type: 'Việt - Mường', type_en: 'Vietic' }]
      },
      400: {
        schema: [{ name: 'message', type: 'string', description: '' }],
        example: { message: '<string>' }
      }
    }
  }
};

export default ethnicMinorities;
