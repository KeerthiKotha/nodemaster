const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page, Om Nama Shivaya');
    return;
  }
  // req is object - incoming request
  // res is obj - sending response
  if (req.url === '/about') {
    res.end('Here is some history');
    return;
  }
  // res.write('Welcome to our home page, Om Nama Shivaya');
  res.end(`<h1>oops! </h1>
  <p>Page not found</p>
  <a href='/'>back to home </a>
  `);
});

server.listen(5000);
