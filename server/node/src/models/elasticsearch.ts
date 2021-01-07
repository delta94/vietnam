'use strict';

export const UpdateFinanceForexRateV1Mapping = {
  method: 'PUT',
  path: '/finance-forex-rates-v1',
  body: {
    settings: {},
    mappings: {
      properties: {
        bank: {
          type: 'text',
          index: false
        },
        date: {
          type: 'date',
          index: false
        },
        rates: {
          type: 'nested'
        }
      }
    }
  }
};

export const DeleteFinanceForexRates = {
  method: 'POST',
  path: '/finance-forex-rates-v1/_delete_by_query',
  body: {
    query: {
      match_all: {}
    }
  }
};
