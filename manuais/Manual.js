const Sequelize = require("sequelize");
const connection = require("../database/connection");


const Manual = connection.define('manuais', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Manual.sync({force: true});

module.exports = Manual;