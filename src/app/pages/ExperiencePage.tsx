import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ExperiencePage() {
  useScrollReveal();

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main className="[&>section:first-child]:pt-28">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
