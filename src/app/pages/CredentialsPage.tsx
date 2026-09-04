import { Cert } from '../components/cert';
import { Education } from '../components/Education';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SectionTabs } from '../components/SectionTabs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMetadata } from '../hooks/usePageMetadata';

const credentialSections = [
  { id: 'education', label: 'Education' },
  { id: 'cert', label: 'Certifications' },
];

export function CredentialsPage() {
  useScrollReveal();
  usePageMetadata('Education & Credentials', 'Review Renz Rapanut’s Computer Engineering education, technical certifications, and verified credentials.');

  return (
    <div className="editorial-page min-h-screen bg-[#f4f1eb]">
      <Header hasSectionTabs />
      <SectionTabs items={credentialSections} label="Credentials page sections" />
      <main id="main-content">
        <Education />
        <Cert />
      </main>
      <Footer />
    </div>
  );
}
