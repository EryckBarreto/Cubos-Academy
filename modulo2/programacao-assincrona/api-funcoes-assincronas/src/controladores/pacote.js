const {getPackageDescriptionNpm} = require("utils-playground");

const descricaoPacote = async (requisicao, resposta) => {
    const {nomePacote} = requisicao.params;
    const descricaoPacote = await getPackageDescriptionNpm(nomePacote); 

    return resposta.send(descricaoPacote);
};

module.exports = {
    descricaoPacote
};