const os = require('os');

console.log(((os.totalmem()-os.freemem())/os.totalmem()*100).toFixed(2))