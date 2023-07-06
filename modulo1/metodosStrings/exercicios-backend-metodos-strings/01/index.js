const comentario = "Esse pandemia é muito perigoso!";

let comentarioToLowerCase = comentario.toLocaleLowerCase();

if (comentarioToLowerCase.includes("covid") || comentarioToLowerCase.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas.");
} else {
    console.log("Comentário autorizado.");
}