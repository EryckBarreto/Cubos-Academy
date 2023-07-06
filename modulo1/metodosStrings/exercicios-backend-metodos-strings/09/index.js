const nome = 'Eryck Barreto';

function geradorNickname(nome) {
    let primeiroCaractere = "@";
    let nickname = "";

    for (let letra of nome) {
        if (letra.replace(" ", "")) {
        nickname += letra;
        }
        if (nickname.length === 12) {
            break;
        }
    }
     const nickFormatado = primeiroCaractere + nickname;

    return nickFormatado.toLowerCase();
}

console.log(geradorNickname(nome));