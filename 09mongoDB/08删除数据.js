const mongoose = require('mongoose');
const {UserModel} = require('./02commonModel');
mongoose.connect('mongodb://localhost/userData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
UserModel.deleteOne({name: 'tom', age: 18}).then(res => {
  console.log(res);
})