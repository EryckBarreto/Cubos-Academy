function areaPerimetroCirculo(raio) {
    const area = parseFloat((Math.PI * raio ** 2).toFixed(2));
    const perimetro = parseFloat((2 * Math.PI * raio).toFixed(2));
    const diametro = parseFloat((2 * raio).toFixed(2));

    return console.log(`Com base no raio do círculo de valor ${raio}, a área é de ${area}, o diâmetro é de ${diametro} e o perímetro é de ${perimetro}.`)
}

areaPerimetroCirculo(1);