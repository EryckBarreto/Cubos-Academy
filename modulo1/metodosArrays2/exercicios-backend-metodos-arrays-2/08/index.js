const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const frutasLowerCase = frutas.join().toLowerCase().split(",");
const stringFrutasFormatas = frutasLowerCase.map((fruta) => {
    const primeiraLetra = fruta.slice(0, 1).toUpperCase();
    const resto = fruta.slice(1);
    const frutaFormatada = primeiraLetra + resto;
    return frutaFormatada;
})
const arrayFrutasFormatadas = [];

for (let i = 0; i < stringFrutasFormatas.length; i++) {
    arrayFrutasFormatadas.push(`${i} - ${stringFrutasFormatas[i]}`)
}

console.log(arrayFrutasFormatadas);