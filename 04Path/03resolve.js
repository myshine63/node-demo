const path = require('path');

// resolve解析的结果与当前js文件运行的位置有关
let url = "./demo/tom.txt"
console.log(path.resolve(url)); //将路径转化成绝对路径
console.log(path.resolve("."));// 将路径转化成绝对路径
console.log('/demo')
console.log('1.txt')
