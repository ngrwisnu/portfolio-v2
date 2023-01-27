import Head from "next/head";
import Contact from "../components/contact/Contact";
import EmptyPage from "../components/empty-page";
import Hero from "../components/hero";
import SelectedWorks from "../components/selected-works";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ngr - Web Developer</title>
        <meta
          name="description"
          content="Homepage of Ngr's Portfolio website where you can see his past projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SelectedWorks />
      <EmptyPage />
      <Contact />
    </div>
  );
}
