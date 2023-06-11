const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Dispositivos = connection.define('dispositivos', {
    marca:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroSerial:{
        typ: Sequelize.STRING,
        allowNull: false
    },
    SistemaOperacional: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Configuração: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Setor: {
        type: Sequelize.STRING
    }

})