const nomeDePaises = ["Japão", "China", "Russia", "Peru", "Argentina"];
nomeDePaises.push("Colômbia");
console.log(nomeDePaises);

nomeDePaises.pop();
console.log(nomeDePaises);

nomeDePaises.unshift("Brasil");
console.log(nomeDePaises);

nomeDePaises.shift();
console.log(nomeDePaises);

console.log(nomeDePaises[nomeDePaises.length - 1]);
console.log(nomeDePaises[1]);
console.log(nomeDePaises[2]);