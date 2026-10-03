import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function CVSite() {
  useScrollReveal();
  usePageMetadata('Software Developer & Computer Engineer', 'Portfolio of Renz Rapanut, an entry-level software developer and Computer Engineering student building web applications and embedded systems.');

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
