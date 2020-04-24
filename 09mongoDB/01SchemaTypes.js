const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// schema允许的schemaTypes包括：String,Number,Date,Buffer,Boolean,Mixed,ObjectId,Array

// 常见使用schema的方法
const Product = new Schema({
  name: String,
  price: {type: Number, min: 0, max: 100, required: true},
  date: {type: Date, default: Date.now()},
  code: Number,
  keyWord: [String],
  expired: {type: Boolean, default: false},
  count: {type: Number, min: 0}
})

// 可以通过add方法继续添加属性
Product.add({
  test: String
})
