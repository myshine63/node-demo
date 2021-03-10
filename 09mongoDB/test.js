const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('连接成功')
}).catch(err => {
  console.log('连接失败')
});

let userSchema = new Schema({
  name: String,
  age: Number,
})

let User = mongoose.model('user', userSchema);

User.create({
  name: 'jerry',
  age: 14
})
User.create({
  name: 'tom',
  age: 22
})
User.create({
  name: 'spike',
  age: 23
})
User.create({
  name: 'jerry',
  age: 26
})
User.find({
  name: 'jerry',
  age: {$gte: 20}
},).select('age').then(res => {
  console.log(res)
  return Promise.resolve(res[0])
}).then(data => {
    User.findByIdAndDelete(data._id, (err,res) => {
      console.log(res)
    })
  }
)
