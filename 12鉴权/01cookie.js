const http = require('http');

http.createServer(((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('');
    return;
  }
  // 设置cookie.
  res.writeHead(200, 'ok', {
    'Set-Cookie': 'name=tom;httpOnly;Max-Age=360000;'
  })
  res.end('hello tom')
})).listen(3000, () => {
  console.log('启动服务')
})
