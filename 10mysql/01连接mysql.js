const {Sequelize} = require('sequelize');
const config = {
  dialect: 'mysql', // 连接那种类型的数据库
  host: 'localhost',
  user: 'root',
  password: 'myshine63.',
  database: 'mysql-demo',
}

let connection = new Sequelize(config);
// connection.query('select * from user', (err, data) => {
//   console.log(data)
// })
