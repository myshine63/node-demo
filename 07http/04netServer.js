const Net = require('net');
const clientList = [];

const netServer = Net.createServer((socket) => {
  console.log('用户已经连接！');
  console.log('当前连接用户ip：', socket.address())
  clientList.push(socket);
  // 向客户端发送数据
  socket.write('hello tom')
  // 接受数据
  socket.on('data', (chunk) => {
    clientList.forEach(client => {
      client.write(chunk)
    })
  })
})
netServer.setMaxListeners(30) // 设置最大连接数
// 当服务器关闭或者所有连接断开时触发
netServer.on('close', () => {
  console.log('关闭服务！')
})

// 当连接发送错误时触发
netServer.on('error', (error) => {
  if (error) throw error;
  console.log('服务器发送故障')
})
// 监听的端口，地址，最大连接数量，监听事件
netServer.listen(8080, 'localhost', () => {
  console.log('已经启动8080服务')
  console.log('当前最大连接数为：', netServer.getMaxListeners())
})