const fs = require('fs');
const ws= fs.createWriteStream("./write.txt",);
ws.write("hello spike!");
ws.end("\r最后传送的数据",()=>{
  console.log('数据传送完毕')
});
ws.on("finish",()=>{
  console.log("完成")
});