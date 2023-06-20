function volumeEsfera(diametro) {
    const raio = diametro / 2;
    const volume = parseFloat((4 / 3 * (raio ** 3)).toFixed(3));

    return console.log(`O volume da esfera de raio ${raio} é de ${volume} PI.`);
}

volumeEsfera(6);