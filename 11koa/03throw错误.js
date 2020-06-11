const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  // 请求中的错误，响应给客户端,错误信息koa已经定义有了，但是可以自己重置
  ctx.throw(400, "name is required")
})

app.listen(3000);