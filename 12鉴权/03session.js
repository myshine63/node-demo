const http = require("http");
const session = {};
// 在cookie中存建，然后在session中保存值，这样可以避免在cookie中放入敏感数据
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  const sessionKey = 'sid';
  // 获取cookie
  const cookie = req.headers.cookie;
  // 判断cookie是否存在，且是否包含sid
  if (cookie && cookie.indexOf(sessionKey) > -1) {
    // 简略写法未必具有通用性
    const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`);
    const sid = pattern.exec(cookie)[1];
    res.end('第2次')
    console.log('session:', sid, session, session[sid])
  } else {
    const sid = (Math.random() * 99999999).toFixed();
    // 设置cookie
    res.setHeader('Set-Cookie', `${sessionKey}=${sid};`);
    session[sid] = {name: 'tom'};
    res.end('第1次')
  }
  res.end('hello cookie!!')
}).listen(3000)