const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const headers = req.headers;
  const httpVersion = req.httpVersion;
  let result = JSON.stringify({url, method, headers, httpVersion});
  // 当请求结束时会触发该事件
  req.on('close', () => {
    console.log('请求已经取消,或者结束')
  })
  // 请求中止时触发改该事件
  req.on('aborted', () => {
    console.log('请求中止！')
  });
  // 接受客户端的数据
  req.on('data', (chunk) => {
    console.log(req.complete)
    console.log(chunk.toString())
  })
  // req流数据消费完毕
  req.on('end', () => {
    console.log('客户端消息发送完毕!')
    // 此属性可用于判断客户端或服务器在连接终止之前是否完全传输消息：
    console.log(req.complete)
    res.writeHead(200, 'ok', {
      'content-type': 'text/plain'
    })
    res.write('hello spike');
    // 结束响应
    res.end(result, () => {
      console.log('响应已经结束')
    })
    // 当数据已经发送完毕时触发，这并不意味着客户端已收到任何信息。
    res.on('finish', () => {
      console.log('数据已经传送完毕')
    })
    // 请求已经结束，底层链接已断开
    res.on('close', () => {
      console.log('底层连接已经关闭')
    })
  })
});

server.on('connection', () => {
  console.log('新的请求已到达！')
})

server.listen(3000, () => {
  console.log('已经启动服务')
})