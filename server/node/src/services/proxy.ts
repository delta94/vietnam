'use strict';

import * as url from 'url';
import * as request from 'request';
import { Request, Response } from 'express';

export default class ProxyService {
  public getProxy(req: Request, res: Response) {
    try {
      const requestPath = this.getRequestedUrl(req);
      console.log('requestUrl', requestPath);
      const headers = this.getHeaders(req);
      console.log('headers', headers);
      const { Host } = headers;
      console.log('Host', Host);
      if (!requestPath || !Host) return res.end('no url found');
      const options = { url: requestPath, method: 'GET', headers };
      request(options)
        .on('error', (error: any) => {
          res.json(error.stack);
        })
        .pipe(res);
    } catch (error: any) {
      const message: string = error.stack;
      res.json({ message });
    }
  }

  private getRequestedUrl(req) {
    const requestUrl = req.url.split('?url=')[1];
    return requestUrl || url.parse(req.url, true).query.url || req.url;
  }

  private getHeaders(req: any) {
    const { headers = {} } = req;
    const requestedHost = url.parse(this.getRequestedUrl(req)).hostname;
    headers['Host'] = requestedHost;
    return headers;
  }
}
