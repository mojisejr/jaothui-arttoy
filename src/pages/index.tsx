import Head from "next/head";
import Hero from "~/components/Home/Hero";
import Navbar from "~/components/Shared/Header/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaothui Art-Toy App</title>
        <meta name="description" content="Jaothui Art Toy Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
