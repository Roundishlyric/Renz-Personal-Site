import { Cert } from '../components/cert';
import { Education } from '../components/Education';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SectionTabs } from '../components/SectionTabs';
import { useScrollReveal } from '../hooks/useScrollReveal';

const credentialSections = [
  { id: 'education', label: 'Education' },
  { id: 'cert', label: 'Certifications' },
];

export function CredentialsPage() {
  useScrollReveal();

  return (
    <div className="editorial-page min-h-screen">
      <Header hasSectionTabs />
      <SectionTabs items={credentialSections} label="Credentials page sections" />
      <main>
        <Education />
        <Cert />
      </main>
      <Footer />
    </div>
  );
}
