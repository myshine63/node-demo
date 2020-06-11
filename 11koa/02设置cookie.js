const Koa = require('koa');
const app = new Koa();
app.keys = ['public', 'private'];
app.use(ctx => {
  // 获取cookie
  console.log(ctx.cookies.get('name'))
  // 设置cookies
  ctx.cookies.set('name', 'tom', {
    maxAge: 300000,// 设置cookie过期时间,优先级比expires高 ms
    // expires: new Date('2020-6-10 20:45:46'),
    signed: true
  })

  ctx.body = 'hello tom!'
})

app.listen(3000)