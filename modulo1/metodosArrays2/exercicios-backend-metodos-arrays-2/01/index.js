const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const acharPosicaoLivro = livros.findIndex((livro) => {
    return livro === nomeDoLivro;
});

const posicaoLivro = `O livro ${nomeDoLivro} está na posição ${acharPosicaoLivro + 1}.`;
console.log(posicaoLivro);