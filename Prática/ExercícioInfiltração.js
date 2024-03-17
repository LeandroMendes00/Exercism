// 💡 Você pode limpar completamente qualquer stub antes de começar. Muitas vezes
// recomendamos usar o stub, pois eles já estão configurados corretamente para
//trabalhe com os testes, que você pode encontrar em ./annalyns-infiltration.spec.js.
//
// 💡 Você não precisa escrever blocos de comentários JSDoc sozinho; não é esperado
// em JavaScript idiomático, mas algumas empresas e guias de estilo os aplicam.
//
// Agora ajude Annalyn a libertar sua melhor amiga!

/**
 * O ataque rápido está disponível quando o cavaleiro está dormindo
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Se você pode ou não executar um ataque rápido.
 */
export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  } else {
    return false;
  }
}

/**
 * Um espião útil captura informações, o que não será possível fazer se todos estiverem dormindo.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} arqueiroIsAwake
 * @param {boolean} prisioneiroIsAwake
 *
 * @returns {boolean} Se você pode ou não espionar alguém.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(!knightIsAwake && !archerIsAwake && !prisonerIsAwake) {
    return false;
  } else {
    return true;
  }
}

/**
 * Você será pego pelo arqueiro se sinalizar enquanto ele estiver acordado.
 *
 * @param {boolean} arqueiroIsAwake
 * @param {boolean} prisioneiroIsAwake
 *
 * @returns {boolean} Se você pode ou não enviar um sinal ao prisioneiro.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(!archerIsAwake && !prisonerIsAwake) {
    return false;
  } else {
    return !archerIsAwake;
  }
}

/**
 * A etapa final do plano: libertar a melhor amiga de Annalyn.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} arqueiroIsAwake
 * @param {boolean} prisioneiroIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Se você pode ou não libertar o amigo de Annalyn.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
 return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}

/*
(petDogIsPresent && !archerIsAwake): Esta parte verifica se o cachorro de estimação está presente (petDogIsPresent) 
e se o arqueiro não está acordado (!archerIsAwake). Se ambas as condições forem verdadeiras, isso significa que 
o cachorro de estimação pode ser usado como distração para o arqueiro, permitindo a libertação do prisioneiro.

(!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake): Esta parte verifica se o cachorro de estimação não está presente 
(!petDogIsPresent), o prisioneiro está acordado (prisonerIsAwake), e tanto o cavaleiro quanto o arqueiro não estão acordados
 (!knightIsAwake && !archerIsAwake). Se todas essas condições forem verdadeiras, isso significa que o prisioneiro pode ser 
libertado sem a presença do cachorro de estimação, aproveitando o fato de que tanto o cavaleiro quanto o arqueiro estão dormindo.

Portanto, a função canFreePrisoner retorna verdadeiro se uma dessas condições for atendida, indicando que Annalyn pode libertar seu amigo, 
e falso caso contrário.

Parte na qual tive grande dificuldade de resolver 15/03/2024.
*/