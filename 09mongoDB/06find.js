const mongoose = require('mongoose');
const {UserModel} = require('./02commonModel');
mongoose.connect('mongodb://localhost/userData', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
// 通过回调的方式，获取查询结果
UserModel.find({name: 'tom'}, (err, res) => {
  if (err) throw err;
  console.log(res);
})
// 使用promise获取查询结果
UserModel.find({name: "tom"}).where('age',10).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

