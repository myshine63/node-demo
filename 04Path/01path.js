const path = require('path');
let url = "./demo/tom.txt"

// console.log(path.basename(url));//获取url最后面部分，文件名
// console.log(path.dirname(url));// 获取文件所在的文件夹路径。
// console.log(path.extname(url));// 获取扩展名
//
// let urlObj={
//   dir:'./demo',
//   base:'jerry.txt',
// }
// let a = path.format(urlObj);
// console.log(a);// 生成url，需要对生成的结果进行规范
// console.log(path.normalize(a));// 规范url
//
// let res = path.parse(url);// 解析url
// console.log(res);
console.log(__dirname)
console.log(__filename)