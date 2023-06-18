import { Pokemon } from "../interfaces";

const getPokemonOptimizedInfo = async (nameOrId: string) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const pokeData = (await res.json()) as Pokemon;
    const { id, name, sprites } = pokeData

    return {
        id, name, sprites

    };

}

export default getPokemonOptimizedInfo;