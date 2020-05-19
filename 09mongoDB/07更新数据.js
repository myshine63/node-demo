const mongoose = require('mongoose');
const {UserModel} = require('./02commonModel');
mongoose.connect('mongodb://localhost/userData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// 更新符号条件的第一条数据
UserModel.updateOne({name: "tom"}, {age: 18}).then(res => {
  console.log(res)
})

UserModel.updateMany({name: 'jerry'}, {sex: 0}).exec();
