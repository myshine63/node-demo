const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('服务器已经启动')
});

// 处理get请求
app.get('/', (req, res) => {
  res.send('hello word')
})

// 路由跳转
app.get('/redirect', (req, res) => {
  res.redirect('http://localhost:3000')
})



