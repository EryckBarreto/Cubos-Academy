const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];


const programadoresMais20 = pessoas.filter(pessoa => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20;
});
    
const jornalistasMais30 = pessoas.filter(pessoa => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30;
});
    
const jornalistasProgramadores = pessoas.filter(pessoa => {
    return (pessoa.profissao === "Jornalista" || pessoa.profissao === "Programador") && pessoa.idade <= 29;
});
  
console.log(programadoresMais20);  