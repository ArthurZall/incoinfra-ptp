const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Dispositivos = connection.define('dispositivos', {
    marca:{
        type: DataTypes.TEXT,
        allowNull: false
    },slug: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    modelo:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    numeroSerial:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    sistemaOperacional: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    configuracao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    setor: {
        type: DataTypes.TEXT,
        allowNull: false
    }

})

// Dispositivos.sync({force: true});
module.exports = Dispositivos;