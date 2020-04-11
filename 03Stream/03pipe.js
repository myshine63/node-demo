const fs = require('fs');
let rs = fs.createReadStream("./read.txt",{
  highWaterMark:1024,
  encoding:"utf8",
});
let ws = fs.createWriteStream('./pipe.txt');
ws.on('pipe',()=>{
  console.log("管道流")
});
rs.pipe(ws);