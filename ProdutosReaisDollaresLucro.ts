// Função que converte o preço de um produto em dólares para reais, 
// incluindo o IOF (Imposto sobre Operações Financeiras) e calcula o preço de venda com lucro.
function converterPrecoParaReais1(
    precoEmDolar1: number,   // Preço do produto em dólares
    taxaDeCambio1: number,   // Taxa de câmbio (valor de 1 dólar em reais)
    iof1: number = 6.38,     // Porcentagem do IOF (valor padrão = 6,38%)
    lucro1: number = 45      // Margem de lucro (valor padrão = 45%)
): { 
    precoEmReais1: number,   // Valor convertido em reais (sem IOF)
    valorIOF1: number,       // Valor do IOF em reais
    precoComIOF1: number,    // Valor final com IOF aplicado
    precoVenda1: number      // Valor de venda com lucro aplicado
} {
    // Converte o preço do produto de dólares para reais
    const precoEmReais1 = precoEmDolar1 * taxaDeCambio1;

    // Calcula o valor do IOF sobre o preço em reais
    const valorIOF1 = precoEmReais1 * (iof1 / 100);

    // Soma o IOF ao preço em reais
    const precoComIOF1 = precoEmReais1 + valorIOF1;

    // Calcula o preço de venda aplicando a margem de lucro
    const precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    // Retorna todos os valores em um objeto
    return { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 };
}

// Lista de produtos com seus preços em dólares
const produtos1 = [
    { nome1: "Mouse", precoEmDolar1: 25 },
    { nome1: "Teclado", precoEmDolar1: 40 },
    { nome1: "Monitor", precoEmDolar1: 200 },
    { nome1: "HD Externo", precoEmDolar1: 100 },
    { nome1: "SSD", precoEmDolar1: 120 },
    { nome1: "Placa de Vídeo", precoEmDolar1: 500 },
    { nome1: "Processador", precoEmDolar1: 300 },
    { nome1: "Memória RAM", precoEmDolar1: 80 },
    { nome1: "Fonte", precoEmDolar1: 150 },
    { nome1: "Gabinete", precoEmDolar1: 70 },
];

// Taxa de câmbio atual (1 dólar = R$ 5,10)
const taxaDeCambio1 = 5.10;

// Percorre cada produto da lista e calcula os preços em reais
produtos1.forEach(produto1 => {
    // Desestrutura o retorno da função para pegar os valores calculados
    const { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 } = converterPrecoParaReais1(produto1.precoEmDolar1, taxaDeCambio1);

    // Exibe os dados do produto no console
    console.log(`Produto: ${produto1.nome1}`);
    console.log(`Preço em Dólares: $${produto1.precoEmDolar1.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais1.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF1.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF1.toFixed(2)}`);
    console.log(`Preço de venda (com 45% de lucro): R$ ${precoVenda1.toFixed(2)}\n`);
});
