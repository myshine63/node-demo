const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

class koa {
  constructor() {
    this.middlewares = [];
  }

  listen(...args) {
    http.createServer(async (req, res) => {
      let fn = this.compose(this.middlewares);
      let ctx = this.createContext(req, res)
      await fn(ctx);
      res.end(ctx.body);
    }).listen(...args)
  }

  use(callback) {
    if (typeof callback === 'function') {
      this.middlewares.push(callback)
    } else {
      throw new Error('中间件必须是函数类型')
    }
  }

  compose(middlewares) {
    return function (ctx) {
      function dispatch(i) {
        let fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(ctx, function next() {
            // promise完成后，再执⾏下⼀个
            return dispatch(i + 1);
          })
        );
      }

      return dispatch(0);
      // 执⾏第0个
    };
  }

  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
}

module.exports = koa;