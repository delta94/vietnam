import { baseAPI } from '../../urls';

const getVLeague = {
  id: 'getVLeague',
  name: 'Get VLeague',
  public: true,
  method: 'GET',
  path: '/sports/vleague',
  url: `${baseAPI}/sports/vleague`,
  demo: 'sports-vleague',
  request: {
    headers: [{ key: 'Content-Type', value: 'application/json' }],
    query: [],
    body: []
  },
  response: {
    200: {
      schema: [
        { name: 'matches', type: 'Array<any>', description: '' },
        { name: 'leagueTable', type: 'Array<any>', description: '' }
      ],
      example: {
        matches: '<Array<any>>',
        leagueTable: '<Array<any>>'
      }
    },
    400: {
      schema: [{ name: 'message', type: 'string', description: '' }],
      example: { message: '<string>' }
    }
  }
};

export default getVLeague;
