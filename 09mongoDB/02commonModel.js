const mongoose = require('mongoose');

// 定义一个user集合的属性结构
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  birth: Date
})

// 创建一个集合,在数据库中会在user末尾加一个's'
const UserModel = mongoose.model('user', UserSchema);
module.exports = {
  UserSchema, UserModel
}