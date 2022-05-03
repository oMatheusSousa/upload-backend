# SITE PARA O ABRIGO DE ANIMAIS SALVAMENTOS RIO PAS

TRABALHO FINAL DESENVOLVIDO PARA DISCIPLINA DE DESENVOLVIMENTO WEB

**Alunos:** Jairo Pedro, Luana Teixeira e Matheus Souza

**DOCUMENTAÇÃO:**

### Para começar é necessário ter o Node.js instalado em sua máquina.
**https://nodejs.org/en/**

Também será necessário o NPM (ou Yearn).

```npm install```

**COMO CRIAR O PROJETO DE FORMA MANUAL**

Primeiramente crie o arquivo package.json com o seguinte comando:

```npm init```

Instalar as dependências necessárias para o projeto: 

Criar o arquivo package

### npm init

Gerencia as requisiçoes , rotas e URLs, entre outras funcionalidades

### npm install express

Instalar a dependencia de forma global, "-g" significa globalmente.
Executar o comando através do prompt de comando, executar somente se nunca 
instalou a dependencia na maquina. Após instal, reiniciar a máquina.

### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver a alteração no código fonte.

### npm install --save-dev nodemon

Permitir que outras aplicações façam requisições para API

### npm install --save cors

Sequelize é uma biblioteca Javascript que facilita o o gerenciamento de um banco de dados SQL

### npm install --save sequelize

Instalar o drive do banco de dados

### npm install --save mysql2

Rodar o projeto

```nodemon app.js``` 


**PROPÓSITO:**

Divulgar o trabalho realizado no abrigo como forma de cativar mais pessoas a fazer doações para minimizar as dificuldades financeiras ou na prestação de serviços voluntários.

**MOTIVAÇÃO:**

O abrigo de animais Salvamentos RIOPAS faz um excelente trabalho em relação ao cuidado e proteção de animais desamparados, salvando animais em situação de rua, feridos ou que foram abandonados, acolhendo-os e oferecendo o cuidado necessário e alimentação. Realizando esse trabalho a mais de 3 anos, a ONG já fez o resgate de inúmeros animais e hoje se encontra com um abrigo praticamente lotado. Portanto, a intenção ao desenvolver o site para o abrigo de animais foi de ajudar o projeto como uma forma de divulgar o trabalho realizado por eles e assim tentar atingir mais pessoas que possam se tornar possíveis doadores ou voluntários.

**COMO O SITE RESOLVE O PROBLEMA:**

O site resolve parcialmente o problema apontado, primeiro com o formulário de voluntários na página **"voluntários"** vai ajudar a ter uma organização maior e atingir mais pessoas que queiram ajudar já que o abrigo sempre precisa de voluntários.

Com a página **"home"** temos a divulgação do trabalho feito no abrigo e a página **“sobre”** apresenta o projeto e como o abrigo está estruturado mostrando um pouco do trabalho deles como forma de cativar os leitores a ajudar doando ou se tornando um voluntário.

Em **"adoção"** são apresentados os animais que estão disponíveis para adoção, ajudando a quem quer adotar ter uma visão sobre os animais do abrigo que podem ser adotados.

Na página de **"doações"** temos as informações sobre as formas de doação, facilitando muito para quem gostou do trabalho e a forma de ajudar é por meio de doações e já minimizando o problema financeiro do abrigo.


No arquivo do back-end foram criada uma rota "app.get" para listar/visualizar conectando as informações do front-end com o back-end deixando o conteúdo das páginas dinâmico.
