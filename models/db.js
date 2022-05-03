const { Sequelize } = require('sequelize');

//fazendo conexão com o BD
const sequelize = new Sequelize('riopas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

//verificação para saber se a conexão foi feita
sequelize.authenticate()
.then(() => {
    console.log("Conexão realizada com o banco de dados")
}).catch(() => {
    console.log("Erro: Conexão não realizada com o banco de dados")
});

module.exports = sequelize;