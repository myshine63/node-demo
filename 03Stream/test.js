const fs = require('fs');
let readStream = fs.createReadStream('./read.txt',{
  encoding:'utf8',
})
let writeStream = fs.createWriteStream('./write.txt',{
  encoding:'utf8'
})
writeStream.on('finish',()=>{
  console.log('finish')
})
readStream.pipe(writeStream)