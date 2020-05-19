const express = require('express');
const app = express();
const user = require('./router/user');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/user', user);

app.listen(3000, () => {
  console.log('服务已经启动')
});