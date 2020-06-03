const fs = require("fs");
const {promises: fsPromise} = require('fs');

// flag可以修改当前函数对文件的操作方式

function readFile() {
    //异步地读取文件的全部内容,函数会缓冲整个文件
    fs.readFile("./test.txt", {
        encoding: null, // 默认为null。当编码是null时，读取的是buff数据类型.当是utf8或者base64时，读取的是字符串。
        flag: "r" // 操作类型，r表示读取
    }, ((err, data) => {
        if (err) throw err;
        console.log(Buffer.isBuffer(data));
        console.log(data.toString("utf8"));
        console.log(data.toString("base64"));
    }))
}

// readFile();

// 以promise方式读取文件
function readFilePromise() {
    fsPromise.readFile('./test.js', {
        flag: 'r',
        encoding: 'utf8',
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err.message);
    })
}

// readFilePromise();

// 写入文本，会覆盖以前所有内容
function writeFile() {
    fs.writeFile("./test.txt", "hello jerry", {
        encoding: "base64",// 默认值，如果data是buffer将会被忽略。它的作用是将字符串编码成buffer
        flag: "w", // w表示写入，这是默认选项。可以修改成其他的 比如a，则该方法表示追加文本，而不会产生覆盖
        mode: 0o666 // 表示文件权限
    }, err => {
        if (err) throw err
    })
}

// writeFile();

// 追加文本，默认在文本最后面
function appendFile() {
    let buffer = Buffer.from(" hello spike!");
    fs.appendFile("./test.txt", buffer, {
        encoding: "utf8",// 默认值
        flag: "a", // a表示追加
        mode: 0o666 // 表示文件权限
    }, err => {
        if (err) throw err
    })
}

// appendFile();
// 封装readFile方法。
function readFileByPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        })
    })
}

readFileByPromise('./hello.txt').then(data => {
    console.log(data.toString());
});