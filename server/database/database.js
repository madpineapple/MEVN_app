const Sequelize = require('sequelize');
const db ={};
const sequelize = new Sequelize('LIBRARY', 'root', '',{
    host: 'localhost',
    user : 'root',
    password : 'password',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
});


db.sequelize= sequelize;
db.Sequelize =Sequelize;

module.exports= db;


//create connection