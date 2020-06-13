const express = require('express');
const crypto = require('crypto');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.post('/api/login/', (req, res, next) => {
  const username = req.body.username;
  let cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(crypto.randomBytes(32)),
    crypto.randomBytes(16)
  );
  let token = cipher.update(username);
  token = Buffer.concat([token, cipher.final()]);
  token = token.toString('hex');

  res.status(201).json({
    username,
    token,
  });
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server Running on port ${port}`));
