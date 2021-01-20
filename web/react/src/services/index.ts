import APIS from './apis';
import GraphQL from './graphql';
import Helper from './helper';
import Storage from './storage';

const apis: APIS = new APIS();
const graphql: GraphQL = new GraphQL();
const helper: Helper = new Helper();
const storage: Storage = new Storage();

export { apis, graphql, helper, storage };
