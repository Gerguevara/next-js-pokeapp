import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { useEffect } from "react";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import PokemonCard from "../components/pokemons/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }: any) => {
  useEffect(() => {
    console.log(pokemons);
  });
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: SmallPokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
