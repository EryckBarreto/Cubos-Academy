function somaAngulosInternosPoligonos(numeroDeLados) {
    const somaAngulos = (numeroDeLados - 2) * 180;
    const cadaAngulo = somaAngulos / numeroDeLados;
    return console.log(`A soma dos ângulos internos desse polígono é de ${somaAngulos}º graus. O valor de cada ângulo é de ${cadaAngulo}º graus.`)
}

somaAngulosInternosPoligonos(6);