import { useEffect, useState } from "react";

import { getFavoritesFromStorage } from "../../utils";
import { FavoritesList } from "../../components/pokemon";
import { MainLayout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";

const FavoritesPage = () => {

    const [favorites, setfavorites] = useState<number[]>([]);

    useEffect(() => {
        setfavorites(getFavoritesFromStorage());
    }, []);
    
    return (
        <MainLayout>

            {
                !favorites.length
                 ? (<NoFavorites />)
                 : (<FavoritesList pokemons={ favorites } />)
            }

            

        </MainLayout>
    )
}

export default FavoritesPage;