const path = require('path');

// resolve使用方法可以参照: https://www.jianshu.com/p/3a713442b70b
let url = "./demo/tom.txt"
console.log(path.resolve(url)); //将路径转化成绝对路径
console.log(path.resolve("."));// 将路径转化成绝对路径
console.log('/demo')
console.log('1.txt')
