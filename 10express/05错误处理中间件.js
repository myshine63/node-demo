const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, () => {
  console.log('服务器已经启动')
});

app.get('/', (req, res, next) => {
  fs.readFile('./01处理请求.js', 'utf8', ((err, data) => {
    if (err) {
      next(err); // 把错误对象传递给下一个中间件
    } else {
      res.send(data);
    }
  }))
})

app.use((err, req, res) => {
  if (err) {
    res.status(500).send(err.message);
  }
})
