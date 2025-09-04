import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Giresse Kimona | Développeur IA & Web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Contact />
    </Layout>
  );
}
