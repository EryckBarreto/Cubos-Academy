const nomes = ["Ana", "Joana", "Carlos", "amanda", "Andressa", "antonia"];
const nomeComInicioA = [];

for (let nome of nomes) {
    if (nome.toLocaleLowerCase()[0] === "a") {
        nomeComInicioA.push(nome);
    }
}

console.log(nomeComInicioA);