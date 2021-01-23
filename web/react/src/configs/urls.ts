const { NODE_ENV = '' } = process.env;
const devAPI = 'http://localhost:8080/api';
const prodAPI = 'https://vietzam.herokuapp.com/api';
export const baseAPI = NODE_ENV === 'development' ? devAPI : prodAPI;

const devGraphQL = 'http://localhost:8080/graphql';
const prodGraphQL = 'https://vietzam.herokuapp.com/graphql';
export const baseGraphQL = NODE_ENV === 'development' ? devGraphQL : prodGraphQL;
