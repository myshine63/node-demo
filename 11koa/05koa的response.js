const Koa = require('koa');

const app = new Koa();
app.use(ctx => {
  // 设置响应状态码
  ctx.status = 200
  // 设置状态码对应的消息
  ctx.message = 'ok'
  /**
   * body的值可以是下面的类型
   * string written
   * Buffer written
   * Stream piped
   * Object || Array json-stringified
   * null no content response
   * */
  ctx.body = {
    name: 'tom',
    age: 15
  };
  // response的  Content-Type
  ctx.set('Cache-Control', 'no-cache');
  console.log(ctx.type)
  // 获取发送的消息大小,需要在调用body之后
  console.log(ctx.length)
  // 设置请求投中最后修改的时间
  ctx.lastModified = new Date();
  // 设置文件修改标志
  ctx.etag = '12345'
})
app.listen(3000)