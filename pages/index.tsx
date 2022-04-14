import Head from "next/head";
import Hero from "../Components/homepage/Hero";
import { useState, Fragment } from "react";
import Destaque from "../Components/homepage/Destaque";
import ExplorarLocais from "../Components/homepage/ExplorarLocais/ExplorarLocais";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState({});

  return (
    <Fragment>
      <Head>
        <title>Comércio Local Montijo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Destaque />
      {/* <ExplorarLocais /> */}

      <pre>{JSON.stringify(searchQuery, null, 2)}</pre>
    </Fragment>
  );
}
