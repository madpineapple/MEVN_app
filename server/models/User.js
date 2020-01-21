const Sequelize= require('sequelize');
const db = require('../database/database');

module.exports= db.sequelize.define(
    'User',
    {email:{
        type:DataTypes.STRING,
        unique:true
    },
    password: DataTypes.STRING
 }
)