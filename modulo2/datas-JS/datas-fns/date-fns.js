// const { format } = require("date-fns");

// const date = new Date(2017, 3, 12);

// console.log(format(date, "dd 'de' MMM 'de' yyyy"));

// ----------------------------------

const { add } = require("date-fns");

const date = new Date(2018, 2, 13, 12);

console.log(date);

console.log(add(date , {
    seconds: 2,
    days: 1,
    years: 10
}));

console.log(date);