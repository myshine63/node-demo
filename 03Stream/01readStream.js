const fs = require('fs');
let readStream = fs.createReadStream('./read.txt', {
  encoding: "utf8",//
  highWaterMark: 1024, // 每次读取1kb，默认是64kb
});
let count = 1;
// data事件可以用来消费流
readStream.on('data', chunk => {
  console.log(chunk);
  console.log(count++);
});
readStream.on('end', () => {
  console.log("读取文件完成");
});