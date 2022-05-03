const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('riopas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão realizada com o banco de dados")
}).catch(() => {
    console.log("Erro: Conexão não realizada com o banco de dados")
});

module.exports = sequelize;