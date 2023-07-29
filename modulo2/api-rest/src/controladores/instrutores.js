const {instrutores} = require("../bancoDeDados")

const listarInstrutores = (requisicao, resposta) => {
    return resposta.json(instrutores);
};

const obterInstrutor = (requisicao, resposta) => {
    const {id} = requisicao.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    })

    if (!instrutor) {
        return resposta.status(404).json({mensagem: "Instrutor não encontrado."});
    }

    return resposta.status(200).json(instrutor);
}

module.exports = {
    listarInstrutores,
    obterInstrutor
};