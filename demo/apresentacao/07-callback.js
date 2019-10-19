/*
  Quando queremos fazer algum trabalho assíncrono mas gostariamos de ser notificados quando
  este trabalho finalizou ou ocorreu um erro, o padrão do Javascript é passar uma função de callbacks
  que espera pelo menos 1 parâmetro indicando se houve erro ou não.
  O primeiro parâmetro por padrão será sempre o erro, se for 'null', não deu erro.

  Uma função de callback é apenas uma função que será chamada pela função que executa o trabalho
  assíncrono no final deste trabalho ou no meio dele caso aconteça algum erro.

  Essa estratégia é padrão em NodeJs, todas as APIs nativas do NodeJs à utilizam 
  
  Exemplo a API 'fs', API do NodeJs para trabalhar com o FileSystem:
  
  const fs = require('fs');
  
  fs.readFile('./arquivo.txt', 'utf-8', (error, data) => {
    if (error) {
      console.error('Erro ao ler arquivo:', error);
    } else {
      console.log('Conteúdo do arquivo:', data);
    }
  });
*/

function usandoCallbackSucesso(param1, param2, callback) {
  // espera 1s e chama a função de callback passando (null, 'Sucesso')
  setTimeout(() => {
    callback(null, 'Sucesso');
  }, 1000);
}

function usandoCallbackErro(param1, param2, callback) {
  // espera 1s e chama a função de callback passando ('Erro', null)
  setTimeout(() => {
    callback('Erro', null);
  }, 1000);
}

console.log('Chamando método "usandoCallbackSucesso"');
usandoCallbackSucesso('param1', 'param2', (error, data) => {
  if (error) {
    console.error('"usandoCallbackSucesso" deu erro!', error);
  } else {
    console.log('"usandoCallbackSucesso" deu certo!', data);
  }
});

console.log('Chamando método "usandoCallbackErro"');
usandoCallbackErro('param1', 'param2', (error, data) => {
  if (error) {
    console.error('"usandoCallbackErro" deu erro!', error);
  } else {
    console.log('"usandoCallbackErro" deu certo!', data);
  }
});

console.log('acabou o código...');
