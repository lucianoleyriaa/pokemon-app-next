import { useState } from "react";
import { Grid, Card, Button, Container, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import pokeApi from "../../api/pokeApi";
import { MainLayout } from "../../components/layouts";
import { PokemonDetail, PokemonList, Pokemons } from "../../interfaces";
import { existInFavorites, getPokemonData, onToggleFavorite } from "../../utils";

interface pokemonsSlug {
    params: { name: string }
}

interface Props {
    pokemon: PokemonDetail,
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorite, setisInFavorite] = useState(existInFavorites(pokemon.id));

    const handleFavorite = () => {
        onToggleFavorite(pokemon.id);
        setisInFavorite(!isInFavorite);
    }

    return (
        <MainLayout title={ `Pokemons | ${ pokemon.name.replace(pokemon.name[0], pokemon.name[0].toUpperCase()) }` }>
            <Grid.Container css={{ marginTop: '20px' }} gap={2}>
                <Grid xs={12} sm={4} md={6}>
                    <Card>
                        <Card.Body>
                            <Image 
                                src={ pokemon.sprites.other?.dream_world.front_default || './no-image' } 
                                alt={ pokemon.name } 
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8} md={6}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text transform='capitalize' h1 css={{ fontSize: '36px' }}>{ pokemon.name }</Text>
                            <Button onClick={ handleFavorite } ghost={ isInFavorite ? false : true } rounded color={ isInFavorite ? 'error' : 'success' }>
                                {
                                    !isInFavorite ? 'Add to favorites' : 'Remove from favorites'
                                }
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text css={{ padding: 12 }}>Sprites:</Text>
                            <Container display='flex' direction='row' justify='space-between' gap={1}>
                                <Image 
                                    src={ pokemon.sprites.front_default }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                                <Image 
                                    src={ pokemon.sprites.back_shiny }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </MainLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonList>(`/pokemon?limit=151`);
    const pokemons: Pokemons[] = data.results;

    let pokemonSlug: pokemonsSlug[] = [];

    for (const pokemon of pokemons) {
        pokemonSlug.push({params: {name: pokemon.name}})
    }

    return {
        paths: pokemonSlug,
        fallback: 'blocking',  
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as ({ name: string });

    const pokemon = await getPokemonData(name);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    return {
        props: {
            pokemon,
        },
        revalidate: 86400 // 24 hours,
    }
}

export default PokemonByNamePage;