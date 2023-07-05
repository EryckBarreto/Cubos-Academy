function imprimirData (dia, mes, ano) {

    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = `${mes}`.padStart(2, '0');
    const anoFormatado = String(ano).padStart(4, '0');

    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`); 

}


imprimirData(18, 1, 2021);