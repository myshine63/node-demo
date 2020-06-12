// 中间件中next执行原理

function compose(middlewares) {
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

async function f1(next) {
  console.log(1);
  let a = await next();
  console.log(2);
  console.log('a:', a)
}

function f2(next) {
  console.log(3);
  next();
  console.log(4);
  return 6
}

function f3() {
  console.log(5);
}

let fn = compose([f1, f2, f3]);
fn();