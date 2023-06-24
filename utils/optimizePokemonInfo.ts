import { Pokemon } from "../interfaces";

const getPokemonOptimizedInfo = async (nameOrId: string) => {

   try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const pokeData = (await res.json()) as Pokemon;
    const { id, name, sprites } = pokeData

    return {
        id, name, sprites
    };
   } catch (error) {
    return null;
   }

}

export default getPokemonOptimizedInfo;