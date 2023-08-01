let bancoDeDadosAlunos = require("../dados/alunos");

const listarTodosAlunos = (requisicao, resposta) => {
    resposta.status(200).json(bancoDeDadosAlunos.alunos);
};

const obterAluno = (requisicao, resposta) => {
    const {id} = requisicao.params;

    if (!isNaN(Number(id)) === false || Number(id) <= 0) {
        return resposta.status(400).json({mensagem: "O número não é válido."})
    };

    const aluno = bancoDeDadosAlunos.alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return resposta.status(404).json({mensagem: "Aluno não encontrado."});
    };

    return resposta.status(200).send(aluno);
};

const cadastrarAluno = (requisicao, resposta) => {
    const {nome, sobrenome, idade, curso} = requisicao.body;

    if (!(nome || sobrenome || idade || curso)) {
        return resposta.status(400).json({mensagem: "Todos os campos precisam estar preenchidos."})
    };

    if (Number(idade) < 18) {
        return resposta.status(400).json({mensagem: "Aluno precisa ter 18 anos ou mais."})
    };

    if (nome === "" || sobrenome === "" || curso === "") {
        return resposta.status(400).json({mensagem: "Todos os campos precisam estar preenchidos."})
    };

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return resposta.status(400).json({mensagem: "Há campos preenchidos apenas com espaço."})
    };

    const alunos = {
        id: bancoDeDadosAlunos.idAluno++,
        nome,
        sobrenome,
        idade,
        curso
    };

    bancoDeDadosAlunos.alunos.push(alunos);
    return resposta.status(201).send();

};

const deletarAluno = (requisicao, resposta) => {
    const {id} = requisicao.params;

    if (isNaN(Number(id))) {
        return resposta.status(400).json({mensagem: "O valor preenchido não é um número válido."})
    };

    if (Number(id) <= 0) {
        return resposta.status(400).json({mensagem: "O valor informado precisa ser maior que zero."})
    };

    const aluno = bancoDeDadosAlunos.alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return resposta.status(404).json({mensagem: "Aluno não encontrado."})
    };

    bancoDeDadosAlunos.alunos = bancoDeDadosAlunos.alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });

    return resposta.status(200).send();



}

module.exports = {
    listarTodosAlunos,
    obterAluno,
    cadastrarAluno,
    deletarAluno
};