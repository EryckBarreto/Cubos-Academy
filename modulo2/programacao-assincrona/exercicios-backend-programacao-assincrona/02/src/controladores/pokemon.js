const { listarPokemons, detalharPokemon } = require("utils-playground");

const mostrarPokemon = async (requisicao, resposta) => {
    const { pagina } = requisicao.query;
    const pokemon = await listarPokemons(pagina ?? 1);
    return resposta.json(pokemon);
};

const detalhesPokemon = async (requisicao, resposta) => {
    const {idOuNome} = requisicao.params;
    const pokemon = await detalharPokemon(idOuNome);

    const propriedadesPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    };

    return resposta.json(propriedadesPokemon);
}

module.exports = {
    mostrarPokemon,
    detalhesPokemon
}