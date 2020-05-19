const express = require('express');
const app = express();
const user = require('./router/user');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/user', user);
app.use(express.static(path.join(__dirname, 'public')))
app.listen(3000, () => {
  console.log('服务已经启动')
});