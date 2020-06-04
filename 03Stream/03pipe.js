const fs = require('fs');
let readStream = fs.createReadStream("./read.txt", {
    highWaterMark: 1024,
    encoding: "utf8",
});
let writeStream = fs.createWriteStream('./pipe.txt');
writeStream.on('pipe', () => {
    console.log("管道流")
});
readStream.pipe(writeStream);