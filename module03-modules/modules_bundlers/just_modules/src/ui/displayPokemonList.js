import { fetchPokemon } from "../network/pokemonAPI.js";

const pokemonList = document.getElementById('pokemonList');

const createPokemonItem = (pokemon) => {
    const li = document.createElement("li")
    li.textContent = pokemon
    pokemonList.appendChild(li)
}

export const displayPokemonList = async() => {
    let pokemons = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10');
    console.log(pokemons)
    pokemons.results.forEach((pokemon) => createPokemonItem(pokemon.name));
}