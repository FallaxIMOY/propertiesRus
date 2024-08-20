const http = require('node:http');
//const { url } = require('node:inspector');
const hostname = '127.0.0.1';
const port = 3000;
//var url= require(url)
var properties_db = require("./properties_db");


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server Started!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 