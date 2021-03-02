const fs = require("fs");

fs.stat('./hello.txt', ((err, stats) => {
  if (err) {
   throw err
  }
  console.log(stats);
  console.log(stats.isFile()); // 判断是不是文件
  console.log(stats.isDirectory()); // 判断是不是文件夹
}));

// fs.rename('./test.txt','./hello.txt',err => {
//     if (err) throw err;
//     console.log("重命名成功")
// });

// fs.unlink('./hello.txt',err => {
//   if (err) throw err;
//   console.log("删除文件成功");
// });