function compose(middlewares) {
    return function () {
        function dispatch(i) {
            let fn = middlewares[i];
            if (!fn) {
                return Promise.resolve();
            } else {
                return Promise.resolve(
                    fn(function next() {
                        return dispatch(i + 1);
                    }))
            }
        }

        dispatch(0)
    }
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