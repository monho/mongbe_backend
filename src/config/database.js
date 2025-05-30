const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.dev.DB_NAME, process.env.dev.DB_USER, process.env.dev.DB_PASS,{
    host : process.env.dev.DB_HOST,
    dialect: 'mariadb'
});

module.exports = sequelize;