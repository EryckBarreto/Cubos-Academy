//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 14;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

// if (idadeDoAluno >= 18 || (idadeDoAluno < 18 && possuiResponsavel)) {
//     console.log("Matrícula realizada com sucesso!");
// } else {
//     console.log("Não é possível realizar a matrícula.");
// }

const podeFazerMatricula = (idadeDoAluno >= 18 || (idadeDoAluno < 18 && possuiResponsavel)) ? "Matricula realizada com sucesso." : "Não é possível realizar a matrícula."
console.log(podeFazerMatricula);