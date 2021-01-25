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
import { telegramClient } from './clients';
import middlewares from './middlewares';
import jobs from './jobs';

const setTelegramWebhook = async () => {
  const URL_BASE: string =
    NODE_ENV === 'production' ? process.env.URL_BASE : 'https://2963599d2895.ngrok.io';
  const telegramWebhook: string = `${URL_BASE}/api/telegram`;
  await telegramClient.setWebhook(telegramWebhook);
};

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
      res.json({ status: 'OK' });
      // res.sendFile(path.join(__dirname, 'web', 'index.html'));
    });

    app.route('*').get((req, res) => {
      res.json({ status: 'OK' });
      // res.sendFile(path.join(__dirname, 'web', 'index.html'));
      // res.redirect('https://' + req.headers.host + req.url);
    });

    await jobs(); // Cronjobs
  }

  app.set('port', PORT);
  const server: http.Server = http.createServer(app);
  server.timeout = 1000 * 60 * 6; // 6 minutes
  server
    .listen(PORT, async () => {
      const addr: string | AddressInfo = server.address();
      const bind: string = typeof addr === 'string' ? `PIPE ${addr}` : `PORT ${addr.port}`;
      console.log(`LISTENING ON ${bind}`);
      await setTelegramWebhook();
    })
    .on('error', serverOnError);
};

// Start App
startServer();

// Handle Uncaught Exception
process.on('uncaughtException', error => {
  const utc: string = new Date().toUTCString();
  console.error(`${utc} Uncaught Exception`);
  console.error(error);
  process.exit(1);
});

// Handle Unhandled Rejection Promise
process.on('unhandledRejection', error => {
  const utc: string = new Date().toUTCString();
  console.error(`${utc} Unhandled Rejection`);
  console.error(error);
  process.exit(1);
});
