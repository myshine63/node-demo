const Koa = require('koa');
const router = require('koa-router')();
const jwt = require("jsonwebtoken");
const jwtAuth = require("koa-jwt");
const secret = "it's a secret";
const bodyParser = require('koa-bodyparser');
const fileStatic = require('koa-static');
const app = new Koa();
app.keys = ['some secret'];
app.use(fileStatic(__dirname + '/'));
app.use(bodyParser());
router.post("/users/login-token", async ctx => {
  const {body} = ctx.request;
  //登录逻辑，略
  // 设置session
  const userinfo = body.username;
  ctx.body = {
    message: "登录成功", user: userinfo,
    token: jwt.sign({
        data: userinfo,
        // 设置 token 过期时间，一小时后，秒为单位
        exp: Math.floor(Date.now() / 1000) + 60 * 60
      },
      secret)
  };
});
router.get("/users/getUser-token", jwtAuth({secret}), async ctx => {
  // 验证通过，state.user
  console.log(ctx.state.user); //获取session
  ctx.body = {message: "获取数据成功", userinfo: ctx.state.user.data};
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000)
