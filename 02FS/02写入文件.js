const fs = require('fs');
const fsPromise = fs.promises;
// 使用回调写入数据
fs.writeFile('./write.txt', Buffer.from('hello spike'), (err => {
  if (err)
    throw err
}))
// 使用promise写入文件
fsPromise.writeFile('./writePromise.txt', 'hello tom', {
  encoding: "utf8", // 如果data是字符串，将采用的编码方式，编译成buffer数据
  flag: 'w',
}).catch(err => {
  console.log(err.message)
})
