import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hobbies } from '../components/Hobbies';
import { SectionTabs } from '../components/SectionTabs';
import { Skills } from '../components/Skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

const aboutSections = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Hobbies' },
];

export function AboutPage() {
  useScrollReveal();
  usePageMetadata('About', 'Learn about Renz Rapanut, his technical skills, engineering background, and interests.');

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header hasSectionTabs />
      <SectionTabs items={aboutSections} label="About page sections" />
      <main id="main-content">
        <About />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
