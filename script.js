//                                                             Basic
// Sintaxe de uma função
// Função que retorna a soma de dois números
function addNum(a, b) {
    return a + b;
}
console.log(addNum(1, 5));

// Sintaxe de declaração de parâmetros
// Função que retornar o dobro do número passado como parâmetro
function doubleNum(num) {
    return num * 2;
}
console.log(doubleNum(2))

// Sintaxe de uso de métodos de string 
// Método que retorna o primeiro caractere de uma string
function PrimeiroCaractere(text) {
    return text[0];
}
const minhaString = "Segunda-feira!";
console.log(PrimeiroCaractere(minhaString))


// Semântica de uma função 
//Função que calcula a média de três números
function calculaNum(num1, num2, num3) {
    return (num1 +  num2 + num3);
}
console.log(calculaNum(1, 2, 3))

// Semãntica de uma unfção de formatação de texto
// Função que formata um string para iniciar letras maiúscula
function  formataText(text) {
    // return text.toUpperCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const  meuTexto = "março dia 25 de 2024";
console.log(formataText(meuTexto));

// Semântica de validação
// Função que verifica se um número é par
function check(number) {
    if (number % 2 === 0) {
       return "Número PAR" 
    } else  {
       return "Número IMPAR"
    }
}
console.log(check(4));

// Fornecer identificadores únicos e imutáveis, Symbol é uma ferramenta poderosa em JavaScript que pode ajudar a evitar colisões de nomes, 
// criar propriedades privadas para fornecer uma maneira única de identificar e marcar valores em seu código.

 const cadastro1 = Symbol ("cadt1");
 const cadastro2 = Symbol ("cadt2");
 const cadastro3 = Symbol ("cadt3");
 const cadastro4 = Symbol ("cadt4");

const cadastro = {};

cadastro[cadastro1] = {
  nome: "Leandro",
  idade: 23,
  salario: 40.000,
  andar: 5
};

cadastro[cadastro2] = {
  nome: "Joao",
  idade: 70,
  salario: 5.000,
  andar: 1,
};

cadastro[cadastro3] = {
  nome: "joana",
  idade: 18,
  salario: 2.500,
  andar: 3
};

cadastro[cadastro4] = {
  nome: "Leticia",
  idade: 25,
  salario:16.000,
  andar: 2
};

function informacoesDoMoradores(cadastro, chave) {
  const morador = cadastro[chave];
  if (morador) {
    console.log (`${morador.nome} mora no andar ${morador.andar}, tem ${morador.idade} anos e tem uma renda de R$ ${morador.salario.toFixed(2)}.`)
  } else {
    console.log("Morador não encontrado.");
  }
}

informacoesDoMoradores(cadastro,cadastro1);


//                                                            --Ex1--
// Referência a valores diferentes ao longo do tempo.

let minhaPrimeiraVariável = 1;
minhaPrimeiraVariável = 'Some string';
minhaPrimeiraVariável = new SomeComplexClass();

// Variáveis definidas com const só podem ser atribuídas uma vez.

const minhaPrimeiraConstante = 10;
// Não pode ser reatribuído.
minhaPrimeiraConstante = 20;
// => TypeError: Atribuição a variável constante.
//                                                            --Ex1--


//                                                            --Ex2!--    
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 3));
//                                                            --Ex2!--
//                                                          --EX2!CONT--
// Definição da Função ( function exemplo(mensagem) {...}) :
// Nome da função: EXEMPLO
// Parênteses (): Parâmetros são variáveis que recebem valores passados quando a função é chamada |MENSAGEM|
// Corpo da função: O corpo da função é delimitado por chaves {}.
// Instruções: Código que realizam as operações desejadas dentro da função `{}`
// Retorno (opcional): `return` é usada para especificar o valor retornado pela função. 

// Definição da função chamada 'exemplo'.
function exemplo(mensagem) {
    // declara uma variável local chamada exp, atribui a ela o valor "BOOH@!", essa variável só é acessível dentro do escopo da função exemplo.
    const exp = "BOOH@!" 
    // RETURN esta retornando a concatenação da variável mensagem(que é o parâmetro da função, o valor passado quando a função é chamada) 
        // com um espaço em branco e o valor da variável exp.
    return mensagem + " " + exp; 
}
// Exemplo de uso da função
// Declara uma chamada constante mensagemDoExemplo e atribui a ela o valor retornado pela função exemplo quando chamada com o argumento "KLBOOH@!". 
const mensagemDoExemplo = exemplo("KLBOOH@!");
// Resultado
console.log(mensagemDoExemplo);

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
                                          
export const Meu_Valor = 10;

export function soma(num1, num2) {
    return num1 + num2;
}

import {Meu_Valor, soma} from './file';

console.log(soma(Meu_Valor, 5));

//                                                          --EX2!CONT--

//    
// Operador AND (E)                                           --Ex3!--
let a = true;
let b = false;

// Retorna true apenas se ambas varáveis forem verdadeiras
let resultadoAnd = a && b;
console.log("Resultado do operador AND:", resultadoAnd);
                        //
// Operdaor OR (OU)
let c = true;
let d = false;

// Retorna verdadeiro se um dos operadores forem verdadeiro, se ambos forem falsos resultado sera falso.
let resultadoOr = c || d;
console.log("Resultado do operador OR:", resultadoOr);
                        //
//  Operador NOT (NÃO)
let e = true;

// Inveter o valor da varável
let resultadoNot = !e;
console.log("Resultado do operador Not:", resultadoNot);
//                                                            --EX3!--

//                                                            --EX4!--
function arredondar(funcao, numero) {
    return funcao(numero);
}

const num1 = 3.1;
const num2 = 3.6;
const num3 = -1.1;
const num4 = -1.6;

const numeroArredondadoParaBaixo = arredondar(Math.floor, num1);
console.log(numeroArredondadoParaBaixo);

const numeroArredondadoParaCima = arredondar(Math.ceil, num1);
console.log(numeroArredondadoParaCima);

const numeroArredondadoParaNúmeroMaisPróximo = arredondar(Math.floor, num1);
console.log(numeroArredondadoParaNúmeroMaisPróximo);
//                                                            --EX4!--
// Ordem de operações
    //const result = 3 ** 3 + 9 * 4 / (3 - 1);
    // => 3 ** 3 + 9 * 4/2
    // => 27 + 9 * 4/2
    // => 27 + 18
    // => 45  
//                                                          --EX4!CONT--

//                                                            --EX5!--
const letras = 'Hello, World!';
            /* "Hello, World!" */
console.log(letras);
//                                                            --EX5!--
