const mysql = require('mysql');

let conexao = null;

module.exports = {
  conectar
}

function conectar(options) {
  if (conexao == null) {
    return new Promise((resolve, reject) => {

      console.log('Iniciando conexão em banco de dados');

      conexao = mysql.createConnection({
        host: options.host,
        port: options.porta,
        database: options.banco,
        user: options.usuario,
        password: options.senha
      });

      conexao.connect(erro => {
        if (erro) {
          console.error('Erro ao conectar no banco de dados', erro);
          reject(erro);
        } else {
          console.log('Conectado ao banco de dados');
          resolve();
        }
      });

    });
  } else {
    console.log('Aplicação ja esta conectada ao banco de dados');
    return Promise.resolve(conexao);
  }
}
