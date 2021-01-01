'use strict';

import * as http from 'http';

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const message = 'Ứng dụng Node.js đang chạy trên Bizfly Cloud';
  res.end(JSON.stringify({ message }));
});

const port = 8080;
app.listen({ port }, () => {
  console.log(`Ứng dụng Node.js đang chạy trên cổng ${port}`);
});
