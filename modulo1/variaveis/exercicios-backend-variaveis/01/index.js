function imc(peso, alturaEmCentimetros) {
    if ((alturaEmCentimetros <= 30 || alturaEmCentimetros >= 270) || (isNaN(alturaEmCentimetros))){
        return console.log("Altura inválida, coloque uma altura entre 30 e 270 centímetros, sendo apenas números, sem letras ou caracteres especiais.")
    }

    if ((peso <= 2 || peso >= 900) || (isNaN(peso))){
        return console.log("Peso inválida, coloque um peso entre 2 e 900 kilos, sendo apenas números, sem letras ou caracteres especiais.")
    }
    

    alturaEmCentimetros = alturaEmCentimetros / 100

    let resultado = peso / (alturaEmCentimetros ** 2)
    return console.log(`O seu IMC é de ${resultado.toFixed(2)}.`)

    }

    imc(75, 171);

