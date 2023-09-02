import Head from "next/head";
import IdentityCard from "~/components/Identity/IndentityCard";
import Navbar from "~/components/Shared/Header/Navbar";

const Identity = () => {
  return (
    <>
      <Head>
        <title>Jaothui Art-Toy App</title>
        <meta name="description" content="Jaothui Art Toy Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <IdentityCard />
    </>
  );
};

export default Identity;
