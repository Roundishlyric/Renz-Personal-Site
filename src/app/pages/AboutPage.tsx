import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hobbies } from '../components/Hobbies';
import { SectionTabs } from '../components/SectionTabs';
import { Skills } from '../components/Skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

const aboutSections = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Hobbies' },
];

export function AboutPage() {
  useScrollReveal();

  return (
    <div className="editorial-page min-h-screen">
      <Header hasSectionTabs />
      <SectionTabs items={aboutSections} label="About page sections" />
      <main>
        <About />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
