const produtos = require("../bancodedados/produtos");
const {getCityFromZipcode, getStateFromZipcode} = require("utils-playground");

const listarProdutos = async (requisicao, resposta) => {
    await resposta.send(produtos);
};

const obterProduto = async (requisicao, resposta) => {
    const {idProduto} = await requisicao.params;

    if (!isNaN(Number(idProduto)) === false || Number(idProduto) <= 0) {
        return resposta.status(400).json({mensagem: "O número não é válido."})
    };

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produtoEncontrado) {
        return resposta.status(404).json({mensagem: "Produto não encontrado."});
    };

    resposta.status(200).send(produtoEncontrado);
};

const calcularFrete = async (requisicao, resposta) => {

    const {idProduto, cep} = requisicao.params;
    const estado = await getStateFromZipcode(cep);

    const produtoSolicitado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

let taxaFrete = 0.12;

const taxasPorEstado = {
    BA: 0.10,
    SE: 0.10,
    AL: 0.10,
    PE: 0.10,
    PB: 0.10,
    SP: 0.15,
    RJ: 0.15,
};

if (estado in taxasPorEstado) {
  taxaFrete = taxasPorEstado[estado];
}

    const valorDoFrete = produtoSolicitado.valor * taxaFrete;

    const produtoComFreteCalculado = {
        produto: {
            id: produtoSolicitado.id,
            nome: produtoSolicitado.nome,
            valor: produtoSolicitado.valor
        },
        estado,
        frete: valorDoFrete
    };

    resposta.send(produtoComFreteCalculado);

};

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFrete
};