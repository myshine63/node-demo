const mongoose = require('mongoose');
/**
 * 1.虚拟属性的值，可以添加get方法获取值，通过set方法去设置值，
 * 2.虚拟属性不会保存在数据库中
 * */
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
})
// 根据firstName和lastName生成一个fullName
UserSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName
}).set(function (val) {
  let arr = val.split(" ");
  this.firstName = arr[0];
  this.lastName = arr[1];
})

const UserModel = mongoose.model("user", UserSchema)

let user = new UserModel({
  firstName: 'spike',
  lastName: 'china',
})
// 获取虚拟属性值
console.log(user.fullName);
// 设置虚拟属性值
user.fullName = 'tom china';
console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);