function compose(arr) {
  return function (ctx) {
    function dispatch(i) {
      let fn = arr[i];
      if (!fn) {
        return Promose.resolve()
      }
      return fn(function next() {
        return Promise.resolve(i + 1);
      })
    }

    dispatch(0);
  }
}