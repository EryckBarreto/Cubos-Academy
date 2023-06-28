const usuarios = [
    {
        nome: "João",
        pets: [],
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
];


for (let usuario of usuarios) {

const {nome, pets} = usuario;


    if (pets.length < 1) {
        console.log(`Sou ${nome} e tenho nenhum pet.`);
    } else if (usuario.pets.length === 1) {
        console.log(`Sou ${nome} e tenho ${pets.length} pet.`);
    } else {
        console.log(`Sou ${nome} e tenho ${pets.length} pets.`);
    }
}