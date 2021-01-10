import APIS from './apis';
import GraphQL from './graphql';
import Helper from './helper';

const apis: APIS = new APIS();
const graphql: GraphQL = new GraphQL();
const helper: Helper = new Helper();

export { apis, graphql, helper };
