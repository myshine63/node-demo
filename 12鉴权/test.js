const http = require('http')

http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'name=tom');
  res.end('hello tom')
}).listen(3000)