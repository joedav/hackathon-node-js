/*
  Para descobrir o tipo de um valor, use typeof e será retornada uma string com o nome do tipo
*/
console.log('typeof "texto":', typeof 'texto');
console.log('typeof 3:', typeof 3);
console.log('typeof true:', typeof true);
console.log('typeof null:', typeof null);
console.log('typeof {}:', typeof {});
console.log('typeof []:', typeof []);

/*
  Para transformar uma string ou booleano em número há 3 maneiras parseInt(), parseFloat() e Number()

  parseInt() recebe 2 parâmetros, o valor e a base númerica dele
  e retorna o número inteiro correspondente
  
  Para entender melhor sobre a base númerica veja o link abaixo:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt

  parseFloat() recebe o valor a ser transformado em número decimal

  Number() recebe o valor a ser transformado e retorna o valor correspondente
  inteiro ou decimal
*/
console.log('parseInt("10.2"):', parseInt('10.2'));
console.log('parseInt("FF", 16):', parseInt('FF', 16));
console.log('parseFloat("10.2"):', parseFloat('10.2'));
console.log('Number("10"):', Number('10'));
console.log('Number("10.2"):', Number('10.2'));
console.log('Number("texto"):', Number('texto'));
console.log('Number(true):', Number(true));
console.log('Number(false):', Number(false));
console.log('Number(null):', Number(null));
console.log('Number({}):', Number({}));
console.log('Number([]):', Number([]));

/*
  Para transformar um número ou booleano em string há os métodos .toString() dos valores ou String()
*/
console.log('String(1):', String(1));
console.log('String(true):', String(true));
console.log('String(null):', String(null));
console.log('Number({}):', Number({}));
console.log('Number([]):', Number([]));

/*
  Para transformar um número ou string em booleano há Boolean()
*/
console.log('Boolean("string"):', Boolean('string'));
console.log('Boolean(3):', Boolean(3));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean({}):', Boolean({}));
console.log('Boolean([]):', Boolean([]));
