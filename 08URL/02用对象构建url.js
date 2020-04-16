const url = require('url');

let oldUrl = url.format({
  protocol: 'http:',
  auth: 'tom:123',
  hostname: 'www.baidu.com',
  port: '8080',
  pathname: '/html/img',
  search: '?query=tom',
  hash: '#hash'
})
console.log(oldUrl);