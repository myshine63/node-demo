const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();

app.keys = ['hello  tom']
const sessionConfig = {
  maxAge: 10000000,
  httpOnly: true,
  signed: true,
}
app.use(session(sessionConfig, app));

app.use(ctx => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;
  ctx.session.greeting = 'hello tom'
  // 判断session中是否已经有views
  if (ctx.session.views) {
    ctx.session.views += 1
  } else {
    ctx.session.views = 0;
  }
  ctx.body = ctx.session.views;
});

app.listen(3000)