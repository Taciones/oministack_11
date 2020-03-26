const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
 Rota / Recurso
*/

/**
 * Metodos HTTP:
 * GET: Buscar/listar info do backend
 * POST: Criar uma inf no back
 * PUT: Alterer uma inf no back
 * DELETE: deletar uma inf no back
 */

 /**
  * Tipos de parametros:
  * Query params: parametros nomeados enviados na rota após o "?" para adicionar mais parametro adicionar o '&'
  * Route params: Oarametros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft
   * NoSQL: MongoDB, CouchDB etc...
   */

   /**
    * Instalando o driver do banco
    * Driver: SELECT * FROM user
    * Query Builder: table('users').select('*').where()
    * KNEX is the query builder driver. >> npx knex init (cria a tree do driver no projeto)
    */


