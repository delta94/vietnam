'use strict';

import { ApolloServer } from 'apollo-server-express';

import { mongooseClient, postgreClient } from '../clients';
import schema from '../models/graphql';

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const URL_BASE: string = process.env.URL_BASE || '';

export default async app => {
  await mongooseClient.connect();
  await postgreClient.connect();

  const server = new ApolloServer({
    schema,
    playground: NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    context: async ({ req, res }) => {
      return true;
      // if (env === 'development') return true;
      // const token: string = req.body.token || req.query.token || req.headers['x-access-token'];
      // const decoded = await jwt.verifyToken(token, JwtKeyType.ACCESS);
      // if (utils.isObjectEmpty(decoded))
      //   return res.status(403).send({ message: 'Unauthorized Access' });
      // return decoded;
    }
  });

  // const origin = NODE_ENV === 'development' ? 'http://localhost:8888' : URL_BASE;
  server.applyMiddleware({
    app,
    path: '/graphql',
    // cors: { origin, credentials: true },
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise(async (resolve, reject) => {
        const readyState: number = await mongooseClient.getReadyState();
        if (readyState > 0) {
          resolve(readyState);
        } else {
          reject(readyState);
        }
      })
  });
};
