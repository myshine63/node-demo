const Net = require('net');

const netServer = Net.createServer((socket) => {
  let address = socket.address(); // 获取当前tcp的信息，需要在监听事件触发之后
  console.log('用户已经连接！')
  // 向客户端发送数据
  socket.write('hello tom', 'utf8', (err) => {
    let byte = socket.bytesWritten;
    console.log('已发送数据',byte)
  })
  // 接受数据
  socket.on('data', (chunk) => {
    let byte = socket.bytesRead
    console.log(chunk.toString(),byte)
  })
})

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
netServer.listen(8080, '127.0.0.1', 3, () => {
  console.log('已经启动服务！')
  // 可以获取当前监听的信息
  let address = netServer.address(); // 获取当前tcp的信息，需要在监听事件触发之后
})