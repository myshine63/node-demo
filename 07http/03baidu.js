const https = require('https');
const fs = require('fs');
const client = https.request({
  hostname: 'www.baidu.com',
  protocol: 'https:',
  method: 'get'
}, res => {
  let buffer = Buffer.alloc(0);
  res.on('data', (chunk) => {
    buffer = Buffer.concat([buffer,chunk]);

  })
  res.on("end", ()=>{
    fs.appendFile('./baidu.html', buffer, {
      encoding: 'utf8'
    }, (err => {
      if (err) throw err
    }))
  })
})
client.end();