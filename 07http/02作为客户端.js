const http = require('http');

const client = http.request({
  hostname: 'localhost',
  port: '3000',
  method: 'post',// 因为要额外提交数据请求方法需要为post
}, res => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
})
// 客户端发送数据
client.write('hello tom', 'utf8');
// 结束请求，该方法必须要有
client.end();