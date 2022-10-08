import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';

import pokeApi from '../../api/pokeApi';
import { PokemonDetail } from '../../interfaces';
import { MainLayout } from '../../components/layouts';

interface PokemonData {
    pokemon: PokemonDetail
}

const PokemonPage: NextPage<PokemonData> = ({ pokemon }) => {

    return (
        <MainLayout title={ `Pokemons | ${ pokemon.name.replace(pokemon.name[0], pokemon.name[0].toUpperCase()) }` }>
            <Grid.Container css={{ marginTop: '20px' }} gap={2}>
                <Grid xs={6} md={4}>
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

                <Grid xs={6} md={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text transform='capitalize' h1 css={{ fontSize: '36px' }}>{ pokemon.name }</Text>
                            <Button ghost rounded color='primary'>
                                Add to favorites
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

// This function generates all the pages
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    type pokemonParams = {
        params: {
            id: string
        }
    }

    const pokemonPages: pokemonParams[] = [...Array(151)].map( (p, i) => (
        { params: { id: `${ i + 1 }`} }
    ));

    return {
        paths: pokemonPages,
        fallback: false,
    }
}

// This function gets all data for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as ({ id: string });

    const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${ id }`);    
    
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;