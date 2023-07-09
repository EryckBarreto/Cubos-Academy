const usuarios = [
    {nome: "joão", idade: 23},
    {nome: "maria", idade: 18},
    {nome: "ana", idade: 30},
    {nome: "rodrigo", idade: 17},
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === "ana";
});

console.log(resultado);