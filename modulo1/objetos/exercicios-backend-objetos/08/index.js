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
]

const [nome, pets] = usuarios;

for (let i = 0; i < usuarios.pets[i].length; i++) {

    
    if (usuarios[i].pets.length < 1) {
        console.log(`Sou ${nome} e tenho nenhum pet.`);
    } else if (usuarios[i].pets.length === 1) {
        console.log(`Sou ${nome} e tenho 1 pet.`);
    } else {
        console.log(`Sou ${nome} e tenho ${pets.length} pets.`);
    }
}