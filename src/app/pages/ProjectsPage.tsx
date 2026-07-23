import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProjectsPage() {
  useScrollReveal();

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header />
      <main className="[&>section:first-child]:pt-28">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
