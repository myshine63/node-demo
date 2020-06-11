const net = require('net');

const client = net.createConnection(8080, '127.0.0.1', () => {
  console.log('连接成功')
})

client.write('hello tom!')
client.write('hello spike!')
client.write('hello jerry!', () => {

})

client.on("data", (chunk) => {
  console.log(chunk)
})
