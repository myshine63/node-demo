const http = require('http');

http.createServer(((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('');
    return;
  }
  if (req.url === '/user') {
    res.end('hello jerry')
  }
  // 设置cookie
  res.writeHead(200, 'ok', {
    'Set-Cookie': 'name=tom'
  })
  res.end('hello tom')
})).listen(3000, () => {
  console.log('启动服务')
})