'use strict';

import * as request from 'request';
import * as express from 'express';
import * as url from 'url';

const getRequestedUrl = req => {
  const requestUrl = req.url.split('?url=')[1];
  return requestUrl || url.parse(req.url, true).query.url || req.url;
};

const getHeaders = (req: any) => {
  const { headers = {} } = req;
  const requestedHost = url.parse(getRequestedUrl(req)).hostname;
  headers['Host'] = requestedHost;
  return headers;
};

const app = express();
app.use('/', (req, res) => {
  const requestPath = getRequestedUrl(req);
  console.log('requestUrl', requestPath);
  const headers = getHeaders(req);
  console.log('headers', headers);
  const { Host } = headers;
  console.log('Host', Host);
  if (!requestPath || !Host) return res.end('no url found');
  const options = { url: requestPath, method: 'GET', headers };
  request(options)
    .on('error', (error: any) => res.end(error))
    .pipe(res);
});

const { PORT = 8080 } = process.env;
const server = app.listen(PORT, () => {
  console.log(`Service is listening on port ${PORT}`);
});

const shutdownHandler = () => {
  console.log('Received kill signal, shutting down');
  server.close(() => {
    console.log('Closed remaining connections');
    process.exit();
  });
};

// Listen shut down for TERM signal
process.on('SIGTERM', shutdownHandler);

// Listen shut down for INT signal Ctrl-C
process.on('SIGINT', shutdownHandler);
