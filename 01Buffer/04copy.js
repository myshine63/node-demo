let a = Buffer.from("123456789");
let b = Buffer.alloc(20);
let c = Buffer.alloc()
// 把a中的内容拷贝进b，从a中截取0-5， 然后复制在b中5及以后
a.copy(b,5,0,5); // 把a中的内容拷贝进入b，
console.log(b);
console.log(b.toString());
