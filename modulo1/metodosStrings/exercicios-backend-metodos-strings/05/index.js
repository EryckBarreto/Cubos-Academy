const numeroCartao = '1111222233334444';
const primeiraParte = numeroCartao.slice(0, 4);
const segundaParte = numeroCartao.slice(12);
const asteriscos = "********"
const numeroCaracteresOcultos = primeiraParte + asteriscos + segundaParte;

console.log(numeroCaracteresOcultos);