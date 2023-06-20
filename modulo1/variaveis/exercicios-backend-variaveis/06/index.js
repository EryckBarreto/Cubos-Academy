function velocidadeMedia(distanciaEmMetros, tempoEmSegundos) {
    const velocidadeMediaKmPorHora = distanciaEmMetros / tempoEmSegundos * 3.6
    return console.log(`Prezado usuário, sua velocidade média atual é de ${velocidadeMediaKmPorHora.toFixed(2)} km/h.`)
}

velocidadeMedia(500, 10);