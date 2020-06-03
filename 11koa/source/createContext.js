const context = require('./context');
const request = require('./request');
const response = require('./response');

function createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
}

let ctx = createContext({method: 'post', url: 'http://www.baidu.com'}, {});
console.log(ctx.method);
console.log(ctx.url);