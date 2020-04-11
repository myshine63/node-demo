function test1() {
    let a = Buffer.alloc(20);
    a.write("hello");
    a.write(" word", 5);
    a.fill(97,10);
    console.log(a);
    console.log(a.toString("utf8",0,10));
}

test1();