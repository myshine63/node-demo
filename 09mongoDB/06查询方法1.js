const mongoose = require('mongoose');
const {UserModel} = require('./02commonModel');
mongoose.connect('mongodb://localhost/userData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// 查询所有数据
// UserModel.find().then(res => {
//   // console.log(res);
// })
// 带条件查询
// UserModel.find({age: 10}).then(res => {
//   console.log(res);
// })
// 范围查询
// UserModel.find({age: {$gte: 10, $lte: 11}}).then(res => {
//   console.log(res);
// })
// 只显示数据的部分字段
// UserModel.where('age').lte(12).select('age name -_id').then(res=>{
//   console.log(res);
// })
// 分页查询,下面相当于显示第3页的数据
// UserModel.find().skip(4).limit(2).then(res => {
//   console.log(res);
// });