import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Hobbies } from '../components/Hobbies';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { CVDownload } from '../components/CVDownload';
import { Experience } from '../components/Experience';
import { Cert } from '../components/cert';
import { Projects } from '../components/Projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CVSite() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Cert />
        <Skills />
        <Experience />
        <About />
        <Education />
        <Hobbies />
        <CVDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
