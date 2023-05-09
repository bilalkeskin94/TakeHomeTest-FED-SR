import Head from 'next/head';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gmail Clone</title>
        <meta name="description" content="Gmail Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Main />
      </div>
    </>
  );
}
