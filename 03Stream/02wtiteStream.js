const fs = require('fs');
const writeStream = fs.createWriteStream("./write.txt",);
// 会覆盖掉原来的内容
writeStream.write("hello spike!");
writeStream.end("最后传送的数据", () => {
  console.log('数据传送完毕')
});
writeStream.on("finish", () => {
  console.log("完成")
});