const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * 1.使用mongoose=.model(name,schema),方法，在连接数据库后会在name后面添加一个‘s’，及集合的名字为 name+"s".
 * 2.调用mongoose.model(name,schema)后,schema也会发生变化。
 * 3.Model相当于一个class，可以用来构造document实例。
 * */
const UserSchema = new Schema({
  name: String,
  age: {
    type: Number,
    set: (val) => {
      if (val < 0) {
        return 0
      } else {
        return val;
      }
    },
  },
  sex: Number,
  birth: Date
})

// 创建一个集合,在数据库中会在user末尾加一个's'
const UserModel = mongoose.model('user', UserSchema);
module.exports = {
  UserSchema, UserModel
}