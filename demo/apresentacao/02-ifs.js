const doisString = '2';

/* 
  Quando usado '==' o Javascript faz coerção/transformação automática de um dos tipos 
  quando estes são de tipos diferentes
  Um artigo sobre o coerção https://medium.com/trainingcenter/explicando-a-coer%C3%A7%C3%A3o-de-tipos-em-javascript-d6c9203c4e5
*/
if (doisString == 2) {
  console.log('doisString == 2: TRUE');
} else {
  console.log('doisString === 2: FALSE');
}

/* 
  Quando usado '===' o Javascript não faz coerção/automática automática dos tipos
*/
if (doisString === 2) {
  console.log('doisString === 2: TRUE');
} else {
  console.log('doisString === 2: FALSE');
}

/*
  If e else podem ser aninhados
*/
if (doisString === 2) {
  console.log('doisString === 2: TRUE');
} else if(doisString == 2) {
  console.log('doisString === 2: FALSE');
  console.log('doisString == 2: TRUE');
} else {
  console.log('doisString === 2: FALSE');
  console.log('doisString == 2: FALSE');
}

/*
  Ternário é o nome dado ao if/else "inline"
  (comparação) ? (retorno positivo) : (retorno negativo)
*/
console.log('doisString > 3: ', doisString > 3 ? 'TRUE' : 'FALSE');
