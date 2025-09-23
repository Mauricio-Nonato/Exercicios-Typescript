/**
 * Exercício 01 – Função de saudação
 * Função sem parâmetros que apenas imprime "Olá, Mundo!".
 */
function saudacao(): void {
  console.log("Olá, Mundo!");
}
// Chamando a função
saudacao();


/**
 * Exercício 02 – Função com parâmetro
 * Função que recebe um nome e exibe uma saudação personalizada.
 */
function dizerOla(nome: string): void {
  console.log(`Olá, ${nome}!`);
}
dizerOla("Eduardo");
dizerOla("Pietro");


/**
 * Exercício 03 – Função com retorno
 * Função que recebe dois números e retorna a soma deles.
 */
function somar(a: number, b: number): number {
  return a + b;
}
console.log(`Resultado da soma: ${somar(10, 5)}`);


/**
 * Exercício 04 – Função de subtração
 * Função que recebe dois números e retorna a subtração.
 */
function subtrair(a: number, b: number): number {
  return a - b;
}
console.log(`Resultado da subtração: ${subtrair(20, 8)}`);


/**
 * Exercício 05 – Função de multiplicação
 * Função que recebe dois números e retorna a multiplicação.
 */
function multiplicar(a: number, b: number): number {
  return a * b;
}
console.log(`Resultado da multiplicação: ${multiplicar(6, 7)}`);


/**
 * Exercício 06 – Função de divisão
 * Função que recebe dois números e retorna a divisão.
 * Caso o divisor seja zero, retorna erro.
 */
function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Erro: divisão por zero");
    return NaN;
  }
  return a / b;
}
console.log(`Resultado da divisão: ${dividir(20, 4)}`);


/**
 * Exercício 07 – Função dobro
 * Função que recebe um número e retorna o dobro dele.
 */
function dobro(n: number): number {
  return n * 2;
}
console.log(`Dobro de 12 = ${dobro(12)}`);


/**
 * Exercício 08 – Função par ou ímpar
 * Função que verifica se um número é par ou ímpar.
 */
function parOuImpar(n: number): string {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(`7 é ${parOuImpar(7)}`);


/**
 * Exercício 09 – Função média de notas
 * Calcula a média de três notas e retorna o valor.
 */
function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);


/**
 * Exercício 10 – Função aprovação
 * Verifica se o aluno está aprovado ou reprovado.
 * Regras: nota >= 7 e faltas <= 10.
 */
function verificarAprovacao(nota: number, faltas: number): string {
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(verificarAprovacao(8, 5));   // Aprovado
console.log(verificarAprovacao(6, 12));  // Reprovado


/**
 * Exercício 11 – Função fatorial
 * Calcula o fatorial de um número.
 * Exemplo: 5! = 5*4*3*2*1 = 120.
 */
function fatorial(n: number): number {
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}
console.log(`Fatorial de 5 = ${fatorial(5)}`);


/**
 * Exercício 12 – Função juros simples
 * Fórmula: Valor Final = Capital + (Capital * Taxa * Tempo).
 * A taxa deve ser em decimal (5% = 0.05).
 */
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}
console.log(`VF (juros simples) = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);


/**
 * Exercício 13 – Conversão Celsius → Fahrenheit
 * Fórmula: F = C * 1.8 + 32.
 */
function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);


/**
 * Exercício 14 – Função calculadora
 * Função que recebe dois números e um operador (+, -, *, /).
 * Retorna o resultado ou erro caso o operador seja inválido.
 */
function calculadora(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }
  console.log("Operador inválido!");
  return NaN;
}
// Exemplos de uso
console.log(`10 + 5 = ${calculadora(10, 5, "+")}`);
console.log(`10 - 5 = ${calculadora(10, 5, "-")}`);
console.log(`10 * 5 = ${calculadora(10, 5, "*")}`);
console.log(`10 / 5 = ${calculadora(10, 5, "/")}`);
