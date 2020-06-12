const Koa = require('koa');
const app = new Koa();

// 用来处理请求时间的中间件
app.use(async (ctx, next) => {
  let start = Date.now(); //到当前时间的毫秒数
  await next(); // next将执行权交给下一个中间件
  let end = Date.now();
  console.log(`"${ctx.url}"的请求耗时为${end - start}ms`);
});

// 用来处理响应请求的中间件
app.use((ctx, next) => {
  ctx.body = 'hello tom';
});

app.listen(3000, () => {
  console.log('已经启动3000端口');
});