// Importa 'express' que foi instalado no projeto com o comando 'npm install express'
const express = require('express');

//  Cria um app express
const app = express();

// Configura app com parser JSON padrão do express
app.use(express.json());

/*
  Define um método para processar uma chamada GET ao endpoint '/clientes'
  E retorna uma string concatenando quaisquer parâmetros de queryString enviados
  Exmplo: '/clientes?pagina=1&tamanho=10'
*/
app.get('/clientes', (request, response) => {
  response.send(`Retornados clientes filtrados por:\n ${JSON.stringify(request.query, null, 2)}`);
});

/*
  Define um método para processar uma chamada POST ao endpoint '/clientes'
  E retorna uma string concatenando o corpo da request
*/
app.post('/clientes', (request, response) => {
  response.status(201).send(`Criado novo cliente com os valores:\n ${JSON.stringify(request.body, null, 2)}`);
});

/*
  Define um método para processar uma chamada GET ao endpoint '/clientes/:id', onde ':id' informa ao express
  que na url, o que vier naquela posição será uma variável da url da request chamada 'id'
  E retorna uma string concatenando o id enviado na url
*/
app.get('/clientes/:id', (request, response) => {
  response.send(`Retornado cliente de id ${request.params.id}...`);
});

/*
  Define um método para processar uma chamada PUT ao endpoint '/clientes/:id', onde ':id' informa ao express
  que na url, o que vier naquela posição será uma variável da url da request chamada 'id'
  E retorna uma string concatenando o id enviado na url e o corpo da request
*/
app.put('/clientes/:id', (request, response) => {
  response.send(`Cliente de id ${request.params.id} atualizado com os valores:\n ${JSON.stringify(request.body, null, 2)}`);
});

/*
  Define um método para processar uma chamada DELETE ao endpoint '/clientes/:id', onde ':id' informa ao express
  que na url, o que vier naquela posição será uma variável da url da request chamada 'id'
  E retorna uma string concatenando o id enviado na url
*/
app.delete('/clientes/:id', (request, response) => {
  response.send(`Cliente de id ${request.params.id} excluido`);
});

/*
  Inicia o app express informando qual porta deve ser ouvida e um callback 
  para ser notificado quando o servidor estiver funcionando
  E retorna a instância do servidor express criado
*/
const server = app.listen(3000, () => {
  console.log('Servidor iniciado');
});
