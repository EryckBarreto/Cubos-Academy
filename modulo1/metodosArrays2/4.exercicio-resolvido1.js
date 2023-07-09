const usuarios = [
    {
        nome: "Luan",
        idade: 13
    },
    {
        nome: "Ana",
        idade: 21
    },
    {
        nome: "Anderson",
        idade: 23
    }
]

const maiorDeIdade = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });
    
    if (resultado) {
        console.log("Festa liberada!");
    } else {
        console.log("Tem menor de idade.");
    }
}

maiorDeIdade(usuarios);