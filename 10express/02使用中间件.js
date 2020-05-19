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

// 拦截请求设置登录验证
app.use((req, res, next) => {
  let login = true;
  if (login) {
    next(); // 继续执行后面操作
  } else {
    res.status(403).send('用户尚未登录')
  }
})

// 设置页面维护
// app.use((req, res) => {
//   res.send('网站维护中...')
// })


// 处理get请求
app.get('/', (req, res) => {
  res.send('hello tom')
})

// 匹配不到的路由都由下面处理
app.use((req, res) => {
  res.status(404).send('页面不存在')
})