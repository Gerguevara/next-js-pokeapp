import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import NoFavorites from "../../components/pokemons/NoFavorites";
import { localStorageHandler } from "../../utils";
import FavoritePokemonList from "../../components/pokemons/FavoritePokemonList";

const FavoritesPokemon: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localStorageHandler.pokemons);
  }, []);

  return (
    <Layout title="Favorites">
      {favoritePokemons.length > 0 ? (
        <FavoritePokemonList favoritePokemons={favoritePokemons}/>
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default FavoritesPokemon;
