import { baseAPI } from '../../urls';

const getStockHighlights = {
  id: 'getStockHighlights',
  name: 'Get Stock Highlights',
  public: false,
  method: 'POST',
  path: '/finance/highlights',
  url: `${baseAPI}/finance/highlights`,
  demo: 'finance-highlights',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: [
      { name: 'from', type: 'number', required: true, description: '' },
      { name: 'to', type: 'number', required: true, description: '' }
    ]
  },
  response: {
    200: {
      schema: [
        { name: 'average', type: 'number', description: '' },
        { name: 'diff', type: 'number', description: '' },
        { name: 'diffToMax', type: 'number', description: '' },
        { name: 'diffToMin', type: 'number', description: '' },
        { name: 'group', type: 'string', description: '' },
        { name: 'industry', type: 'string', description: '' },
        { name: 'latest', type: 'number', description: '' },
        { name: 'latestDate', type: 'string', description: '' },
        { name: 'low', type: 'boolean', description: '' },
        { name: 'max', type: 'number', description: '' },
        { name: 'maxDate', type: 'string', description: '' },
        { name: 'median', type: 'number', description: '' },
        { name: 'min', type: 'number', description: '' },
        { name: 'minDate', type: 'string', description: '' },
        { name: 'name', type: 'string', description: '' },
        { name: 'numberOfDates', type: 'number', description: '' },
        { name: 'start', type: 'number', description: '' },
        { name: 'startDate', type: 'string', description: '' },
        { name: 'subsector', type: 'string', description: '' },
        { name: 'symbol', type: 'string', description: '' }
      ],
      example: [
        {
          average: '<number>',
          diff: '<number>',
          diffToMax: '<number>',
          diffToMin: '<number>',
          group: '<string>',
          industry: '<string>',
          latest: '<number>',
          latestDate: '<string>',
          low: '<boolean>',
          max: '<number>',
          maxDate: '<string>',
          median: '<number>',
          min: '<number>',
          minDate: '<string>',
          name: '<string>',
          numberOfDates: '<number>',
          start: '<number>',
          startDate: '<string>',
          subsector: '<string>',
          symbol: '<string>'
        }
      ]
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getStockHighlights;
