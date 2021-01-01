'use strict';

import fetch from 'node-fetch';

type Command = 'setWebhook' | 'sendMessage' | 'getMe';

type Method = 'GET' | 'POST';

interface IMessage {
  chat_id?: string | number;
  text?: string;
  parse_mode?: 'HTML' | 'MarkdownV2' | 'Markdown';
}

export default class TelegramClient {
  private base: string;

  constructor(token: string) {
    this.base = `https://api.telegram.org/bot${token}`;
  }

  async apiRequest(command: Command, method: Method = 'GET', data: any = {}): Promise<any> {
    const { base } = this;
    const url: string = `${base}/${command}`;
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    const init: any = method === 'POST' ? { method, headers, body } : { method, headers };
    return new Promise(resolve => {
      fetch(url, init)
        .then(res => res.json())
        .then(res => {
          const { result = {} } = res;
          resolve(result || {});
        })
        .catch(error => {
          console.error(error);
          resolve({});
        });
    });
  }

  async getMe(): Promise<any> {
    return await this.apiRequest('getMe');
  }

  async sendMessage(chat_id: number, text: string, options: IMessage = {}): Promise<any> {
    const data: IMessage = Object.assign(options, { chat_id, text });
    return await this.apiRequest('sendMessage', 'POST', data);
  }

  async sendMarkdownMessage(chat_id: number, text: string): Promise<any> {
    return await this.sendMessage(chat_id, text, { parse_mode: 'Markdown' });
  }

  async setWebhook(url: string): Promise<any> {
    return await this.apiRequest('setWebhook', 'POST', { url });
  }
}
