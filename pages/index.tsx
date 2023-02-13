import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SelectedWorks from "../components/selected-works";
import Technologies from "../components/technologies";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ngr - Web Developer</title>
        <meta
          name="description"
          content="Ngr Wisnu is a frontend developer who has UI/UX design and Backend knowledge to support his work. This homepage of Ngr's Portfolio website shows up of his last projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SelectedWorks />
      <Technologies />
      <Footer />
    </Fragment>
  );
}
