import pokeApi from "../api/pokeApi";
import { PokemonDetail } from "../interfaces";

export const getPokemonData = async ( nameOrId: string ) => {

    const { data } = await pokeApi.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }

}