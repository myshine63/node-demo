// 编码不同一个字母和一个汉字占用的字节是不一样的
// ASCII编码时一个英文和符号1字节，汉字2个字节
// UTF8编码一个英文字母和符号1字节，汉字3字节，汉字符号3字节
// UNICODE编码一个英文2个字节，一个汉字2个字节，因为标点和中文标点2字节
function bufferSize() {
    let a = Buffer.alloc(10);
    let b = Buffer.from("中国","ascii");
    let c = Buffer.from("中国","utf8");
    let d = Buffer.from("abc");
    let e = Buffer.from("abc","base64");
    console.log(Buffer.byteLength(a)); //10
    console.log(Buffer.byteLength(b)); //2
    console.log(Buffer.byteLength(c)); //6
    console.log(Buffer.byteLength(d)); //3
    console.log(Buffer.byteLength(e)); //2
}
bufferSize();

function concat() {
    let a = Buffer.alloc(5,10);
    let b = Buffer.alloc(5,12);
    let c = Buffer.concat([a,b],10); // 添加size可以加快运行速度。
    console.log(c);
}
concat();

