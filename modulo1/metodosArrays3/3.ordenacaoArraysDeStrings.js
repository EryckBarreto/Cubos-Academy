const pessoas = ["João", "ana", "carlos", "beatriz"];

pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);