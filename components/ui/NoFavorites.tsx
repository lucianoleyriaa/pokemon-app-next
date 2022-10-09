import { Container, Text, Image } from "@nextui-org/react";
import { CSS } from "@nextui-org/react/types/theme";

const containerStyles: CSS = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 100px)',
    alignSelf: 'center'
}

export const NoFavorites = () => {
    return (
        <Container css={ containerStyles }>
            <Text h1>No Favorites</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
                alt="Pokemon image"
                width={ 100 }
                height={ 150 }
                css={{ opacity: 0.4 }}
            />
        </Container>
    )
}
