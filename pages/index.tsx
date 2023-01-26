import Head from "next/head";
import Contact from "../components/contact/Contact";
import EmptyPage from "../components/empty-page";

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
      <EmptyPage />
      <Contact />
    </div>
  );
}
