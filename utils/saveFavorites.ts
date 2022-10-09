export const onToggleFavorite = (id: number): void => {

    let favorites: number[] = getFavoritesFromStorage(); 

    if (favorites.includes(id)) {
        favorites = favorites.filter( pokemonId => pokemonId !== id );
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

}

export const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = getFavoritesFromStorage();

    return favorites.includes(id);

}

export const getFavoritesFromStorage = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}