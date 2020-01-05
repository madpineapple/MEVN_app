const Sequelize= require('sequelize');
const db = require('database.js');

module.exports= db.sequelize.define(
    'BOOKS',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncriment:true
        },
        title: Sequelize.STRING
    },
    {
        timestamps:false
    }
)