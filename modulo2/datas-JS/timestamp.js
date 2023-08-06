const momentoFinalCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +momentoFinalCopa + 1000*60*60;
const maisUmaHoraDate = new Date(finalMaisUmaHora);


console.log(maisUmaHoraDate);