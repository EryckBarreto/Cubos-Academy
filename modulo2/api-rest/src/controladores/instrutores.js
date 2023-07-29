const {instrutores} = require("../bancoDeDados");
let {identificadorInstrutor} = require("../bancoDeDados");

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

const cadastrarInstrutor = (requisicao, resposta) => {
    const {nome, email, status} = requisicao.body;

    if (!nome) {
        return resposta.status(400).json({mensagem: "O nome é obrigatório."});
    }

    if (!email) {
        return resposta.status(400).json({mensagem: "O email é obrigatório."});
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor);
    return resposta.status(201).json(instrutor);
};

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor
};