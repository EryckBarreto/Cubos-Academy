const validarSenha = (requisicao, resposta, next) => {
    const {senha} = requisicao.query;

    if (!senha) {
        return resposta.status(401).send("Senha não informada");
    } else if (senha !== "cubos123") {
        return resposta.status(401).send("Senha incorreta");
    } else {
        next();
    };

};

module.exports = {
    validarSenha
}