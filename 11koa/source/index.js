const Koa = require('./koa');
const KoaRouter = require('./koa-router');
const router = new KoaRouter()
const app = new Koa();

router.get('/tom', ctx => {
  ctx.body = 'hello tom'
});

router.get('/jerry', ctx => {
  ctx.body = 'hello jerry'
})

app.use(router.routerMiddleware())

app.listen(3000, () => {
  console.log('已经启动服务')
})