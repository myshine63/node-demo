const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  age: {
    type: Number,
    set: (val) => {
      if (val < 0) {
        return 0
      } else {
        return val;
      }
    },

  }
})
userSchema.methods.getUserInfo = function () {
  console.log(`name is ${this.username},age is ${this.age}`)
}
const User = mongoose.model('user', userSchema);
let one = new User({
  username: 'tom',
  age: -3
})
console.log(one.age);
let two = new User({
  name: 1213,
  age: false
})
one.getUserInfo();