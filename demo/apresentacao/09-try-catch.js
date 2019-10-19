/*
  Comum em muitas linguagens, para tratar erros há try/catch

  O Javascript não possuí tipagem para erros além do 'Error()' 
  é permitido fazer 'throw' de qualquer coisa como erro
*/

try {
  throw new Error('"Único" tipo de erro');
} catch (error) {
  console.log('Erro', error);
}

try {
  throw 3;
} catch (error) {
  console.log('Erro com número:', error);
}

try {
  throw 'string';
} catch (error) {
  console.log('Erro com string:', error);
}

try {
  throw { name: 'Giovane' };
} catch (error) {
  console.log('Erro com objeto:', error);
}

try {
  throw true;
} catch (error) {
  console.log('Erro booleano:', error);
}

try {
  throw () => {};
} catch (error) {
  console.log('Erro função:', error);
}