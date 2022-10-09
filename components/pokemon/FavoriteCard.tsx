import { FC } from "react";
import { useRouter } from "next/router";
import { Card } from "@nextui-org/react";

interface Props {
    id: number,
}

export const FavoriteCard: FC<Props> = ({ id }) => {

    const router = useRouter();

    const navigateTo = (id: number) => {
        router.push(`/pokemon/${ id }`);
    }

    return (
        <Card isHoverable isPressable onClick={ () => navigateTo(id) }>
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                alt="Pokemon image"
                width={100}
                height={150}
            />
        </Card>
    )
}
