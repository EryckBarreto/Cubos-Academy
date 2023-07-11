const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: true,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

const entre18e65 = usuarios.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65;
});

const possuiHabilitacao = (usuarioEntre18e65) => {
    const temHabilitacao = usuarioEntre18e65.every((motorista) => {
        return motorista.habilitado === true;
    })
    if (temHabilitacao) {
        console.log("todos passaram no teste");
    } else {
        console.log("todos precisam estar habilitados");
    }
}

possuiHabilitacao(entre18e65);