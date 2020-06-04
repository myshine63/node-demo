const fs = require('fs');
// 默认复制，当文件存在时，会覆盖文件
fs.copyFile('./hello.txt', './helloCopy.txt', (err => {
    if (err) {
        console.log(err.message);
        return;
    }
}))

// fs.rename('./test.txt','./hello.txt',err => {
//     if (err) throw err;
//     console.log("重命名成功")
// });

// fs.unlink('./hello.txt',err => {
//   if (err) throw err;
//   console.log("删除文件成功");
// });