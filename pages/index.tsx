import type { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import pokeApi from '../api/pokeApi';

import { PokemonList, Pokemons } from '../interfaces';

import { MainLayout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

interface Props {
    allPokemons: Pokemons[]
}

const HomePage: NextPage<Props> = ({ allPokemons }) => {

    return (
        <MainLayout title='Pokemons'>

            <Grid.Container gap={2} justify='flex-start'>
                {
                    allPokemons.map((pokemon) => (
                        <PokemonCard key={ pokemon.id } pokemon={pokemon} />
                    ))
                }
            </Grid.Container>

        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');
    const pokemons: Pokemons[] = [];

    for (const pokemon of data.results) {
        const id_arr: string[] = pokemon.url.split('https://pokeapi.co/api/v2/pokemon/')
        const id: string[] = id_arr[1].split('/');
        
        pokemons.push({
            name: pokemon.name,
            url: pokemon.url,
            id: Number(id[0]),
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id[0] }.svg`,
        })
    }

    return {
        props: {
            allPokemons: pokemons,
        }
    }
}

export default HomePage;