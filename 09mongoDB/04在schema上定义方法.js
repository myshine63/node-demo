const mongoose = require('mongoose');
// const {UserSchema} = require('./02commonModel.js') // 不能使用引入的schema，因为他已经被编译过了

// 定义一个user集合的属性结构
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  birth: Date
})

// 在schema的methods上定义的方法，都可以被userModel的实例调用
UserSchema.methods.say = function () {
  console.log("hello", this.name);
}

// 在schema上创建的静态方法都可以在model上使用
UserSchema.statics.searchTom = function () {
  console.log('hello tom')
}

// 在schema上定义query
UserSchema.query.getTom = function () {
  this.find({name: 'tom'}, (err, users) => {
    console.log(users)
  });
}

const UserModel = mongoose.model("user", UserSchema)

// 创建一个实例
let user = new UserModel({
  name: 'spike',
  age: 12,
  sex: 1,
  date: '2021-12-02'
})

user.say(); // 调用实例方法

UserModel.searchTom(); // 调用类方法



