const mongoose = require('mongoose');
const {UserModel} = require('./02commonModel.js');
/**
 * 1.连接数据库，如果userData不存在，则相当于新建一个userData数据库
 * */
//
mongoose.connect('mongodb://localhost/userData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('连接成功！')
}).catch(() => {
  console.log('连接失败！')
})

// 方法一：创建一个文档对象
const doc = new UserModel({
  name: 'tom',
  age: 14,
  sex: 0,
  birth: '2012-12-12'
});

doc.save();// 保存数据

// 方法二：直接创建文档对象并保存数据
UserModel.create({
  name: 'jerry',
  age: 12,
  sex: 1,
  birth: '2010-12-12'
})
