import type { NextPage } from "next";

import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { useEffect } from "react";
import {pokeApi} from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props{
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}: any) => {

  useEffect(() => {
    console.log(pokemons);
  })
  return (
      <Layout>
        <ul>
          <li></li>
        </ul>
      </Layout>
  );
};

export const getServerSideProps =  async (context: any) => {
 const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  return {
    props: {
      pokemons: data.results
    },
  };
};


export default Home;
