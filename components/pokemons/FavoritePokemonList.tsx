import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import FavoritePokemon from "./FavoritePokemon";

interface Props {
  favoritePokemons: number[];
}

const FavoritePokemonList: FC<Props> = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavoritePokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemonList;
