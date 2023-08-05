const produtos = require("../bancoDeDados/produtos");
const fs = require("fs/promises");

const listarProdutos = (req, res) => {
    res.status(200).json(produtos);
};

const registroVendas = async (req, res) => {
    const {produto_id, quantidade} = req.body;

    const produtoEscolhidoPeloCliente = produtos.find((produto) =>{
        return produto.id === Number(produto_id);
    });

    if (!produtoEscolhidoPeloCliente) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    };

    try{

    const leituraRegistroJson = await fs.readFile("./src/registroVendas.json");
    const leituraRegistroJsonConvertido = JSON.parse(leituraRegistroJson);

    const registroVendas = {
        produto: produtoEscolhidoPeloCliente,
        quantidade: quantidade
    };

    await leituraRegistroJsonConvertido.vendas.push(registroVendas);

    const registroVendasStringfy = JSON.stringify(leituraRegistroJsonConvertido);

    await fs.writeFile("./src/registroVendas.json", registroVendasStringfy);

    return res.status(201).json({mensagem: "Venda registrada com sucesso."});

    } catch (erro) {
        return res.status(500).json(`Deu erro: ${erro.message}`);
    }

}

module.exports = {
    listarProdutos,
    registroVendas
};