const util = require('util');

async function f() {
  return 'hello tom'
}

// 将异步函数，或者promise函数转成错误优先的回调方法
let fn = util.callbackify(f);
fn((err, val) => {
  if (err) throw err
  console.log(val)
})