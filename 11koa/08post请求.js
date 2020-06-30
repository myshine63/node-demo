const Koa = require('koa');
// 用来解析post请求中的body，并将解析后的结果放在ctx.request的body中
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser())
app.use(ctx => {
  if (ctx.url === '/user' && ctx.method === 'POST') {
    ctx.body = ctx.request.body;
  } else {
    ctx.body = 'hello tom'
  }
})

app.listen(3000)