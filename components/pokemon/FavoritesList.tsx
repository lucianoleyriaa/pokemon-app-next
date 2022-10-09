import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { FavoriteCard } from "./";

interface Porps {
    pokemons: number[],
}

export const FavoritesList: FC<Porps> = ({ pokemons }) => {

    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                pokemons.map( id => (
                    <Grid key={ id } xs={6} sm={4} md={3} xl={1}>
                        <FavoriteCard id={ id } />
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
