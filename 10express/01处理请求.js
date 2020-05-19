const express = require('express');
const app = express();

// 使用中间件拦截请求
app.use(express.json());
// extended:false 用queryString解析
// extended:true 用qs解析字符串参数
app.use(express.urlencoded({extended: false}));

app.listen(3000, () => {
  console.log('服务器已经启动')
});

// 处理get请求
app.get('/', (req, res) => {
  res.send('hello word')
})

// 处理post请求
app.post('/add', (req, res) => {
  res.send(req.body);
})

// 路由跳转
app.get('/redirect', (req, res) => {
  res.redirect('http://localhost:3000')
})
// 带参数路由 http://localhost:3000/user/tom/id/45
app.get('/user/:username/id/:id', (req, res) => {
  res.send(req.params);
})



