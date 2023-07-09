const marcasCarro = [
    {nome: "ferrari", marca: "italiana", ano: 2023, cor: "vermelha"},
    {nome: "aston martin", marca: "francesa", ano: 2000, cor: "azul"},
    {nome: "gol", marca: "espanhola", ano: 2021, cor: "verde"},
    {nome: "fiat", marca: "portuguesa", ano: 1980, cor: "rosa"},
];

const resultado = marcasCarro.findIndex((carro) => {
    return carro.nome === "mitsubishi";
});

console.log(resultado);