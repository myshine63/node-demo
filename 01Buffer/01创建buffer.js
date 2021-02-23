// alloc创建的buff永远是堆外分配内存，默认用0去填充.
// alloc接受用字符串进行填充，这时会采用utf8进行编码
// alloc接受用字节数组进行填充，字节数组：0-255的整数数组
function alloc() {
  let a = Buffer.alloc(5); // 默认用0填充
  let b = Buffer.alloc(5, 100); // 转换成16进制
  let c = Buffer.alloc(5, 256); // 先取余256 然后在转换成16进制
  let d = Buffer.alloc(5, "abc");// 默认编码是utf8
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

alloc();

// allocUnsafe创建的buff的size小于poolSize/2时会使用默认的buff内存池分配内存。
// 而且分配时没有进行初始化，可能包含旧数据
function allocUnsafe() {
  console.log(Buffer.poolSize);// buff默认分配的内存池
  let a = Buffer.allocUnsafe(10);
  a.fill(100); // 填充
  console.log(a);

}

// allocUnsafe();

function from() {
  let a = Buffer.from([1, 2, 1024]); // 用字节数组生成一个buffer
  let b = Buffer.from('abc', 'utf-8'); // 用字符串生成一个buffer
  let c = Buffer.from(a);// 用现有的buffer生成一个buffer，这时相当于复制了一个buffer
  console.log(a);
  console.log(b);
  console.log(c);
}

// from();
