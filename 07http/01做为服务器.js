const http = require('http');

function createElement(string) {
  return `<h3>${string}</h3>`;
}

// 创建一个服务器
const server = http.createServer(((req, res) => {
  let data = '';
  // 获取请求传递的数据
  req.on('data', chunk => {
    data += chunk;
  })
  // 在请求结束后操作
  req.on('end', () => {
    // 设置响应头
    res.writeHead(200, 'ok', {
      'content-type': 'text/html',// 表示传送的是文本
    });

    // 发送数据
    res.write(createElement(req.method), 'utf8'); // 获取请求方法
    res.write(createElement(req.httpVersion), 'utf8'); // 获取请求版本
    res.write(createElement(JSON.stringify(req.headers)), 'utf8'); // 获取请求投头
    res.write(createElement(data), 'utf8'); // 获取请求数据
    res.write(createElement(req.url), 'utf8'); // 获取请求数据
    // 结束响应
    res.end();
  })

}))
// 当有新的请求到达时触发
server.on('connection', () => {
  console.log('访问成功')
})
// 启动服务器，监听端口
server.listen(3000, () => {
  console.log('开始监听')
})