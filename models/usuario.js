const { Sequelize } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Usuario = sequelize.define('usuario',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellido:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuario;