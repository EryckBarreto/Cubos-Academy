const palavras = ["arroz", "feijão", "carne", "", "macarrão"];

// function validarListaDeCompras(listaDeCompras) {
//   const bebidasProibidas = ["cerveja", "vodka"];
  
//   const encontrouBebidaProibida = listaDeCompras.some((itemDaLista) =>
//     bebidasProibidas.includes(itemDaLista)
//   );

//   if (encontrouBebidaProibida) {
//     return "Revise sua lista, João. Possui bebida com venda proibida!";
//   } else {
//     return "Tudo certo, vamos às compras!";
//   }
// }

// console.log(validarListaDeCompras(palavras));

const temBebidaAlcoolica = palavras.some((item) => {
    return item === "cerveja" || item === "vodka";
});

if (temBebidaAlcoolica) {
    console.log("Revise sua lista, João. Possui bebida com venda proibida!");
} else {
    console.log("Tudo certo, vamos às compras!");
}


