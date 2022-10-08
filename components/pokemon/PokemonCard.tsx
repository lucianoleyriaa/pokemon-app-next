import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';

import { Pokemons } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
    pokemon: Pokemons,
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const navigateTo = () => {
        router.push(`/pokemon/${ pokemon.id }`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={ pokemon.id }>
            <Card onClick={ navigateTo } isHoverable isPressable> 
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={ pokemon.image } width="100%" height={ 140 } />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text>{ pokemon.name }</Text>
                        <Text>{ pokemon.id }</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
