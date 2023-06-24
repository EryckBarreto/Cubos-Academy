const nota = 8.7;


if (nota > 10 || nota < 0) {
    console.log("Nota inválida, verifique o valor digitado, deve ser de 0 à 10.");
} else if (nota >= 9) {
    console.log(`A nota do aluno foi de ${nota}, portanto obteve conceito A.`);
} else if (nota >= 8 && nota <= 8.9) {
    console.log(`A nota do aluno foi de ${nota}, portanto obteve conceito B.`);
} else if (nota >= 6 && nota <= 7.9) {
    console.log(`A nota do aluno foi de ${nota}, portanto obteve conceito C.`);
} else if (nota >= 4 && nota <= 5.9) {
    console.log(`A nota do aluno foi de ${nota}, portanto obteve conceito D.`);
} else {
    console.log(`A nota do aluno foi de ${nota}, portanto obteve conceito E.`);
}