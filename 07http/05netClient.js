 const Net = require('net');

// 创建一个net客户端，是一个socket对象，因此可以用来发送和接受数据
let client = new Net.Socket();

// 连接服务器
client.connect(8080, '127.0.0.1', () => {
  console.log('连接成功')
})
// 发送数据给服务器
client.write('hello word', 'utf8')
// 接受服务器数据
client.on('data', (chunk) => {
  console.log(chunk.toString());
});
