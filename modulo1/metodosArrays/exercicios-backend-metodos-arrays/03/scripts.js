const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 0;

function gruposDeCarros(nomes, posicao) {
    const grupoCarros = nomes.slice(posicao, posicao + 3);
    const stringCarros = grupoCarros.join(" - ");
    console.log(stringCarros);
}

gruposDeCarros(nomes, posicao);