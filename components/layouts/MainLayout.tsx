import { FC, ReactNode } from "react";

import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
    children?: ReactNode, 
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App" } </title>
            <meta name="author" content="Luciano" />
            <meta name="description" content="Information about pokemon XXXXX" />
            <meta name="keywords" content="XXXXX, pokemon, pokedex" />
        </Head>

        <NavBar />

        <main style={{ padding: '8px 20px' }} >
            { children }
        </main>

    </>
  )
}
