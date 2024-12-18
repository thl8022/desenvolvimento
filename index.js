
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');
const routes = require('./controller/professorController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(routes);


// Conexão BD
connection.sync().then(() => {
    console.log('Conectado ao banco de dados!');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco:', err);
});