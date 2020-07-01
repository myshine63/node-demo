const Koa = require('koa');
const router = require('koa-router')();
const jwt = require("jsonwebtoken");
const jwtAuth = require('koa-jwt');
const secret = "12345";
const bodyParser = require('koa-bodyparser');
const fileStatic = require('koa-static');
const app = new Koa();
app.use(fileStatic(__dirname + '/'));
app.use(bodyParser());

router.post("/users/login-token", async ctx => {
  // 获取post的数据
  const {body} = ctx.request;
  const userinfo = body.username;
  ctx.body = {
    message: "登录成功",
    user: userinfo,
    token: jwt.sign({data: userinfo,}, secret,{expiresIn: '300s'})
  };
});

router.get(
  "/users/getUser-token",
  jwtAuth({
    secret
  }),
  async ctx => {
    // 验证通过，state.user
    console.log(ctx.state.user); //获取session
    ctx.body = {message: "获取数据成功", userinfo: ctx.state.user.data};
  });
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000)
