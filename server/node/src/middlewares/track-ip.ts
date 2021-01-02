'use strict';

import { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';

import { telegramClient } from '../clients';
import { utils } from '../libs';

const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

export default async (req: Request, res: Response, next: NextFunction) => {
  const method: string = _.get(req, 'originalMethod', '');
  const path: string = _.get(req, 'route.path', '');
  const userAgent = _.get(req, 'headers.user-agent', '');
  const browser: string = utils.detectBrowser(userAgent);
  const ip: string | string[] = getIP(req);
  const message: string = `\`${method}\` \`${path}\` from **${ip}** (\`${browser}\`)`;
  await telegramClient.sendMarkdownMessage(TELEGRAM_CHAT_ID, message);
  next();
};

const getIP = (req: Request): string | string[] => {
  if (req.headers) {
    const ip: string | string[] =
      req.header('x-client-ip') ||
      req.header('x-forwarded-for') ||
      req.header('cf-connecting-ip') ||
      req.header('fastly-client-ip') ||
      req.header('true-client-ip') ||
      req.header('x-real-ip') ||
      req.header('x-cluster-client-ip') ||
      req.header('x-forwarded') ||
      req.header('forwarded-for') ||
      req.headers.forwarded;
    return ip;
  }

  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress;
  }

  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress;
  }
};
