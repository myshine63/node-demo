const mongoose = require('mongoose');

// 定义一个user集合的属性结构
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  birth: Date
})
// 创建一个虚拟属性，它将根据user的sex生成。但是它不会被保存在数据库中
UserSchema.virtual("male").get(function () {
  return this.sex === 0 ? 'girl' : 'boy'
}).set(function (val) {
  this.sex = val === 'girl' ? 0 : 1
})

const UserModel = mongoose.model("user", UserSchema)

let user1 = new UserModel({
  name: 'spike',
  age: 12,
  sex: 1,
  date: '2021-12-02'
})
// 获取虚拟属性值
console.log(user1.male);
// 修改虚拟属性值，将关联依赖属性
user1.male = "girl";
console.log(user1.sex);
