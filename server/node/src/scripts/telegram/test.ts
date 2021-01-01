'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: './src/environments/dev.env' });

import { telegramClient } from '../../clients';

const TELEGRAM_CHAT_ID: number = parseInt(process.env.TELEGRAM_CHAT_ID, 10);

const main = async () => {
  const me = await telegramClient.getMe();
  console.log(me);

  const text = 'test';
  const result = await telegramClient.sendMessage(TELEGRAM_CHAT_ID, text);
  console.log(result);
};

main().catch(error => console.error(error));
