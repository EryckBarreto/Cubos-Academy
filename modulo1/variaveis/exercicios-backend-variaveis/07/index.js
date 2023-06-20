function totalPessoasInfectadasCovid(populacaoInicialInfectada, potencialDeTransmissao, tempoEmDias){
    totalCasosCovid = populacaoInicialInfectada * Math.pow(potencialDeTransmissao, tempoEmDias/7);
    return console.log(`Em uma população inicial de ${populacaoInicialInfectada}, em um período de ${tempoEmDias} dias, o total da população infectada será de ${totalCasosCovid.toLocaleString('pt-br')}.`)
}

totalPessoasInfectadasCovid(1000, 4, 7)   