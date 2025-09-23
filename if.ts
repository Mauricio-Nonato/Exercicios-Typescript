/**
 * COLEÇÃO DE EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO
 * Estruturas condicionais (if/else) para tomada de decisão
 */

/**
 * Exercício 01 – Positivo ou Negativo
 * Verifica se um número é positivo ou negativo usando comparação simples
 */
let numero: number = -5;
if (numero >= 0) {  // Condição: número maior ou igual a zero
  console.log(`${numero} é positivo.`);
} else {  // Executado quando a condição é falsa
  console.log(`${numero} é negativo.`);
}

/**
 * Exercício 02 – Par ou Ímpar
 * Utiliza operador módulo (%) para verificar divisibilidade por 2
 */
let valor: number = 12;
if (valor % 2 === 0) {  // Resto da divisão por 2 igual a zero = par
  console.log(`${valor} é par.`);
} else {
  console.log(`${valor} é ímpar.`);
}

/**
 * Exercício 03 – Maioridade
 * Verifica se idade atinge a maioridade legal (18 anos)
 */
let idade: number = 17;
if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}

/**
 * Exercício 04 – Nota de aprovação
 * Sistema simples de aprovação com nota mínima 6
 */
let nota: number = 5;
if (nota >= 6) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}

/**
 * Exercício 05 – Classificação etária
 * Estrutura else-if encadeada para faixas etárias consecutivas
 */
let idadePessoa: number = 35;
if (idadePessoa < 12) {
  console.log("Criança");
} else if (idadePessoa < 18) {  // Já sabemos que é >=12
  console.log("Adolescente");
} else if (idadePessoa < 60) {  // Já sabemos que é >=18
  console.log("Adulto");
} else {  // >=60
  console.log("Idoso");
}

/**
 * Exercício 06 – Nota e faltas
 * Operador lógico AND (&&) para múltiplas condições obrigatórias
 */
let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;
if (notaFinal >= 7 && faltas <= 10) {  // Ambas condições devem ser verdadeiras
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}

/**
 * Exercício 07 – Login simples
 * Autenticação básica com comparação de strings
 */
let usuario: string = "admin";
let senha: string = "1234";
if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}

/**
 * Exercício 08 – Desconto por idade
 * Benefício para idosos (60+ anos)
 */
let idadeCliente: number = 65;
if (idadeCliente >= 60) {
  console.log("Cliente tem direito a desconto.");
} else {
  console.log("Cliente não tem desconto.");
}

/**
 * Exercício 09 – Senha forte
 * Verificação de comprimento usando propriedade .length
 */
let senhaNova: string = "abc12345";
if (senhaNova.length >= 8) {
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}

/**
 * Exercício 10 – Maior número
 * Comparação completa com três possíveis resultados
 */
let a: number = 25;
let b: number = 42;
if (a > b) {
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}

/**
 * Exercício 11 – Dia da semana
 * Combina AND (&&) e OR (||) para agrupar condições
 */
let dia: number = 6; // 1=Segunda ... 7=Domingo
if (dia >= 1 && dia <= 5) {  // Dias úteis: 1 a 5
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {  // Fim de semana: 6 ou 7
  console.log("Final de semana.");
} else {
  console.log("Número inválido para dia.");  // Tratamento de erro
}

/**
 * Exercício 12 – Faixa de notas
 * Sistema de conceitos com limites decrescentes
 */
let notaAluno: number = 82;
if (notaAluno >= 90) {
  console.log("Conceito A");
} else if (notaAluno >= 80) {  // Nota entre 80-89
  console.log("Conceito B");
} else if (notaAluno >= 70) {  // Nota entre 70-79
  console.log("Conceito C");
} else if (notaAluno >= 60) {  // Nota entre 60-69
  console.log("Conceito D");
} else {  // Abaixo de 60
  console.log("Conceito F");
}

/**
 * Exercício 13 – Temperatura
 * Classificação climática com intervalos definidos
 */
let temperatura: number = 28;
if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {  // Entre 15 e 25
  console.log("Clima agradável.");
} else {  // Acima de 25
  console.log("Está quente.");
}

/**
 * Exercício 14 – Triângulo válido
 * Aplica a desigualdade triangular: cada lado < soma dos outros dois
 */
let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {  // Todas as condições devem ser verdadeiras
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}

/**
 * PADRÕES IDENTIFICADOS:
 * - Uso de operadores de comparação (>, <, >=, <=, ===)
 * - Operadores lógicos (&&, ||)
 * - Estruturas if/else e else-if encadeadas
 * - Template strings para interpolação de variáveis
 * - Tratamento de casos especiais e validações
 */
