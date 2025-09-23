// Exemplo de código do professor Eduardo Popovici
// Aula de lógica de programação com TypeScript

// Declaração e inicialização de variável com tipo explícito
let mes: number = 4; // Variável do tipo number armazenando o valor 4 (Abril)

// ESTRUTURA SWITCH-CASE: alternativa eficiente para múltiplas condições
// Compara o valor da variável 'mes' com cada caso sequencialmente
switch (mes) {
    case 1:  // Se mes === 1
        console.log("Janeiro");
        break; // ESSENCIAL: interrompe execução, evitando "fall-through"
    
    case 2:  // Se mes === 2
        console.log("Fevereiro");
        break;
    
    case 3:
        console.log("Março");
        break;
    
    case 4:  // CASO CORRESPONDENTE: mes === 4 → executa este bloco
        console.log("Abril"); // Será exibido no console
        break; // Sai do switch após executar
    
    // Casos 5 a 11 seguem mesma lógica...
    case 5:
        console.log("Maio");
        break;
    
    case 6:
        console.log("Junho");
        break;
    
    case 7:
        console.log("Julho");
        break;
    
    case 8:
        console.log("Agosto");
        break;
    
    case 9:
        console.log("Setembro");
        break;
    
    case 10:
        console.log("Outubro");
        break;
    
    case 11:
        console.log("Novembro");
        break;
    
    case 12:
        console.log("Dezembro");
        break;
    
    default:  // EXECUTADO SE NENHUM CASE CORRESPONDER
        console.log("Mês inválido"); // Proteção para valores fora do intervalo 1-12
}

// OBSERVAÇÕES IMPORTANTES:
// - Switch usa comparação estrita (===)
// - Sem 'break' ocorre "fall-through" (executa todos casos subsequentes)
// - 'default' é opcional mas recomendado para tratamento de casos inesperados
// - Mais legível que múltiplos 'if/else' quando há muitas condições
