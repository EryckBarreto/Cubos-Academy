const extensaoDeArquivos = ["teste.bat", "teste2.pdf", "teste3.jpeg"]

const verificarExtensao = (extensaoDeArquivos) => {
const resultado = extensaoDeArquivos.some((arquivos) => {
    return arquivos.includes(".bat");
});

    if (resultado) {
        console.log("Vírus detectado");
    } else {
        console.log("Nenhum vírus encontrado");
    }

}

verificarExtensao(extensaoDeArquivos);