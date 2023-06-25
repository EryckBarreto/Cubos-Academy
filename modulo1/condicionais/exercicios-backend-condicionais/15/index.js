const primeiroNome = "Mario";
const sobrenome = "Sauro";
const apelido = "";

if (apelido) {
    console.log(`${apelido}`);
} else if (sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else {
    console.log(`${primeiroNome}`);
}