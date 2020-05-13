const mongoose = require('mongoose');
/**
 * 1.已经通过mongoose.model()调用过的schema，不能再添加方法，因此要先定义好方法。
 * 2.定义方法时，不要使用箭头函数，这样获取不到this对象。
 * 3.定义在schema.methods上的方法可以被document实例调用
 * 4.定义在schema.static上的方法可以使用Model.func()调用
 * 5.定义在schema.query上的方法可以在Model.query.func()使用。
 * */
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: Number,
  birth: Date
})

// 在schema的methods上定义的方法，都可以被userModel的实例调用
UserSchema.methods.getUserInfo = function () {
  console.log(`name is ${this.name},age is ${this.age}`)
}

// 在schema上创建的静态方法都可以在model上使用
UserSchema.statics.searchTom = function () {
  console.log('hello tom')
}

// 在schema上定义query
UserSchema.query.getTom = function () {
  this.find({name: 'Tom'}, (err, users) => {
    console.log(users)
  });
}

const UserModel = mongoose.model("user", UserSchema)

// 创建一个实例
let user = new UserModel({
  name: 'tom',
  age: 12,
  sex: 1,
  date: '2021-12-02'
})

user.getUserInfo(); // 调用实例方法
UserModel.searchTom(); // 调用类方法
setTimeout(function () {
  UserModel.find({name: 'tom'}).getTom();
}, 1000)



