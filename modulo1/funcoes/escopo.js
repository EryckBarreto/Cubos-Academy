let z = 5; // z existe fora e dentro da função porque foi declarada no arquivo

function soma(x, y) { // o que é criado dentro é possível acessar dentro, mas não fora

    return x + y + z;
} // tudo que existe aqui, existe no escopo

soma(x);