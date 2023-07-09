const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificarLimiteCaracters = (palavras) => {
    const resultado = palavras.some((palavra) => {
        return palavra.length > 5;
})
    if (resultado) {
        return `existe palavra inválida`;
    } else {
        return `array validado`;
    }
}

console.log(verificarLimiteCaracters(palavras));