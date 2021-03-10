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
UserModel.create({
  name:'jerry',
  age:14,
  sex:0
})
UserModel.create({
  name:'tom',
  age:14,
  sex:0
})
UserModel.find().where('name').all(['tom','jerry']).exec(docs=>{
  console.log(docs)
})