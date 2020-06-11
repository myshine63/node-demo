const Koa = require('koa');

const app = new Koa();
app.use(ctx => {
  console.log(ctx.method);
  // 请求的完整地址
  console.log(ctx.href);
  // 路径加查询条件
  console.log(ctx.path);
  console.log(ctx.url);
  // query是解析后的查询条件对象,用于get请求
  console.log(ctx.query);
  // 查询字符串，不包含问号，用于get请求
  console.log(ctx.querystring);
  // header和headers是一样的
  console.log(ctx.header)
  console.log(ctx.headers)
  console.log(ctx.hostname)
  console.log(ctx.host)
  console.log(ctx.search)
  ctx.body = 'hello tom'
})

app.listen(3000)