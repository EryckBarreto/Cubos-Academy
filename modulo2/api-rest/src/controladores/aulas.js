let {instrutores, aulas, identificadorAula} = require("../bancoDeDados");


const cadastrarAula = (requisicao, resposta) => {
    const {idInstrutor} = requisicao.params;
    const {titulo, descricao} = requisicao.body;
    
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return resposta.status(404).json({mensagem: "O instrutor não existe."})
    };

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return resposta.status(201).json(aula);

};

const listarAulas = (requisicao, resposta) => {
    return resposta.status(200).json(aulas);
};

const obterAula = (requisicao, resposta) => {
    const {id} = requisicao.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return resposta.status(404).json({mensagem: "Aula não encontrada"});
    }

    return resposta.status(200).json(aula);
};

const obterAulasInstrutor = (requisicao, resposta) => {
    const {idInstrutor} = requisicao.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return resposta.status(404).json({mensagem: "O instrutor não existe."})
    };

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    return resposta.status(200).json(aulasEncontradas);
};

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor
}