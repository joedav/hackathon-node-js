/*
  Semelhante a uma linguagem funcional funções podem ser passadas como valor para variáveis
  
  Em Javascript há 2 tipos de funções: functions e arrow functions
  function funcaoComum() {}
  const arrowFunction = () => {}

  A diferença entre ambas é que uma 'function' possui escopo próprio e 'arrow function' não tem escopo.

  function funcao() {
    console.log(this); // this se refere ao próprio escopo
  }

  const arrowFunction = () => {
    console.log(this); // this se refere ao escopo 'pai', onde a 'arrow function' foi criada
  }

  Há 2 formas básicas de se escrever uma função: declarativa ou como expressão/anônima

  Declarativa: são declaradas na compilação do js, podem ser acessadas em qualquer ponto do script
  function funcao() {}

  Anônima: são criadas em runtime então só podem ser acessadas depois de criadas
  const funcaoAnonima = function() {}
  const arrowFunction = () => {}
*/

console.log('chamando "funcaoDeclarativa" antes de sua declaração');
funcaoDeclarativa();

console.log('declaração de "funcaoDeclarativa"');
function funcaoDeclarativa() {
  console.log('função declarativa');
}

console.log('const funcaoDeclarada = funcaoDeclarativa;')
const funcaoDeclarada = funcaoDeclarativa;
console.log('chamando variável "funcaoDeclarada" como função');
funcaoDeclarada();

try {
  console.log('chamando "funcaoAnonima" antes de sua declaração');
  funcaoAnonima();
} catch(erro) {
  console.log('Erro ao chamar "funcaoAnonima" antes de criação', erro);
}
console.log('criação de "funcaoAnonima"');
const funcaoAnonima = function() {
  console.log('função anônima');
}

try {
  console.log('chamando "arrowFunction" antes de sua declaração');
  arrowFunction();
} catch(erro) {
  console.log('Erro ao chamar "arrowFunction" antes de criação', erro);
}
console.log('criação de "arrowFunction"');
const arrowFunction = () => {
  console.log('arrow function');
}
