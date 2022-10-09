import { CSSProperties } from "react";
import { useTheme, Text, Spacer, Link } from '@nextui-org/react';
import Image from "next/image";
import NextLink from "next/link";

const navBarStyles: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'start', 
    padding: '0 20px',
};

export const NavBar = () => {

    const { theme } = useTheme();

    return (
        <div style={{ ...navBarStyles, backgroundColor: theme?.colors.gray100.value }}>

            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Application icon" width={70} height={70} />

            <NextLink href='/' passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color="white">Favorites</Text>
                </Link>
            </NextLink>
        </div>
    )
}
