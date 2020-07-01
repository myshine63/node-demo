const Koa = require('koa');
const router = require('koa-router')();
const static = require('koa-static');
const app = new Koa();
const axios = require('axios');
const querystring = require('querystring');
app.use(static(__dirname + '/'));
const config = {
  client_id: '9e481e179521bbfe9114',
  client_secret: '2ad20fdde9d7c2cc3ac063f84c5794db95e01072'
};
router.get('/github/login', async (ctx) => {
  // 重定向到第三方的登录界面，并且需要带上clientId.
  var path = `https://github.com/login/oauth/authorize?client_id=${config.client_id}`;
  ctx.redirect(path);
})
// 当第3方收到验证请求后，需要执行一个回调请求，会把当前的code发送回原服务器。下面的方法是回调方法
router.get('/github/callback', async (ctx) => {
  console.log('callback..')
  // 获取第三方发送的code码
  const code = ctx.query.code;
  const params = {client_id: config.client_id, client_secret: config.client_secret, code: code};
  // 根据code码，clientId,clientSecret发起请求，如果验证通过，便可以获取第三方的token，此时登录变成功。
  let res = await axios.post('https://github.com/login/oauth/access_token', params);
  // 获取返回的token
  const access_token = querystring.parse(res.data).access_token
  // 利用token，调用第3方提供的接口
  res = await axios.get('https://api.github.com/user?access_token=' + access_token);
  console.log('userAccess:', res.data);
  ctx.body = ` <h1>Hello ${res.data.login}</h1> <img src="${res.data.avatar_url}" alt=""/> `
})
app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);