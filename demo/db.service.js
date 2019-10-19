const mysql = require('mysql');

let conexao = null;

module.exports = {
  conectar,
  inserirCliente,
  listarTodosClientes,
  consultarClientePorNome,
  consultarClientePorId
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
          console.error('Erro ao conectar no banco de dados');
          reject(erro);
        } else {
          console.log('Conectado ao banco de dados');
          resolve();
        }
      });

    });
  } else {
    console.log('Aplicação ja esta conectada ao banco de dados');
    return Promise.resolve();
  }
}

function inserirCliente(cliente) {
  return new Promise((resolve, reject) => {
    conexao.beginTransaction(erro => {
      if (erro) {

        conexao.rollback(() => {
          console.log('Feito rollback em transação');
          reject(erro);
        });

      } else {

        const resgistroCliente = {
          name: cliente.nome,
          birthday: cliente.dataNascimento
        };

        // const sql = 'INSERT INTO CLIENT SET name=?, birthday = ?';
        // conexao.query(sql, [cliente.nome, cliente.dataNascimento], (erro, results, fields) => {
        const sql = 'INSERT INTO CLIENT SET ?';
        conexao.query(sql, resgistroCliente, (erro, results, fields) => {
          if (erro) {

            conexao.rollback(() => {
              console.log('Feito rollback em transação');
              reject(erro);
            });

          } else {
            const idCliente = results.insertId;

            if (Array.isArray(cliente.telefones)) {
              const promisesTelefones = cliente.telefones.map(telefone => {
                return inserirTelefoneCliente(telefone, idCliente);
              });

              Promise.all(promisesTelefones)
                .then(resultadoTelefones => {
                  conexao.commit(erro => {
                    if (erro) {

                      console.log('Feito rollback em transação');
                      conexao.rollback(() => {
                        reject(erro);
                      });

                    } else {
                      console.log('Transação finalizada com sucesso');
                      console.log(`Cliente ${cliente.nome} adicionado com ID ${results.insertId}`);
                      resultadoTelefones.forEach((resultadoTelefone, index) => {
                        console.log(`Telefone ${cliente.telefones[index].tipo} - (${cliente.telefones[index].codigoArea}) ${cliente.telefones[index].numero} adicionado com ID ${resultadoTelefone.insertId}`);
                        cliente.telefones[index].id = resultadoTelefone.insertId;
                      });

                      cliente.id = idCliente;
                      resolve(cliente);
                    }
                  });
                })
                .catch(erros => {
                  if (!Array.isArray(erros)) {
                    erros = [erros];
                  }

                  erros.forEach(erro => console.error(erro));

                  console.log('Feito rollback em transação');
                  conexao.rollback(() => {
                    reject(erros);
                  });
                });
            } else {
              conexao.commit(erro => {
                if (erro) {

                  console.log('Feito rollback em transação');
                  conexao.rollback(() => {
                    reject(erro);
                  });

                } else {
                  console.log('Transação finalizada com sucesso');
                  console.log(`Cliente ${cliente.nome} adicionado com ID ${results.insertId}`);
                  console.log('Sem telefone cadastrado');
                  cliente.id = idCliente;
                  resolve(cliente);
                }
              });
            }
          }
        });

      }
    });
  })
}

function inserirTelefoneCliente(telefone, idCliente) {
  return new Promise((resolve, reject) => {
    const registroTelefone = {
      type: telefone.tipo,
      area_code: telefone.codigoArea,
      phone_number: telefone.numero,
      id_client: idCliente
    };

    const sql = 'INSERT INTO PHONE SET ?';

    conexao.query(sql, registroTelefone, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(results);
      }
    });
  });
}

function listarTodosClientes() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT CLIENT.*, COUNT(PHONE.id) AS phones_count FROM CLIENT LEFT JOIN PHONE ON PHONE.id_client = CLIENT.id GROUP BY CLIENT.id';

    conexao.query(sql, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(
          results.map(registroCliente => {
            return {
              id: registroCliente.id,
              nome: registroCliente.name,
              dataNascimento: registroCliente.birthday,
              quantidadeTelefones: registroCliente.phones_count
            }
          })
        );
      }
    });
  });
}

function consultarClientePorNome(nome) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT CLIENT.*, COUNT(PHONE.id) AS phones_count FROM CLIENT LEFT JOIN PHONE ON PHONE.id_client = CLIENT.id WHERE UPPER(name) LIKE ? GROUP BY CLIENT.id';

    conexao.query(sql, `%${nome.toUpperCase()}%`, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(
          results.map(registroCliente => {
            return {
              id: registroCliente.id,
              nome: registroCliente.name,
              dataNascimento: registroCliente.birthday,
              quantidadeTelefones: registroCliente.phones_count
            }
          })
        );
      }
    });
  });
}

function consultarClientePorId(id) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM CLIENT WHERE id = ?';

    conexao.query(sql, id, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        const registroCliente = results[0];

        if (registroCliente == null) {
          resolve(null);
        } else {
          const cliente = {
            id: registroCliente.id,
            nome: registroCliente.name,
            dataNascimento: registroCliente.birthday
          };

          consultarTelefonesPorCliente(id)
            .then(telefones => {
              cliente.telefones = telefones;
              resolve(cliente)
            })
            .catch(erro => {
              reject(erro);
            });
        }
      }
    });
  });
}

function consultarTelefonesPorCliente(idCliente) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM PHONE WHERE id_client = ?';

    conexao.query(sql, idCliente, (erro, results, fields) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(
          results.map(registroTelefone => {
            return {
              id: registroTelefone.id,
              tipo: registroTelefone.type,
              codigoArea: registroTelefone.area_code,
              numero: registroTelefone.phone_number
            }
          })
        );
      }
    });
  });
}
