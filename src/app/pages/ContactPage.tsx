import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ContactPage() {
  useScrollReveal();
  usePageMetadata('Contact', 'Contact Renz Rapanut about software development, engineering opportunities, and collaboration.');

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main id="main-content" className="[&>section:first-child]:pt-28">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
