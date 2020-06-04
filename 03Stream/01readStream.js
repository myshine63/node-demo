const fs = require('fs');

let readStream = fs.createReadStream('./read.txt', {
    encoding: "utf8",// 对读取到的数据采用的编码方式
    highWaterMark:504, // 每次最多读取1024b，默认是64kb
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


