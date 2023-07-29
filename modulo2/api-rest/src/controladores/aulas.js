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

module.exports = {
    cadastrarAula
}