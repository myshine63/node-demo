class koaRouter {
  constructor() {
    this.routes = [];
  }

  get(url, fn) {
    if (typeof fn === 'function') {
      this.routes.push({url, method: 'get', middleware: fn})
    } else {
      throw new Error('中间件必须是函数')
    }
  }

  post(url, fn) {
    if (typeof fn === 'function') {
      this.routes.push({url, method: 'post', middleware: fn})
    } else {
      throw new Error('中间件必须是函数')
    }
  }

  routerMiddleware() {
    return (ctx, next) => {
      let middleware = null;
      for (let i = 0; i < this.routes.length; i++) {
        let route = this.routes[i];
        if (route.url === ctx.url && route.method === route.method) {
          middleware = this.routes[i].middleware;
          break;
        }
      }
      if (middleware) {
        middleware(ctx, next);
        return;
      }
      next();
    }
  }
}

module.exports = koaRouter;