const alunos = require("../dados/alunos");

const listarTodosAlunos = (requisicao, resposta) => {
    resposta.status(200).json(alunos);
};

const obterAluno = (requisicao, resposta) => {
    const {id} = requisicao.params;

    if (!isNaN(Number(id)) === false || Number(id) <= 0) {
        return resposta.status(400).json({mensagem: "O número não é válido."})
    };

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return resposta.status(404).json({mensagem: "Aluno não encontrado."});
    };

    return resposta.status(200).send(aluno);


};

module.exports = {
    listarTodosAlunos,
    obterAluno
};