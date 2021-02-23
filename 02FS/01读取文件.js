const fs = require("fs");
const fsPromise = fs.promises;
const util = require('util');

// 常用的读取文件方法
function readFile() {
  //异步地读取文件的全部内容,函数会缓冲整个文件
  fs.readFile("./hello.txt", {
    encoding: null, // 对读取到的buffer数据，采用什么编码。默认是null
    flag: "r" // 操作类型，r表示读取
  }, ((err, data) => {
    if (err) throw err;
    console.log(data.toString("utf8"));
  }))
}

readFile();

// 以promise方式读取文件
function readFilePromise() {
  fsPromise.readFile('./hello.txt', {
    flag: 'r',
    encoding: 'utf8',
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err.message);
  })
}

readFilePromise()

// 使用自带的promise化方法
let utilReadFile = util.promisify(fs.readFile);

utilReadFile('./hello.txt', {
  encoding: 'utf8'
}).then(data => {
  console.log(data);
})


