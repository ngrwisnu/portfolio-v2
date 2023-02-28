import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="freelance, web designer, developer, frontend developer, ui designer, react developer, next developer"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
