/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheaper Car Insurance NV</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-screen m-0">
        <div className="min-h-full mb-[-40px]">
          <Navbar />
          <Hero />
          <Steps />
        </div>
        <Footer />
      </main>
    </>
  );
}
