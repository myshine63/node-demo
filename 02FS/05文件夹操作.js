const fs = require('fs');

// 创建文件夹
function createDir() {
  fs.mkdir("./createDir/a", {
      recursive: true, // 允许递归创建文件夹,默认值是false
    },
    err => {
      if (err) throw err;
      console.log('创建文件夹成功')
    })
}

// createDir();

// 读取文件夹
function readDir() {
  fs.readdir('./createDir', {
    encoding: "utf8", // 返回的files的文件名和文件夹名采用的编码方式，默认是utf8
    withFileTypes: false,// 返回的files的元素类型。
  }, ((err, files) => {
    if (err) throw err;
    console.log(files);// file中包含了所以的文件名和文件夹
  }))
}

// readDir();

// 删除文件夹
function deleteDir() {
  fs.rmdir("./createDir", {
    recursive: false, // 默认直接删除空文件夹，当不会空时，需要为true才能删除文件
  }, err => {
    if (err) throw err;
    console.log("删除文件成功")
  })
}

// deleteDir();