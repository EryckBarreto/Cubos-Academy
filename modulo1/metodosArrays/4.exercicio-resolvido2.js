function filtra80(dados) {
    const startIndex = Math.round(dados.length * 0.1);
    const endIndex = Math.round(dados.length * 0.9);
    const fatia = dados.slice(startIndex, endIndex);
    console.log(fatia);
}

const dados = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,4,7];

filtra80(dados);