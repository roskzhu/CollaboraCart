const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer({});



// Add CORS headers to allow requests from your React app
const cors = require('cors');

app.use(cors());

// Proxy the requests to the Paybilt API
app.all("/api/v2/payment/eTransfer/*", (req, res) => {
  proxy.web(req, res, { target: "https://sandbox.pp.paybilt.com" });
});

const PORT = 5000; // Choose an available port
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
