/*
  'const' define uma varíável constante
  não é possível alterar seu valor
*/
const variavelConstante = 'Não é possível mudar o valor';

/*
  'let' define uma variável normal
  seu valor pode ser alterado a vontade
*/
let variavelNormal = 'Pode mudar o valor';
variavelNormal = 'o quanto quiser...';

const numero = 42; // number
const numeroDecimal = 1.1; // number
const booleano = true; // boolean
const string = 'bacon'; // string
const dataAtual = new Date(); // Date
/*
  Para o Javascript os meses iniciam em 0, não 1
  Então Janeiro é 0 e Dezembro é 11
*/
const dataMeuAniversario = new Date(1994, 8, 10); // (ano, mês, dia, hora, minuto, segundo, milisegundo)
const dataMeuAniversarioString = new Date('1994-09-10'); // Ou string em formato de data americano

console.log('dataAtual:', dataAtual);
console.log('dataMeuAniversario:', dataMeuAniversario);
console.log('dataMeuAniversarioString:', dataMeuAniversarioString);

// array
const array = [1, 'dois', true, { bacon: 'é top' }];

/*
  Para acessar um valor especifico de um array
  passe o índice desejado entre '[]'
  em javascript o índice inicia no 0
*/
array[0] = 2;

// objeto
const objeto = {
  atributo: 'pode ser qualquer coisa',
  'nome-diferentao': 'tem de ser escrito com aspas',
  '3': 'pode até número'
}

/*
  para acessar o atributo de um objeto
  é só colocar '.' e o nome do atributo
*/
objeto.atributo = 'pode ser alterado tranquilo, quem é constante é o objeto e não os atributos dele';

/*
  também é possível acessar como se fosse um array
  passando o nome do array entre '[]'
  dependendo do nome do atributo, só é possível acessa-lo assim
*/
objeto['nome-diferentao'] = 'parece array, mas é outra maneira de acessar/criar atributos';

variavelConstante = 'sério, não da pra mudar mesmo...';
