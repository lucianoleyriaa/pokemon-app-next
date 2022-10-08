import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
    return (
        <>
            <h1>Hola Mundo</h1> 
            
            <Button color='gradient'>
                Hola mundo
            </Button>
        </>
    );
}

export default HomePage;
