const temIngresso = false;
const censura = 16;
const idade = 17;

if (temIngresso === true){
    if (idade >= censura) {
    console.log("Pode assistir ao filme.")
    } else {
        console.log("Idade inapropriada, não pode assistir ao filme")
    }
} else {
    console.log("Sem ingresso disponível para o filme selecionado.")
}
