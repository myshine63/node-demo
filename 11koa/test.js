const Koa = require('koa');
const app = new Koa();
app.keys=['name']
app.use(async (ctx, next) => {
  let name = ctx.cookies.get('name');
  console.log(name)
  await next();
})
app.use(async ctx => {
  ctx.cookies.set('name', 'tom', {
    maxAge: 1000,
    signed: true
  })
  ctx.body = 'hello tom'
})
app.listen(3000)