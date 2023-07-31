const alunos = require("../dados/alunos");

const listarTodosAlunos = (requisicao, resposta) => {
    resposta.status(200).json(alunos);
};

module.exports = {
    listarTodosAlunos
};