const path = require('path');

/**
 * 1. url末尾的"/" 会被忽略掉。
 * 2. 可以把url中的不是扩展名的"."看成当前文件夹名字
 * */
console.log(path.parse('.')); // { root: '', dir: '', base: '.', ext: '', name: '.' },可以把"."看成文件夹名字
console.log(path.parse('./')); // { root: '', dir: '', base: '.', ext: '', name: '.' }
console.log(path.parse('/')); // { root: '/', dir: '/', base: '', ext: '', name: '' }
console.log(path.parse('1.txt')); // { root: '', dir: '', base: '1.txt', ext: '.txt', name: '1' }
console.log(path.parse('/1.txt')); //{ root: '/', dir: '/', base: '1.txt', ext: '.txt', name: '1' }
console.log(path.parse('./1.txt')); //{ root: '', dir: '.', base: '1.txt', ext: '.txt', name: '1' }
console.log(path.parse('text/1.txt')); //{ root: '', dir: 'text', base: '1.txt', ext: '.txt', name: '1' }