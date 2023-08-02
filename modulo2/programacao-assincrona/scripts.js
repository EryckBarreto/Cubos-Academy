const {getCityFromZipcode} = require("utils-playground")

// console.log("inicio");

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// };

// console.log("fim");

// console.log("inicio");

// getCityFromZipcode("80010000").then(cidade => {
//     console.log(cidade);
// });

// console.log("fim");

const cidade = getCityFromZipcode("80010000");

console.log(cidade);