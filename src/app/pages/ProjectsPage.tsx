import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function ProjectsPage() {
  useScrollReveal();
  usePageMetadata('Projects', 'Explore selected software, embedded systems, and IoT projects by Renz Rapanut.');

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main id="main-content" className="[&>section:first-child]:pt-28">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
