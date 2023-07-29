const {instrutores} = require("../bancoDeDados")

const listarInstrutores = (requisicao, resposta) => {
    return resposta.json(instrutores);
};

module.exports = {
    listarInstrutores
};