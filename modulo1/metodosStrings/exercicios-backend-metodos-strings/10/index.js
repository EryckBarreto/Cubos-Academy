const nomeArquivo = 'Foto da Familia.gif';

function validacaoDeArquivos(nomeArquivo) {

    if (nomeArquivo.includes("pdf") || nomeArquivo.includes("jpeg") || nomeArquivo.includes("gif") || nomeArquivo.includes("png")) {
        return `Arquivo válido.`;
    } else {
        return `Arquivo inválido, só são aceitos arquivos jpg, jpeg, gif ou png.`;
    }

}

console.log(validacaoDeArquivos(nomeArquivo));