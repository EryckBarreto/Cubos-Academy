function verificarMaioridade(idade) {
    if (idade >= 18) {
        return true;
        console.log("Essa linha nunca será executada.");
    } else {
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(20);
console.log(valorRetornadoPelaFuncao);