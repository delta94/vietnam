'use strict';

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const PORT: number = parseInt(process.env.PORT, 10) || 8080;

import * as dotenv from 'dotenv';
if (NODE_ENV !== 'production') dotenv.config({ path: './src/environments/dev.env' });

import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import { AddressInfo } from 'net';

import apis from './apis';
import middlewares from './middlewares';
import jobs from './jobs';

const serverOnError: any = (error: any = {}) => {
  if (error.syscall !== 'listen') throw error;

  const bind: string = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const startServer: Function = async () => {
  const app = express();
  await middlewares(app);
  await apis(app);

  // Default
  if (NODE_ENV === 'production') {
    app.use(express.static('web'));

    app.route('/').get((req, res) => {
      res.sendFile(path.join(__dirname, 'web', 'index.html'));
    });

    app.route('*').get((req, res) => {
      res.sendFile(path.join(__dirname, 'web', 'index.html'));
      // res.redirect('https://' + req.headers.host + req.url);
    });

    await jobs(); // Cronjobs
  }

  app.set('port', PORT);
  const server: http.Server = http.createServer(app);
  server
    .listen(PORT, () => {
      const addr: string | AddressInfo = server.address();
      const bind: string = typeof addr === 'string' ? `PIPE ${addr}` : `PORT ${addr.port}`;
      console.log(`LISTENING ON ${bind}`);
    })
    .on('error', serverOnError);
};

// Start App
startServer();

// Handle Uncaught Exception
process.on('uncaughtException', error => {
  console.error(new Date().toUTCString() + ' Uncaught Exception');
  console.error(error);
  process.exit(1);
});

// Handle Unhandled Rejection Promise
process.on('unhandledRejection', error => {
  console.error(new Date().toUTCString() + 'Unhandled Rejection');
  console.error(error);
  process.exit(1);
});
