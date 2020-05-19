const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('服务器已经启动')
});

// 带参数路由 http://localhost:3000/user/tom/id/45

app.get('/user/:username/id/:id', (req, res) => {
  res.send(req.params);
})