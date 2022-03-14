//* Importando express
const express = require('express');

//* Importando rotas
const router = require('./routes');

//* Criando instância
const app = express();

//* Habilitando JSON
app.use(express.json());

//* Definindo rotas
app.use(router);

//* Porta da aplicação
app.listen('3333', () => console.log('🔥 Server started at http://localhost:3333'));
