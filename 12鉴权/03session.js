const http = require("http");
const session = {};
const sid = 'sid';
// 在cookie中保存sessionId,在服务器中保存sessionId的对应的数据，这样可以避免把敏感数据放在cookie中。
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // 获取cookie
  const cookie = req.headers.cookie;
  // 判断cookie是否存在，且是否包含sid
  if (cookie && cookie.indexOf(sid) > -1) {
    // 返回sid对应的session.
    res.end(JSON.stringify(session[sid]));
  } else {
    // 设置cookie
    res.setHeader('Set-Cookie', `sid=${sid}`);
    session[sid] = {name: 'tom'};
    res.end('第一次访问')
  }
}).listen(3000)