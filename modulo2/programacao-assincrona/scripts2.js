const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// const cidade = getCityFromZipcode();

// cidade.then(cidade => {
//     console.log(cidade);
// });

// cidade.catch(erro => {
//     console.log(erro.message);
// })

getCityFromZipcode("80010000").then(cidade => {
    console.log(cidade);
    getStateFromZipcode("80010000").then(uf => {
        console.log(uf);
    });
}).catch((erro) => {
    console.log(erro);
});


