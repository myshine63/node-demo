// alloc创建的buff永远是堆外分配内存，默认用0去填充.
// 当用整数去填充时，会将整数转换成2个16进制编码。字符串填充时将采用编码成buffer然后再去填充
function alloc() {
    let a = Buffer.alloc(5); // 默认用0填充
    let b = Buffer.alloc(5, 100); // 转换成16进制
    let c = Buffer.alloc(5, 256); // 先取余256 然后在转换成16进制
    let d = Buffer.alloc(5, "abc");// 默认编码是utf8
    let e = Buffer.alloc(5, "abc", "base64");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f.toString("base64"));
    console.log(Buffer.isBuffer(a));
}

alloc();

// allocUnsafe创建的buff的size小于poolSize/2时会使用默认的buff内存池分配内存。
// 而且分配时没有进行初始化，可能包含旧数据
function allocUnsafe() {
    let a = Buffer.allocUnsafe(10);
    let b = Buffer.allocUnsafe(10);
    b.fill(100);
    console.log(a);
    console.log(b);
}

// allocUnsafe();

function from() {
    let a = Buffer.from([1, 2, 1024]); // 数组的每个元素需要为数字
    let b = Buffer.from(a); // 复制一个buffer
    let c = Buffer.from('abc', 'utf-8');
    console.log(a);
    console.log(b);
    console.log(c);
}

// from();
