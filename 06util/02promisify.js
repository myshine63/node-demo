// 传入一个遵循常见的错误优先的回调风格的函数（即以 (err, value) => ... 回调作为最后一个参数），
// 并返回一个返回 promise 的版本。const util = require('util');
const fs = require('fs');
const util = require('util');

const stat = util.promisify(fs.stat);
stat('./test.js').then((stats) => {
  console.log(stats);
}).catch((error) => {
  // 处理错误。
});