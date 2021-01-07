const { NODE_ENV = '' } = process.env;
const devAPI = 'http://localhost:8080/api';
const prodAPI = 'https://vietnamd.herokuapp.com/api';
export const baseAPI = NODE_ENV === 'development' ? devAPI : prodAPI;

const devGraphQL = 'http://localhost:8080/graphql';
const prodGraphQL = 'https://vietnamd.herokuapp.com/graphql';
export const baseGraphQL = NODE_ENV === 'development' ? devGraphQL : prodGraphQL;

export const periods = [
  { label: '1 Week', value: '1W' },
  { label: '2 Weeks', value: '2W' },
  { label: '3 Weeks', value: '3W' },
  { label: '1 Month', value: '1M' },
  { label: '2 Months', value: '2M' },
  { label: '3 Months', value: '3M' },
  { label: '6 Months', value: '6M' },
  { label: '1 Year', value: '1Y' },
  { label: '2 Years', value: '2Y' },
  { label: '3 Years', value: '3Y' },
  { label: '4 Years', value: '4Y' },
  { label: '5 Years', value: '5Y' }
];

export const months = [
  { name: 'january', short: 'jan' },
  { name: 'february', short: 'feb' },
  { name: 'march', short: 'mar' },
  { name: 'april', short: 'apr' },
  { name: 'may', short: 'may' },
  { name: 'june', short: 'jun' },
  { name: 'july', short: 'jul' },
  { name: 'august', short: 'aug' },
  { name: 'september', short: 'sep' },
  { name: 'october', short: 'oct' },
  { name: 'november', short: 'nov' },
  { name: 'december', short: 'dec' }
];
