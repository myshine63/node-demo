const dgram = require('dgram');
const buf1 = Buffer.from('一些 ');
const buf2 = Buffer.from('字节');
const client = dgram.createSocket('udp4');

client.send([buf1, buf2], 41234, (err) => {
  console.log('已经向服务器发送消息')
});

client.on('message', msg => {
  console.log('接受来自服务器的消息', msg.toString())
})