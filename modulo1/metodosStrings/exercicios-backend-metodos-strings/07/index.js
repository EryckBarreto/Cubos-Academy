const email = "aluno@cubos.academy";

if (!email.startsWith(".") && !email.endsWith(".") && email.includes("@") && email.includes(".")) {
    console.log("Email válido");
} else {
    console.log("Email inválido.");
}
