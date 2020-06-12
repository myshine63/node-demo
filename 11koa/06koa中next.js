const Koa = require('koa');

const app = new Koa();

// 请求时间中间件
app.use((ctx, next) => {
  const start = Date.now();
  next();
  const end = Date.now();
  console.log('本次请求用时:', (end - start));
})

// 处理日志中间件
app.use((ctx, next) => {
  console.log(ctx.method, ctx.url)
  next();
})

// 处理响应
app.use((ctx, next) => {
  ctx.body = 'hello tom'
})

app.listen(3000)