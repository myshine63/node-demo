const fs = require('fs').promises;
fs.readFile('./test.js').then(data=>{
    console.log(data.toString('utf8'))
})
