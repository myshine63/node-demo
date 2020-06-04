/**url组部分
 * origin:https://www.baidu.com:8080
 * protocol:https,
 * auth:tom:123
 * username:tom,
 * password:123,
 * host:www.baidu.com:8080, host = hostname + port
 * hostname:www.baidu.com
 * port:8080
 * pathname:/html/img
 * path:/html/img?query=tom, path = pathname + search
 * search:?query=tom
 * query:query=tom
 * hash:hash
 */
const url = require('url');
const queryString = require('querystring');
const urlString = 'https://tom:123@www.baidu.com:8080/html/img?query=tom#hash'
let oldUrlObj = url.parse(urlString); // 旧版本的url对象
// console.log(oldUrlObj);
console.log(JSON.stringify(queryString.parse(oldUrlObj.query)))

/*
 {
  protocol: 'https:',
  slashes: true,
  auth: 'tom:123',
  host: 'www.baidu.com:8080',  host = hostname + port
  port: '8080',
  hostname: 'www.baidu.com',
  hash: '#hash',
  search: '?query=tom',
  query: 'query=tom',
  pathname: '/html/img',
  path: '/html/img?query=tom',  path = pathname + search
  href: 'https://tom:123@www.baidu.com:8080/html/img?query=tom#hash'
 }
  */

let whatwgUrlObj = new URL(urlString);// 创建符合whatwg标准的URl对象
console.log(whatwgUrlObj.searchParams);

/*
 {
  href: 'https://tom:123@www.baidu.com:8080/html/img?query=tom#hash',
  origin: 'https://www.baidu.com:8080',
  protocol: 'https:',
  username: 'tom',
  password: '123',
  host: 'www.baidu.com:8080',  host = hostname + port
  hostname: 'www.baidu.com',
  port: '8080',
  pathname: '/html/img',
  search: '?query=tom',
  searchParams: URLSearchParams { 'query' => 'tom' }, // 改属性的值是一个只读的对象，需要用get去获取属性
  hash: '#hash'
 }
 */
console.log(whatwgUrlObj.searchParams.get('query'));
console.log(whatwgUrlObj.toString()) // 转换成字符串，新版本的才可以