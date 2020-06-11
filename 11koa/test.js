const Koa = require('koa');
const http = require('http');
const app = new Koa()

app.use(ctx => {
  ctx.body = 'hello tom'
})

http.createServer(app.callback()).listen(3000)
