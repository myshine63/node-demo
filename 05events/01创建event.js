const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

let myEmitter = new MyEmitter();
// 注册事件
myEmitter.on('hi', () => {
  console.log('hello tom')
})

// 注册只触发一次的事件
myEmitter.once('hello',()=>{
  console.log('hello spike')
})
// 事件多次触发
myEmitter.emit('hi');
myEmitter.emit('hi');
// 只触发一次
myEmitter.emit('hello')
myEmitter.emit('hello')

