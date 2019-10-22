const mysql = require("mysql");

let conexao = null;

module.exports = {
  conectar,
  insertTweet,
  listarTodasPessoas
};

function conectar(options) {
  if (conexao == null) {
    return new Promise((resolve, reject) => {
      console.log("Iniciando conexão em banco de dados");

      conexao = mysql.createConnection({
        host: options.host,
        port: options.porta,
        database: options.banco,
        user: options.usuario,
        password: options.senha
      });

      conexao.connect(erro => {
        if (erro) {
          console.error("Erro ao conectar no banco de dados", erro);
          reject(erro);
        } else {
          console.log("Conectado ao banco de dados");
          resolve();
        }
      });
    });
  } else {
    console.log("Aplicação ja esta conectada ao banco de dados");
    return Promise.resolve(conexao);
  }
}

function insertTweet(tweet) {
  return new Promise((resolve, reject) => {
    conexao.beginTransaction(erro => {
      if (erro) {
        conexao.rollback(() => {
          console.log("Feito rollback em transação!");
          reject(erro);
        });
      } else {
        const registroTweet = {
          nomeEmpresa: tweet.nomeEmpresa,
          evento: tweet.evento,
          dataEvento: tweet.dataEvento,
          horaEvento: tweet.horaEvento,
          descricao: tweet.descricao
        };
        const sql = "INSERT INTO Tweet SET ?";
        conexao.query(sql, registroTweet, (erro, results, fields) => {
          if (erro) {
            conexao.rollback(() => {
              console.log("Feito rollback em transação!");
              reject(erro);
            });
          } else {
            const idTweet = results.insertId;

            if (Array.isArray(tweet.pessoas)) {
              const promisesPessoas = tweet.pessoas.map(pessoa => {
                return inserirPessoas(pessoa, idTweet);
              });

              Promise.all(promisesPessoas)
                .then(resultadoPessoas => {
                  conexao.commit(erro => {
                    if (erro) {
                      console.log("Feito rollback em transação!");
                      conexao.rollback(() => {
                        reject(erro);
                      });
                    } else {
                      console.log("Trasação finalizada com sucesso!");
                      console.log(
                        `Tweet ${tweet.evento} adicionado com ID ${results.insertId}`
                      );
                      resultadoPessoas.forEach((resultadoPessoa, index) => {
                        console.log(
                          `Pessoa ${tweet.pessoas[index].nome} Adicionado com Id ${resultadoPessoa.insertId}`
                        );
                        tweet.pessoas[index].Id = resultadoPessoa.insertId;
                      });
                      tweet.id = idTweet;
                      resolve(tweet);
                    }
                  });
                })
                .catch(erros => {
                  if (!Array.isArray(erros)) {
                    erros = [erros];
                  }

                  erros.forEach(erro => console.error(erro));
                  console.log("Feito rollback em transação!");
                  conexao.rollback(() => {
                    reject(erros);
                  });
                });
            } else {
              conexao.commit(erro => {
                if (erro) {
                  console.log("Feito rollback em transação!");
                  conexao.rollback(() => {
                    reject(erro);
                  });
                } else {
                  console.log("Transação finalizada com sucesso!");
                  console.log(
                    `Tweet ${tweet.evento} adicionado com ID ${results.insertId}`
                  );
                  console.log("Sem pessoas cadastradas!");
                  tweet.Id = idTweet;
                  resolve(tweet);
                }
              });
            }
          }
        });
      }
    });
  });
}

function inserirPessoas(pessoa, idTweet) {
  return new Promise((resolve, reject) => {
    const registroPessoa = {
      nome: pessoa.nome,
      id_tweet: idTweet
    };
    const sql = "INSERT INTO Pessoas_Tweet SET ?";

    conexao.query(sql, registroPessoa, (erro, results, fields) => {
      if (erro) {
        console.log(erro);
        reject(erro);
      } else {
        resolve(results);
      }
    });
  });
}

// getMaiorLista de eventos
function listarTodasPessoas() {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT id, nome, count(nome) as qtd FROM PESSOAS_TWEET group by nome order by qtd limit 3";

    conexao.query(sql, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(
          results.map(registroPessoa => {
            return {
              nome: registroPessoa.nome,
              quantidade: registroPessoa.qtd
            };
          })
        );
      }
    });
  });
}
