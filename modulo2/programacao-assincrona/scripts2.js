const { getCityFromZipcode } = require("utils-playground");

// getCityFromZipcode("80010000").then(cidade => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// });

const cidade = getCityFromZipcode();

cidade.then(cidade => {
    console.log(cidade);
});

cidade.catch(erro => {
    console.log(erro.message);
})

