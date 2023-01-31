import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SelectedWorks from "../components/selected-works";
import Technologies from "../components/technologies";

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
      <Technologies />
      <Footer />
    </div>
  );
}
