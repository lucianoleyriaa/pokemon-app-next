import { FC, ReactNode } from "react";

import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
    children?: ReactNode, 
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location;

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App" }</title>
            <meta name="author" content="Luciano" />
            <meta name="description" content={`Information about pokemon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`${ title } page`} />
            <meta property="og:description" content={`This page contains information about ${ title }`} />
            <meta property="og:image" content={`${ origin }img/banner.png`} />
        </Head>

        <NavBar />

        <main style={{ padding: '8px 20px' }} >
            { children }
        </main>

    </>
  )
}
