const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "d",
            correta: "c"
        }
    ],
    corrigirProva: function () {
        {
            somaQuestaoCerta = 0;
            for (let questao of this.questoes) {
                if (questao.resposta === questao.correta) {
                    somaQuestaoCerta++;
                }
            }
            return `O aluno(a) ${this.aluno} acertou ${somaQuestaoCerta} questões e obteve nota ${somaQuestaoCerta * 2}.`;
        }
    }
};



// function corrigirProva (prova) {
//     somaQuestaoCerta = 0;
//     for (let questao of prova.questoes) {
//         if (questao.resposta === questao.correta) {
//             somaQuestaoCerta++;
//         }
//     }
//     return `O aluno(a) ${prova.aluno} acertou ${somaQuestaoCerta} questões e obteve nota ${somaQuestaoCerta * 2}.`;
// }

// console.log(`O aluno(a) ${prova.aluno} acertou ${corrigirProva(prova)} questões e obteve nota ${corrigirProva(prova) * 2}.`);

console.log(prova.corrigirProva());