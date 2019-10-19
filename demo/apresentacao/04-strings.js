const string = '  uma string top pra você  ';

/*
  String tem o atributo 'length' que contém o valor to tamanho da string
*/
console.log('string.length:', string.length);

/*
  String tem o método 'trime' que remove os espaços em branco no início e fim da string
*/ 
console.log('string.trim().length:', string.trim().length);

/*
  String tem o método 'includes' que recebe uma string de parâmetro 
  e verifica se seu valor contém a string passada como parâmetro
  retornando 'true' ou 'false'
*/
console.log('string.includes("top"):', string.includes('top'));

/*
  String tem o método 'indexOf' que recebe uma string de parâmetro
  e verifica no seu valor o índice de onde esta a string passada como parâmetro
  retornando '-1' se não existir na string ou >= 0 quando existir
*/
console.log('string.indexOf("top"):', string.indexOf('top'));

/*
  String tem o método 'split' que recebe uma string de parâmetro
  e separa seu valor em um array de strings baseado na string passada como parâmetro
  Exemplos:
  - Quando passada uma string vazia, '', retorna um array onde cada item é um caracter da string
  - Quando passada um espaço, ' ', retorna um array onde cada item é uma palavra da string
  - Quando passado uma string, retorna um array onde cada item é um pedaço da string onde havia 
  a ocorrência da string passada de parâmetro
*/
console.log('string.split(""):', string.split(''));
console.log('string.split(" "):', string.split(' '));
console.log('string.split("o"):', string.split('o'));

/*
  String tem o método 'replace' que recebe 2 strings de parâmetro
  1º termo de busca
  2º novo valor para o termo de busca
  E retorna uma nova string com as ocorrências do termo de busca substituidas pelo novo valor
*/
console.log('string.replace("uma string", "um bacon")', string.replace('uma string', 'um bacon'));
