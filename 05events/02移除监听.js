const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

function f1() {
  console.log('hello tom')
}

function f2() {
  console.log('hello spike')
}

myEmitter.on('hi', f1);
myEmitter.on('hi', f2);
myEmitter.emit('hi');

// 移除监听
myEmitter.removeListener('hi', f1);
myEmitter.emit('hi');