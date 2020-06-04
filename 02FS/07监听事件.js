const fs = require('fs');

// 监听文件夹，当文件夹中的文件发生改变时会触发事件
const watch = fs.watch('./createDir');

watch.on('change', (eventType, filename) => {
    console.log(eventType)
    console.log(filename)
})
// 监听关闭时触发事件
watch.on('close', () => {
    console.log('close....')
})

// setTimeout(() => {
//     watch.close(); // 停止监听
// }, 5000)