const Koa = require('koa');
const app = new Koa();

// 打印 6 1 3 5 4 2
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.use(async ctx => {
  console.log(5);
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log(6);
});