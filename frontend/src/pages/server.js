const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const proxy = httpProxy.createProxyServer();

const API_SERVER = 'https://sandbox.pp.paybilt.com'; // Use the sandbox URL

app.use(express.json());

app.all('/api/v2/payment/eTransfer', (req, res) => {
    proxy.web(req, res, { target: 'https://sandbox.pp.paybilt.com' });
  });
  

app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});
