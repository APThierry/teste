import Head from 'next/head';
import '../styles/globals.css'; // se não tiver Tailwind/CSS global, pode remover

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
