const net = require('net');
const clientList = [];
const netServer = net.createServer();
netServer.on('connection', client => {
  clientList.push(client);
  console.log('有新的用户进入聊天室!');
  console.log('当前用户数', clientList.length)
  client.write('hello , 欢迎进入聊天室');
  client.on('data', (data) => {
    console.log('接受到数据:', data.toString());
    clientList.forEach(v => {
      v.write(data);
    })
  })
})
netServer.listen(8080)