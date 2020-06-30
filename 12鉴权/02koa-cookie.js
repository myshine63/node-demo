const Koa = require('koa');

const app = new Koa();
app.keys = ['hello', 'tom'];
app.use(ctx => {
  if (ctx.url === '/favicon.ico') return
  if (!ctx.headers.cookie) {
    // 签名的作用是判断cookie是否被修改。他会根据当前的cookie生成hash码，放在cookie中，因此下面代码会生成2个cookie值
    ctx.cookies.set('name1', 'tom', {signed: true, maxAge: 123000})
    ctx.cookies.set('name2', 'jerry');
    ctx.body = 'hello tom,hello jerry'
  } else {

    ctx.body =ctx.cookies.get('name1');
  }
})
app.listen(3000)