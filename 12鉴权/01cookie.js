const http = require('http');

http.createServer(((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end('');
    return;
  }
  console.log(req.headers.cookie);
  // 设置cookie,并且设置cookie的过期时间,设置httpOnly后,js脚本将不能读取cookie
  res.setHeader('Set-Cookie', 'name=tom;httpOnly;Mag-Age=3600000');
  res.setHeader('Content-Type', 'text/plain;charset=utf8')
  res.end('hello tom')
})).listen(3000, () => {
  console.log('启动服务')
})
