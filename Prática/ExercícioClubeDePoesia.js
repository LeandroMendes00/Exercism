// @ts-verificar
//
// ☝🏽 A linha acima habilita a verificação de tipo para este arquivo. Vários IDEs interpretam
// a diretiva @ts-check. Isso lhe dará um preenchimento automático útil na web
// e IDEs suportados ao implementar este exercício. Você não precisa
// entender tipos, JSDoc ou TypeScript para completar este JavaScript
// exercício, e pode ignorar completamente este bloco de comentários e diretiva.
//
// 👋🏽 Olá de novo!
//
// Um ​​rápido lembrete sobre esboços de exercícios:
//
// 💡 Você pode limpar completamente qualquer stub antes de começar. Muitas vezes
// recomendamos usar o stub, pois eles já estão configurados corretamente para
//trabalhe com os testes, que você pode encontrar em ./door-policy.spec.js.
//
// 💡 Você não precisa escrever blocos de comentários JSDoc; não é esperado
// em JavaScript idiomático, mas algumas empresas e guias de estilo os aplicam.
//
// Boa sorte com essa política de portas!
/**
 * Responda com o caracter correto, dada a linha do
 * poema, se isso fosse dito na porta da frente.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}
/**
 * Formate a senha da porta de entrada, dada a resposta
 * cartas. 
 *
 * @param {string} word as cartas com as quais você respondeu antes
 * @returns {string} a senha da porta da frente
 */
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
/**
 * Responda com o caracter correto, dada a linha do
 * poema, se isso fosse dito na porta dos fundos.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}
/**
 * Formate a senha da porta dos fundos, dada a resposta
 * cartas.
 *
 * @param {string} word as cartas com as quais você respondeu antes
 * @returns {string} a senha da porta dos fundos
 */
export function backDoorPassword(word) {
  return frontDoorPassword(word) + `, please`;
}

/* 
Este código é sobre um sistema que usa letras de um texto para criar senhas. As funções chamadas frontDoorResponse e backDoorResponse pegam 
uma letra específica das linhas de um poema ou texto. Enquanto as funções frontDoorPassword e backDoorPassword usam essas letras para criar 
senhas para portas, uma para a porta da frente e outra para a dos fundos.
 */