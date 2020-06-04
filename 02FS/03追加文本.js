const fs = require('fs');
const fsPromise = fs.promises;
// 追加文本
fs.appendFile('./write.txt', Buffer.from(' hello tom'), (err => {
    if (err)
        console.log(err.message);
}))

// 方法有点问题 不知道为什么
fsPromise.appendFile('./writePromise.txt', ' hello spike111111111', {
    encoding: "utf8", // 如果data是字符串，将采用的编码方式，编译成buffer数据
    flag: 'w',
}).then(() => {
    console.log('success')
}).catch(err => {
    console.log(err.message)
})

