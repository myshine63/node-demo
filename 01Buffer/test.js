let a = Buffer.alloc(10, 10);
let b = Buffer.allocUnsafe(20);
let c = Buffer.concat([a, b], 30);
console.log(c);