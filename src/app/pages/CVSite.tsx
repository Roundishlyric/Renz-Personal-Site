import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Hobbies } from '../components/Hobbies';
import { AcademicProjects } from '../components/AcademicProjects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function CVSite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Hobbies />
        <AcademicProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}