import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CVDownload } from '../components/CVDownload';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CVSite() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CVDownload />
      </main>
      <Footer />
    </div>
  );
}
