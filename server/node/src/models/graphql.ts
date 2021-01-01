'use strict';

import { ObjectTypeComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

import GraphQlService from '../libs/graphql-service';

import {
  FinanceForexRate,
  FinanceStockListedCompany,
  FinanceStockHistoryData,
  FinanceStockIndicator
} from './mongodb';

const FinanceForexRateTC: ObjectTypeComposer = composeWithMongoose(FinanceForexRate);
const FinanceStockListedCompanyTC: ObjectTypeComposer = composeWithMongoose(
  FinanceStockListedCompany
);
const FinanceStockHistoryDataTC: ObjectTypeComposer = composeWithMongoose(FinanceStockHistoryData);
const FinanceStockIndicatorTC: ObjectTypeComposer = composeWithMongoose(FinanceStockIndicator);

const { Query: FinanceForexRateQuery, Mutation: FinanceForexRateMutation } = new GraphQlService(
  'financeForexRate',
  FinanceForexRateTC
);

const {
  Query: FinanceStockListedCompanyQuery,
  Mutation: FinanceStockListedCompanyMutation
} = new GraphQlService('financeStockListedCompany', FinanceStockListedCompanyTC);

const {
  Query: FinanceStockHistoryDataQuery,
  Mutation: FinanceStockHistoryDataMutation
} = new GraphQlService('financeStockHistoryData', FinanceStockHistoryDataTC);

const {
  Query: FinanceStockIndicatorQuery,
  Mutation: FinanceStockIndicatorMutation
} = new GraphQlService('financeStockIndicator', FinanceStockIndicatorTC);

import { SchemaComposer } from 'graphql-compose';
const schemaComposer: any = new SchemaComposer();

schemaComposer.Query.addFields({
  ...FinanceForexRateQuery,
  ...FinanceStockListedCompanyQuery,
  ...FinanceStockHistoryDataQuery,
  ...FinanceStockIndicatorQuery
});

schemaComposer.Mutation.addFields({
  ...FinanceForexRateMutation,
  ...FinanceStockListedCompanyMutation,
  ...FinanceStockHistoryDataMutation,
  ...FinanceStockIndicatorMutation
});

export default schemaComposer.buildSchema();
