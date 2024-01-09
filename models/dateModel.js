const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Date = sequelize.define('date',{ //TODO: give it a better name 
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        
    },
    
    date:{
        type:Sequelize.DATE,    
        allowNull:false,
        unique:true
    }
})

module.exports = Date