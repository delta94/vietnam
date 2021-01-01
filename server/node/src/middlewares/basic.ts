'use strict';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';

const NODE_ENV: string = process.env.NODE_ENV || 'development';

export default async (app: express.Application) => {
  app.use(morgan('combined')); // Logging should be first

  app.use(helmet());

  // const devOrigin = 'http://localhost:8888';
  // const prodOrigin = 'https://vietnamd.herokuapp.com';
  // const origin = NODE_ENV === 'development' ? devOrigin : prodOrigin;
  // console.log(origin);
  // const methods = ['GET', 'OPTIONS', 'POST'].join(',');

  app.use(cors());
  // app.use(cors({ origin, credentials: true, methods }));

  const windowMs: number = 60 * 1000; // 1 minute
  const max: number = 100; // limit each IP to 100 requests per windowMs
  const limiter = rateLimit({ windowMs, max }); // Rate Limit
  app.use(limiter);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json()); // For POST

  app.use(methodOverride()); // For PUT and DELETE

  app.use(compression()); // Compression

  app.use((req: Request, res: Response, next: NextFunction) => {
    // Add HSTS
    const oneYear: number = 60 * 60 * 24 * 365;
    res.set('Strict-Transport-Security', 'max-age=' + oneYear + ';includeSubdomains');
    next();
  });
};
