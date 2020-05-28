const fs = require('fs');
fs.watch('./hello.txt', {
  encoding: 'utf8'
}, (event, filename) => {
  console.log(event);
  // console.log(filename)
})