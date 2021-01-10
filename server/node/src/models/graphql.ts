'use strict';

import { ObjectTypeComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

import GraphQlService from '../libs/graphql-service';

import {
  FinanceForexRate,
  FinanceStockListedCompany,
  FinanceStockHistoryData,
  FinanceStockIndicator,
  MapsWard
} from './mongodb';

const FinanceForexRateTC: ObjectTypeComposer = composeWithMongoose(FinanceForexRate);
const FinanceStockListedCompanyTC: ObjectTypeComposer = composeWithMongoose(
  FinanceStockListedCompany
);
const FinanceStockHistoryDataTC: ObjectTypeComposer = composeWithMongoose(FinanceStockHistoryData);
const FinanceStockIndicatorTC: ObjectTypeComposer = composeWithMongoose(FinanceStockIndicator);
const MapsWardTC: ObjectTypeComposer = composeWithMongoose(MapsWard);

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
const { Query: MapsWardQuery, Mutation: MapsWardMutation } = new GraphQlService(
  'mapsWard',
  MapsWardTC
);

import { SchemaComposer } from 'graphql-compose';
const schemaComposer: any = new SchemaComposer();

schemaComposer.Query.addFields({
  ...FinanceForexRateQuery,
  ...FinanceStockListedCompanyQuery,
  ...FinanceStockHistoryDataQuery,
  ...FinanceStockIndicatorQuery,
  ...MapsWardQuery
});

schemaComposer.Mutation.addFields({
  ...FinanceForexRateMutation,
  ...FinanceStockListedCompanyMutation,
  ...FinanceStockHistoryDataMutation,
  ...FinanceStockIndicatorMutation,
  ...MapsWardMutation
});

export default schemaComposer.buildSchema();
