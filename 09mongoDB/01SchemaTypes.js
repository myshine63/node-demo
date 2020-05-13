const mongoose = require('mongoose');
/**
 * 1.schema允许的schemaTypes包括：String,Number,Date,Buffer,Boolean,Mixed,ObjectId,Array等
 * 2.对于一些特定的类型，还可以使用特定的属性，比如对于Number类型还可以使用min，max
 * 3.schema默认还有_id属性，它的类型是ObjectId,我们可以重写它的类型。
 * 4.可以通过add给schema添加属性类型。
 * */
const Schema = mongoose.Schema;
const Product = new Schema({
  name: String,
  price: {type: Number, min: 0, max: 100, required: true},
  date: {type: Date, default: Date.now()},
  code: Schema.Types.Mixed,
  keyWord: [String],
  expired: {type: Boolean, default: false},
  count: {
    type: Number,
    set: () => {
      if (val < 0)
        return 0
      else {
        return val;
      }
    }
  }
})

Product.add({
  test: {
    type: String,
    lowercase: true
  }
})
