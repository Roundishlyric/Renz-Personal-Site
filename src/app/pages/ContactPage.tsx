import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ContactPage() {
  useScrollReveal();

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main className="[&>section:first-child]:pt-28">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
