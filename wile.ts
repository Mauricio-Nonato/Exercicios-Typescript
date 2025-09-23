/**
 * COLEÇÃO DE EXERCÍCIOS COM LOOPS WHILE E DO-WHILE
 * Demonstração de estruturas de repetição para controle de fluxo
 */

/**
 * Exercício 01 – Contador simples
 * Loop while básico para contagem progressiva
 */
let i: number = 1; // Variável de controle inicializada
while (i <= 10) {  // Condição: executa enquanto i for <= 10
  console.log(i);
  i++; // INCREMENTO OBRIGATÓRIO: evita loop infinito
}

/**
 * Exercício 02 – Contagem regressiva
 * Contagem decrescente com finalização explícita
 */
let n: number = 10;
while (n >= 1) {  // Condição inversa: decrementa até 1
  console.log(n);
  n--; // Decremento para reduzir o valor
}
console.log("FIM"); // Executado após término do loop

/**
 * Exercício 03 – Soma 1..N
 * Acumulador matemático (soma de Gauss)
 */
let N: number = 100;
let soma: number = 0; // Acumulador inicia em zero
let k: number = 1;
while (k <= N) {
  soma += k; // Adiciona cada número ao acumulador
  k++;
}
console.log(`Soma de 1 até ${N} = ${soma}`); // Template string com interpolação

/**
 * Exercício 04 – Tabuada com while
 * Geração de tabuada com concatenação de strings
 */
let base: number = 7;
let mult: number = 1;
while (mult <= 10) {
  console.log(`${base} x ${mult} = ${base * mult}`); // Operação aritmética inline
  mult++;
}

/**
 * Exercício 05 – Pares até 50
 * Filtro dentro do loop usando operador módulo
 */
let x: number = 1;
while (x <= 50) {
  if (x % 2 === 0) {  // Verifica se é par (resto zero na divisão por 2)
    console.log(x);   // Imprime apenas números pares
  }
  x++; // Incremento SEMPRE executado, independente do if
}

/**
 * Exercício 06 – Fatorial
 * Cálculo fatorial com multiplicação acumulada
 */
let num: number = 5;
let fat: number = 1;  // Acumulador multiplicativo (não pode ser zero)
let c: number = num;  // Cópia para preservar o valor original
while (c > 1) {       // Para em 1 (fatorial de 0 e 1 = 1)
  fat *= c;           // Multiplica acumulador pelo valor atual
  c--;                // Decrementa para próximo fatorial
}
console.log(`${num}! = ${fat}`);

/**
 * Exercício 07 – Fibonacci com while
 * Sequência onde cada número é soma dos dois anteriores
 */
let a: number = 0;    // Primeiro termo Fibonacci
let b: number = 1;    // Segundo termo Fibonacci
let termos: number = 10;
let contador: number = 1;
while (contador <= termos) {
  console.log(a);
  let proximo = a + b;  // Calcula próximo termo
  a = b;                // Avança os valores
  b = proximo;          // Prepara próximo cálculo
  contador++;
}

/**
 * Exercício 08 – Soma de array com while
 * Iteração sobre array usando índice numérico
 */
let valores: number[] = [10, 20, 30, 40, 50];
let idx: number = 0;
let total: number = 0;
while (idx < valores.length) {  // .length fornece tamanho do array
  total += valores[idx];        // Acesso por índice
  idx++;
}
console.log(`Total = ${total}`);

/**
 * Exercício 09 – Maior valor do array
 * Algoritmo de busca de máximo com comparação
 */
let nums: number[] = [5, 12, 3, 27, 9, 27, 1];
let iMax: number = 0;
let maior: number = nums[0];  // Assume primeiro elemento como maior inicial
while (iMax < nums.length) {
  if (nums[iMax] > maior) {   // Compara elemento atual com maior conhecido
    maior = nums[iMax];       // Atualiza maior se necessário
  }
  iMax++;
}
console.log(`Maior valor = ${maior}`);

/**
 * Exercício 10 – Busca linear com while
 * Algoritmo de busca com interrupção precoce (break)
 */
let lista: string[] = ["sql", "ts", "js", "python", "go"];
let alvo: string = "python";
let pos: number = 0;
let encontrado: boolean = false;
while (pos < lista.length) {
  if (lista[pos] === alvo) {  // Comparação exata de strings
    encontrado = true;
    break;  // OTIMIZAÇÃO: interrompe loop quando encontra
  }
  pos++;
}
// Operador ternário para resultado condicional
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");

/**
 * Exercício 11 – Inverter string
 * Manipulação de strings como arrays de caracteres
 */
let texto: string = "TypeScript";
let invertido: string = "";  // String vazia para acumular resultado
let p: number = texto.length - 1;  // Índice começa no último caractere
while (p >= 0) {  // Percorre da direita para esquerda
  invertido += texto[p];  // Concatena caracteres na ordem inversa
  p--;
}
console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);

/**
 * Exercício 12 – Palíndromo
 * Verificação eficiente com dois ponteiros
 */
let palavra: string = "radar";
let esq: number = 0;                    // Ponteiro esquerdo
let dir: number = palavra.length - 1;   // Ponteiro direito
let ehPalindromo: boolean = true;       // Assume verdadeiro até prova contrária
while (esq < dir) {  // Enquanto os ponteiros não se cruzarem
  if (palavra[esq] !== palavra[dir]) {  // Caracteres diferentes
    ehPalindromo = false;
    break;  // Interrompe se já sabe que não é palíndromo
  }
  esq++;  // Move ponteiro para centro
  dir--;  // Move ponteiro para centro
}
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");

/**
 * Exercício 13 – do...while
 * Executa pelo menos uma vez, depois verifica condição
 */
let acumulador: number = 0;
let sorteado: number;
do {  // SEMPRE executa o bloco pelo menos uma vez
  // Gera número pseudoaleatório entre 1 e 10
  sorteado = Math.floor(Math.random() * 10) + 1;
  acumulador += sorteado;
  console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`);
} while (acumulador <= 50);  // Verifica condição APÓS execução
console.log("Limite atingido!");

/**
 * Exercício 14 – continue
 * Pula iterações específicas mantendo o loop
 */
let m: number = 1;
while (m <= 20) {
  if (m % 3 === 0) {  // Verifica se é múltiplo de 3
    m++;              // CRÍTICO: incrementar antes do continue
    continue;         // Pula para próxima iteração
  }
  console.log(m);
  m++;  // Incremento para números não múltiplos de 3
}

/**
 * CONCEITOS-CHAVE DEMONSTRADOS:
 * - Loop while: verifica condição ANTES de executar
 * - Loop do-while: executa PELO MENOS UMA VEZ
 * - Controle de fluxo: break (interrompe), continue (pula iteração)
 * - Acumuladores: soma, multiplicação, concatenação
 * - Iteração sobre arrays e strings
 * - Algoritmos clássicos: busca, máximo, Fibonacci, palíndromo
 */
