const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();

const Adocao = require('./models/Adocao');

app.use(express.json());

//fazendo requisições
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-type, Authorization");
    app.use(cors());
    next();
});

//rota para listar e visualizar a página raiz
app.get('/', async(req, res) => {
    return res.json({
        erro: false,
        datahome: {text_one: "Este é o espaço virtual do Projeto Salvamento Riopas, pelo qual você poderá conhecer um pouco sobre ele e sobre o trabalho que realizamos com os animais de rua de Rio Pardo de Minas. Por aqui, nosso objetivo é conectar as pessoas que possuem compaixão com esses indefesos, e tentar repassar a importância e o amor que devemos ter com eles. Aqui você irá conhecer alguns dos vários animais que estão disponiveis para adoção, conhecer alguma das nossas tarefas e como você pode estar ajudando, seja com doações, se voluntariando e até mesmo adotando um desses amiguinhos tão dóceis!"}
    });
});

//rota para listar e visualizar a página adoção
app.get('/adocao', async(req, res) => {
    return res.json({
        erro: false,
        dataadocao: {
            text_one: "Por que adotar?",
            text_two: "Adotar um animal é uma grande responsabilidade, e não é só porque você precisará cuidar dele em casa. A adoção é capaz de salvar a vida de um bichinho que poderia estar nas ruas, abandonado, morrendo de fome e possivelmente sofrendo de maus tratos.",
            btn_link:"/sobre",
            btn_title:"Entre em Contato",
        }
    });
});

//rota para listar e visualizar a página sobre
app.get('/sobre', async(req, res) => {
    return res.json({
        erro: false,
        datasobre: {
            text_one: "Sobre o Abrigo",
            text_two: "Olá!!",
            text_three: "Somos a",
            text_four: "S.O.S Animais Abandonados",
            text_five: "uma entidade não governamental, sem fins lucrativos. Cuidamos e promovemos adoção responsável a quem esteja disposto a dar muito amor e carinho!",
            text_six: "Temos a missão de transformar a realidade de animais desamparados em Rio Pardo de Minas – MG. Defendemos que os animais merecem respeito, amor, cuiade e dignidade, repudiamos toda e qualquer forma de violência ou crueldade. Para aumentar nossa abrangência, estamos sempre em busca de pessoas e empresas que queiram fazer a diferença no mundo e que simpatizem com a causa animal. Acreditamos que unindo forças com voluntários e parceiros, construiremos um grande movimento do bem, capaz de transformar esse planeta num lugar melhor e mais justo para que todas as formas de vida possam viver em harmonia.",
            text_seven: "Meios de entrar em contato com a gente:",
            text_eight: "Se desejar tirar alguma dúvida estaremos de prontidão em atendê-lo(a) por meio de um dos canais abaixo!",
            tel_one:"(38)998615038",
            tel_two:"(38)991367884",
            tel_three:"(38)991506021",
            insta:"@salvamentosriopas",
            email: "salvamentosriopas1@gmail.com"
        }
    });
});

app.post('add-adocao', async (req, res) => {

    await Adocao.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados cadastrado com sucesso" 
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados não cadastrados" 
        });
    })
});

//executando na porta 8080
app.listen(8080, () => {
    console.log("Servidor iniciado: http://localhost:8080")
})