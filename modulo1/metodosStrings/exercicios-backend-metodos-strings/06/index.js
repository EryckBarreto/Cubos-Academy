const celular = 7199918888;

function formatarCelular(celular) {

    const celularStr = String(celular)

    if (celularStr.length === 11) {
        let primeiraParte = celularStr.slice(0, 2);
        let segundaParte = celularStr.slice(2, 3);
        let terceiraParte = celularStr.slice(3, 7);
        let quartaParte = celularStr.slice(7);
        console.log(`(${primeiraParte}) ${segundaParte} ${terceiraParte}-${quartaParte}`);

    } else if (celularStr.length === 10) {
        let primeiraParte = celularStr.slice(0, 2);
        let segundaParte = celularStr.slice(2, 6);
        let terceiraParte = celularStr.slice(6);
        console.log(`(${primeiraParte}) 9 ${segundaParte}-${terceiraParte}`);

    } else if (celularStr.length === 9) {
        let primeiraParte = celularStr.slice(0, 1);
        let segundaParte = celularStr.slice(1, 5);
        let terceiraParte = celularStr.slice(5);
        console.log(`(${primeiraParte}) ${segundaParte}-${terceiraParte}`);

    } else if (celularStr.length === 8) {
        let primeiraParte = celularStr.slice(0, 4);
        let segundaParte = celularStr.slice(4);
        console.log(`9 ${primeiraParte}-${segundaParte}`);
    } else {
        console.log(`Número de celular digitado é inválido.`);
    }
}

formatarCelular(celular);