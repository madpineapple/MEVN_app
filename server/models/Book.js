const Sequelize= require('sequelize');
const db = require('../database/database');

module.exports= db.sequelize.define(
    //connect to specific table
    'BOOKS',
    {
        //get values from table
        book_id:{
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