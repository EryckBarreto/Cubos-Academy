function areaTotalCilindro(raio, altura) {
    const areaTotal = 2 * raio * (raio + altura);
    return console.log(`Considerando o raio de ${raio} e a altura de ${altura}, a área total do cilindro é de ${areaTotal} PI.`)
}

areaTotalCilindro(3, 1);