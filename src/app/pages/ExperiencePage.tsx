import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ExperiencePage() {
  useScrollReveal();
  usePageMetadata('Experience', 'Explore Renz Rapanut’s full-stack development internship experience, responsibilities, tools, and completion documents.');

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main id="main-content" className="[&>section:first-child]:pt-28">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
