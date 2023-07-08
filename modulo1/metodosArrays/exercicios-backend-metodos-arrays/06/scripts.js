const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDonoPet(usuarios, nomeDoPet) {
    for (let usuario of usuarios)
        for (let pet of usuario.pets) {
            if (nomeDoPet === pet) {
                return console.log(`A pessoa tutora do ${nomeDoPet} é ${usuario.nome}.`);
            } else {
                return console.log(`Que pena ${nomeDoPet}, não encontramos a sua pessoa tutora.`);
            }
        } 
}

encontrarDonoPet(usuarios, "Blumenau");