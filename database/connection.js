const Sequelize = require('sequelize');

const conecction = new Sequelize('incoinfra', 'root', 'Arthzall32!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conecction;