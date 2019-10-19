console.log('--- while ---');
let count = 0;
/* 
  Executa o bloco de código dentro das '{}' enquanto a
  comparação de dentro dos '()' retorne 'true'
*/
while (count < 5) {
  console.log('count', count);
  count++
}

console.log('--- for convencional ---');
/* 
  Executa o bloco de código dentro das '{}' enquanto a
  comparação de dentro dos '()' retorne 'true'
  Diferente do while, existem 3 'parâmetros' dentro do '()' separados por ';'
  (inicializacao de variavel do loop/index) ; (comparação) ; (expressão para incrementar ou decrementar)
*/
for(let index = 0; index < 5; index++) {
  console.log('index', index);
}

console.log('--- for of ---');
/*
  Semelhante ao 'for each', itera sobre todos os itens de um array
  e executa o bloco de código dentro do '{}' atribuindo o valor atual da iteração
  à uma variável
  Sua assinatura é (variável com item da iteração) of (array)
*/
const array = ['Javascript', 'NodeJs', 'MySQL', 'npm'];
for (let item of array) {
  console.log('item', item);
}

console.log('--- for in em objetos---');
const objeto = {
  nome: 'Giovane',
  sobrenome: 'Souza'
}
/*
  Igual ao 'for of' acima, porém é usado para iterar sobre os atributos de um objeto
  e executar o bloco de código dentro do '{}' atribuindo o valor atual da iteração
  à uma variável
  Sua assinatura é (variável com item da iteração) in (objeto)
*/
for (let atributo in objeto) {
  console.log(atributo, 'valor', objeto[atributo]);
}
