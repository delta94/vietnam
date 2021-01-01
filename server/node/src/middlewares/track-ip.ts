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
  const message: string = `\`${method}\` \`${path}\` from \`${browser}\``;
  await telegramClient.sendMarkdownMessage(TELEGRAM_CHAT_ID, message);
  next();
};
