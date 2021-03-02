const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  let start = Date.now();
  next()
  let usedTime = Date.now() - start;
  ctx.set('x-response-time', usedTime + 'ms')
})
app.use(async(ctx, next => {
  ctx.cookie.set(name, '1234')
  next()
}))
app.use(async ctx => {
  ctx.body = 'hello tom'
})
app.listen(3001, () => {
  console.log('启动项目')
})