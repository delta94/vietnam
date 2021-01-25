import { baseAPI } from '../../urls';

const getStockCompanies = {
  id: 'getStockCompanies',
  name: 'Get Listed Companies',
  public: true,
  method: 'GET',
  path: '/finance/companies',
  url: `${baseAPI}/finance/companies`,
  demo: 'finance-companies',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'market', type: 'string', description: '' },
        { name: 'group', type: 'string', description: '' },
        { name: 'symbol', type: 'string', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'industry', type: 'string', description: '' },
        { name: 'supersector', type: 'string', description: '' },
        { name: 'sector', type: 'string', description: '' },
        { name: 'subsector', type: 'string', description: '' },
        { name: 'listingDate', type: 'string', description: '' }
      ],
      example: [
        {
          market: '<string>',
          group: '<string>',
          symbol: '<string>',
          name: '<string>',
          industry: '<string>',
          supersector: '<string>',
          sector: '<string>',
          subsector: '<string>',
          listingDate: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getStockCompanies;
