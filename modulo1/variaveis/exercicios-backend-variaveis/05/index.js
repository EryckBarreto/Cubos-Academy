function distanciaDoisPontos(x1, x2, y1, y2) {
    const resultado = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return console.log(`A distância entre os dois pontos é de ${resultado}.`)
}

distanciaDoisPontos(1, 1, 1, 4);