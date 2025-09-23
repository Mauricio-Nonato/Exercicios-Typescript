// Declara a constante 'camiseta1' representando o preço original da camiseta (80 reais).
// O tipo 'number' indica que esta variável só pode armazenar números.
const camiseta1: number = 80;

// Declara a constante 'desconto1' com o valor de 15%.
// Em programação, porcentagem é representada por números decimais, então 15% = 0.15.
const desconto1: number = 0.15;

// Calcula o valor do desconto em reais.
// Multiplica o preço original da camiseta pelo valor decimal do desconto.
// Exemplo: 80 * 0.15 = 12 (ou seja, R$12 de desconto).
const valorDesconto1: number = camiseta1 * desconto1;

// Calcula o preço final da camiseta já com o desconto aplicado.
// Subtrai o valor do desconto do preço original.
// Exemplo: 80 - 12 = 68 (ou seja, o preço final é R$68).
const precoFinal1: number = camiseta1 - valorDesconto1;

// Exibe no console o preço original da camiseta.
// Esse comando imprime "Preço original: R$ 80".
console.log("Preço original: R$", camiseta1);

// Exibe no console o valor do desconto em reais.
// Esse comando imprime "Desconto: R$ 12".
console.log("Desconto: R$", valorDesconto1);

// Exibe no console o preço final da camiseta com o desconto já aplicado.
// Esse comando imprime "Preço final com desconto: R$ 68".
console.log("Preço final com desconto: R$", precoFinal1);
