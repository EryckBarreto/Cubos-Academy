const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// const cidade = getCityFromZipcode();

// cidade.then(cidade => {
//     console.log(cidade);
// });

// cidade.catch(erro => {
//     console.log(erro.message);
// })

// getCityFromZipcode("80010000").then(cidade => {
//     console.log(cidade);
//     getStateFromZipcode("80010000").then(uf => {
//         console.log(uf);
//     });
// }).catch((erro) => {
//     console.log(erro);
// });

(async function() {

    const cidade = await getCityFromZipcode("80010000");
    console.log(cidade);

    const estado = await getStateFromZipcode("80010000");
    console.log(estado);

})();

//padrão normal
// async function teste() {
//     return
// };

//arrow function

const teste = async () => {
    return
};

console.log(teste());

