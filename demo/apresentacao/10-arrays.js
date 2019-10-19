/*
  Para verificar se valor é array: Array.isArray()

  Assim como string, array também possui os métodos .indexOf() e .includes()
  Onde você passa qual valor procura no array e eles irão te responder o index ou true/false
  porém diferente de string, você pode procurar por qualquer valor, exemplo:
  array.indexOf(3)
  array.includes(meuObjeto)

  Arrays tem métodos muito uteis:
  .forEach() itera entre todos os itens do array
  .map() itera entre todos os itens do array para transforma-los em um novo array
  .filter() itera entre todos os itens do array para filtrar em um novo array
  .find() itera até encontrar o primeiro item que corresponda à comparação

  Todos esses métodos esperam uma função com a seguinte assinatura:
  (item da iteração), (índice), (array completo)

  Mas não é obrigatório esperar todos, apenas os que vai usar
*/
const objeto = { nome: 'Giovane' };
const array = ['nome', 2, objeto];
console.log('Array.isArray(arrayDeNomes):', Array.isArray(array));
console.log('array.indexOf(2):', array.indexOf(2));
console.log('array.includes(objeto):', array.includes(objeto));

const arrayDeNomes = ['Giovane', 'Rubens', 'Marcos'];
console.log('arrayDeNomes', arrayDeNomes);

arrayDeNomes.forEach((nome, index, arrayCompleto) => {
  console.log('item', nome, 'índice', index, arrayCompleto.length);
});

const arrayDeTamanhoDosNomes = arrayDeNomes.map(nome => {
  return nome.length;
});
console.log('Tamanhos dos nomes', arrayDeTamanhoDosNomes);


const nomeComLetraO = arrayDeNomes.filter(nome => {
  return nome.includes('o');
});
console.log('Nomes com a letra "o"', nomeComLetraO);

const rubens = arrayDeNomes.find(nome => {
  return nome === 'Rubens';
});
const dimitri = arrayDeNomes.find(nome => {
  return nome === 'Dimitri';
});
console.log('Find Rubens', rubens);
console.log('Find Dimitri', dimitri);
