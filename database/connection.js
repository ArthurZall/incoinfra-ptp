const Sequelize = require('sequelize');

const connection = new Sequelize('incoinfra', 'root', 'Arthzall32!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;