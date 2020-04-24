const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function () {
  var greeting = this.name
  ? "Meow name is " + this.name
  : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({name: 'fluffy'});
fluffy.speak(); // "Meow name is fluffy"