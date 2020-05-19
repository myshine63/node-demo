const express = require('express');
const user = express.Router();

// 创建二级路由
user.get('/', (req, res) => {
  res.send('用户首页')
})
user.post('/add', (req, res) => {
  res.send(req.body);
})

module.exports = user;