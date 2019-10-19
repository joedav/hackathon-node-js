/*
  Devido o callback gerar o 'callback hell', foi introduzido no Javascript a Promise
  que internamente usa callback, mas pelo menos nos permite escrever um código mais legível
  proporcionando os métodos de '.then()' e '.catch()' para tratar de sucesso e erro, respectivamente
  além de uma função em comum para a finalização da promise, independente do resultoado, '.finally()'

  Uma promise é criada instânciando o 'Promise', no construtor é esperado uma função que receba
  2 funções de callback, a primeira comumente chamada de 'resolve' e a segunda chamada de 'reject'.

  A instância de Promise te oferece os métodos .then(), .catch() e .finally()
  .then() recebe um callback que será chamado em caso de sucesso
  .catch() recebe um callback que será chamado em caso de erro
  .finally() recebe um callback que será chamado no fim da promise, independente do resultado

  Dentro da Promise
  Quando o trabalho é executado com sucesso é chamado o 'resolve' passando no máximo
  1 parâmetro que será passado para o callback no .then()
  Quando ocorre um erro é chamado o 'reject' passando no máximo
  1 parâmetro que será passado para o callback no .catch()
*/
function usandoPromiseSucesso(param1, param2) {
  // espera 1s e chama função 'resolve'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tudo certo, vai filhão!');
    }, 1000);
  });
}
function usandoPromiseErro(param1, param2) {
  // espera 1s e chama função 'reject'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('erro, deu ruim!');
    }, 1000);
  });
}

console.log('Chamando método "usandoPromiseSucesso"');
usandoPromiseSucesso('param1', 'param2')
  .then(data => {
    console.log('"usandoPromiseSucesso" deu certo!', data);
  })
  .catch(data => {
    console.log('"usandoPromiseSucesso" deu erro!', data);
  })
  .finally(() => {
    console.log('"usandoPromiseSucesso" independente do resultado, promise finalizou');
  });

console.log('Chamando método "usandoPromiseErro"');
usandoPromiseErro('param1', 'param2')
  .then(data => {
    console.log('"usandoPromiseErro" deu certo!', data);
  })
  .catch(data => {
    console.log('"usandoPromiseErro" deu erro!', data);
  })
  .finally(() => {
    console.log('"usandoPromiseErro" independente do resultado, promise finalizou');
  });

console.log('acabou o código...');
