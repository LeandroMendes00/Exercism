// @ts-verificar
//
// ☝🏽 A linha acima habilita a verificação de tipo para este arquivo. Vários IDEs interpretam
// a diretiva @ts-check. Isso lhe dará um preenchimento automático útil na web
// e IDEs suportados ao implementar este exercício. Você não precisa
// entender tipos, JSDoc ou TypeScript para completar este JavaScript
// exercício, e pode ignorar completamente este bloco de comentários e diretiva.

// 👋🏽 Olá!
//
// Na trilha JavaScript, fornecemos stubs. Esses stubs fornecem uma
//ponto de partida para resolução do exercício.
//
// Em geral, cada variável/constante e cada função declarada terão um
// Bloco de comentários JSDoc acima dele, explicando o que a variável/constante contém ou
// a função deve ser executada.
//
// 💡 Freqüentemente, os blocos de comentários JSDoc possuem anotações, como @param e
// @returns que geralmente são destacados com uma cor diferente se o IDE
// você os reconhece. São essas anotações que são usadas quando
// referindo-se à constante, variável ou função de algum outro lugar que
// IDEs são exibidos.
//
// Você não precisa escrever isso sozinho; não é esperado em linguagem idiomática
// JavaScript, mas algumas empresas e guias de estilo os aplicam.
//
// 💡 Você pode limpar completamente um stub antes de começar. Muitas vezes
// recomendamos usar o stub, pois eles já estão configurados corretamente para
//trabalhe com os testes, que você pode encontrar em ./lasagna.spec.js
//
// Boa sorte preparando lasanha!

/**
 * O número de minutos necessários para preparar uma única camada.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
/**
 * O número esperado de minutos que a lasanha deve permanecer no forno.
 */
const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determina quantos minutos a lasanha ainda precisa permanecer no
 * forno devidamente preparado.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} o número de minutos restantes
 */
function remainingMinutesInOven(actualMinutesInOven) {
  // Calcula o tempo restante no forno, diminuindo os minutos passados no forno do tempo esperado
  const remainingTime = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  // Verifica se o tempo restante é negativo ou seja, a lasanha já passou do tempo esperado
  if (remainingTime < 0) {
    // Se o tempo restante for negativo, retorna 0, indicando que a lasanha está pronta
    return 0;
  } else {
    // Se o tempo restante for positivo, retorna o tempo restante necessário
    return remainingTime;
  }
}

/**
 * Dado um número de camadas, determina o tempo total de preparação.
 *
 * @param {number} numberOfLayers
 * @returns {number} o tempo total de preparação
 */
function preparationTimeInMinutes(numberOfLayers) {
  // Calcula o tempo total de preparação multiplicando o número de camadas pelo tempo de preparação por camada 
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calcula o tempo total de trabalho. Ou seja, é hora de preparar todas as camadas
 * da lasanha, e o tempo já passado no forno.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} o tempo total de trabalho
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  // Calcula o tempo total de trabalho somando o tempo de preparação e os minutos já passados no forno
  const preparationTime = preparationTimeInMinutes(numberOfLayers);
  return preparationTime + actualMinutesInOven;
}

// Valores de exemplo
const numberOfLayers = 2;
const actualMinutesInOven = 20;

// Calcula o tempo restante necessário para a lasanha permanecer no forno
const remainingTime = remainingMinutesInOven(actualMinutesInOven);
console.log(`Tempo restante no forno: ${remainingTime} minutos`);

// Calcula o tempo total de preparação para todas as camadas da lasanha
const preparationTime = preparationTimeInMinutes(numberOfLayers);
console.log(`Tempo total de preparação: ${preparationTime} minutos`);

// Calcula o tempo total de trabalho, incluindo o tempo de preparação e os minutos já passados no forno
const totalTime = totalTimeInMinutes(numberOfLayers, actualMinutesInOven);
console.log(`Tempo total de trabalho: ${totalTime} minutos`);