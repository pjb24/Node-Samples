const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
   dialect: 'mysql',
   host: '127.0.0.1'
});

class NumberLang extends Sequelize.Model {}

NumberLang.init({
   number: Sequelize.INTEGER,
   kor: Sequelize.STRING,
   eng: Sequelize.STRING
}, {sequelize});

NumberLang.sync().then( ret => {
   console.log('Sync Success :', ret);
   sequelize.close();
}).catch(error => {
   console.error('Sync Failure :', error);
});
