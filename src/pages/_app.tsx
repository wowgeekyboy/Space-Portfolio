import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import SpaceBackground from '../components/SpaceBackground';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SpaceBackground />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;