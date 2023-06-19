// function paraCelsius(grausEmFahrenheit){
//     celsius = (grausEmFahrenheit - 32) * (5 / 9)
//     return console.log(`A temperatura em graus Celsius é de aproximadamente ${Math.round(celsius)}º.`)
// }

function paraCelsius(grausEmFahrenheit){
    celsius = (grausEmFahrenheit - 32) * (5 / 9)
    return console.log(`A temperatura em graus Celsius é de ${celsius.toFixed(1)}º.`)
}

paraCelsius(73);