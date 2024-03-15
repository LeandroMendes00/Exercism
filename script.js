//                                                              --Ex1--
// Referência a valores diferentes ao longo do tempo.

let minhaPrimeiraVariável = 1;
minhaPrimeiraVariável = 'Some string';
minhaPrimeiraVariável = new SomeComplexClass();

// Variáveis definidas com const só podem ser atribuídas uma vez.

const minhaPrimeiraConstante = 10;
// Não pode ser reatribuído.
minhaPrimeiraConstante = 20;
// => TypeError: Atribuição a variável constante.
//                                                              --Ex1--


//                                                              --Ex2!--    
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 3));
//                                                              --Ex2!--
//                                                            --EX2!CONT--
export const Meu_Valor = 10;

export function soma(num1, num2) {
    return num1 + num2;
}

import {Meu_Valor, soma} from './file';

console.log(soma(Meu_Valor, 5));

//                                                            --EX2!CONT--