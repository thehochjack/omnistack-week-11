const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //instanciando a aplicacao 

// antes de todas as requisicoes ir no corpo da requisicao e transformar tudo em json
app.use(cors());
app.use(express.json()); 
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end 
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
 *     /users?name=Jackson&idade=25
 * Route params: Parâmetros utilizados para identificar recursos
 *     /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server 
 * NoSQL: MongoDB, CouchDB, etc
 */

/** 
 * Driver do banco de dados: SELECT * FROM users
 * Query Builder: table('users').select('*').where(...)
 */




app.listen(3333); // aplicacao vai ficar ouvindo a porta 3333


