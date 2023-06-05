import React from "react";
import { Layout } from "../../components/layouts";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Pokemon } from "../../interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Pokemon Detail">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200%"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button color="gradient" ghost>
                Save on Favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// nextStatic patch se utiliza con next Dynamic Routes

// lo que se construye con getStaticPaths luego pasa a getStaticProps en build time
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    //fallback nos permite admitir parametros que no han sido pre renderizados, en este caso esta dessativado
    // solo permitira parametros pre renderizados,
    fallback: false,
  };
};

// prop tomados solo en build time de getStaticPaths
// (se puede desestructurar pero por el ejemplo se dejo explicito)
// tratar de hacerlo de la forma mas eficiente posible
export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  // fetch data from api ( sin axios)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeData = (await res.json()) as Pokemon;

  return {
    props: {
      pokemon: pokeData,
    },
  };
};
export default PokemonDetail;