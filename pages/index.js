/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Head from "next/head";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheaper Car Insurance NV</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Find out if you can get a better rate on your car insurance in NV. Answer a few simple questions and get a quote for your car insurance to save money!"
        />
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
