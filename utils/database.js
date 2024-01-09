const Sequelize = require('sequelize')
const sequelize = new Sequelize('sys','root','Dob@1380',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize