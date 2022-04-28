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
        <meta
          name="description"
          content="Find out if you can get a better rate on your car insurance in NV. Answer a few simple questions and get a quote for your car insurance to save money!"
        />
        <link
          href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAY8f3AGvC8QBEmswAUbPpALLb8gAyg74AadL9AIrl/wCO4v8APoq4AD2MvgBgvOkAPI3BAEiKrwAGUn8AleX/AEqu5ABmwe8Al+7/ADub0AA5m9kAgN/3AKDr/wBOtO0Ab8LyAC9okwBOmsQAW7jnAHLN+ACP4f0AIXW6ACZWggCX4vcAMpfOAJ3a+gA/kMIAdtr7AFnF/AB52P4ABleGAD2ZywBgyfYAZsfwAGjF8wCUzOwAYs//ADKJtwCI3fsAUJXIAARJeAB1zvMAV7/0AFCq2gB42P8Adtv/ABtrngAwhrgAM2OGAH3n/wB4wegANIu+AGiu1AA2iL4Ahef/AFq57AB1zfoAdc/3AGO35gBQodIAabPjACp7qgBVyP4AZb3vAC9+qgCZ5/8AXcj+AD6d0ABgzv4Aa8j1AG/L7ABLmscAbMv1AEOi1gBftN4Ad8jsAGnR/gBCpNwAQ4SqAHHO9QA1j8IAMpbOAGO76gAGVYMAOpjLAFnI/wAEWokAftT+AFzK/AA6mtEAMoOxAIDi+wAyiLcAWLLiAD+BqwBEodQAfMLkADao6QArjskAWLnlAEOe3QBszfwAVbrxAC2RyQAocqwAEmSVAEyi1wBx1/8ABVWEADaZzwB71fkAOpfJAHba/wBaptEAgNn8AGLJ+gCD3f8AaM30AGbN/QAmbKQAKGykAHPO7gCK4P8ALJLNAARIeQCH6f8AT8H+AIzv/wBJq+EATqfeAIHR9wAGWosAMIe2AGvI7wBTjsEApOz/AEuZ0AA4p+gALpHLAJDe+gAsc58AfMfsAK7y/wBssdgAYcf2ACuEtwArY4sAKYa9AG/A6gCM0vIAGXKmAClplABk0P8AbMv5ADGMvQBUufEALZDJACJxtQB4yfMAbNn/AJXi9QBfvuUAWcX6AGbD6wBMkLcASpG6AIjR8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeRJNpdpYAAAAAAAAAAABPny0jQjwbKXcAAAAAAAAAQBxqWYiFjnOgAAAAAAAAAGUsBXuuDm2AmRRyhmY9AABBMHylbDlgpJ0uIBqjNVsAAgxFJKE6q0hjBoIyL14LBENVi3Q4SptNiaeBD5w0lEkhEIQzFnUqJpKQMa9kXnFUF5iHeI8loghuHz8oRwpXAAARmlapYhgZRoxvYT55IgAAAAAAAABclQFrU40vWnAAAAAAAAAAqLCtUWhYfWdbAAAAAAAAAB0eEhUDXS9eDQAAAAAAAACXSwl+Nnp/X6YAAAAAAAAAkaoTUIMrB05MAAAAAAAAAACKUic3O6wAAMD/AACAPwAAgD8AAIABAACAAAAAgAAAAAAAAAAAAAAAAAAAAMAAAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP8DAAA="
          rel="icon"
          type="image/x-icon"
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
