const { Sequelize } = require('sequelize');
const db = require('./db');

const Adocao = db.define('adocoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text_one: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text_two: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    btn_link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    btn_title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

//Criar tabela no BD
//Adocao.sync();

//Adocao.sync({alter: true});

module.exports = Adocao;
