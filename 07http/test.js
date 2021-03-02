const Koa = require('koa');
const app = new Koa();
app.keys = ['tom is a boy', 'spike is very strong'];

app.use(async ctx => {
  if (ctx.url === '/') {
    ctx.cookies.set('name', 'jerry', {signed: true})
    ctx.body = 'hello tom';
  } else {
    let name = ctx.cookies.get('name', {signed: true})
    ctx.body = 'hello ' + name
  }
})

app.listen(3000)