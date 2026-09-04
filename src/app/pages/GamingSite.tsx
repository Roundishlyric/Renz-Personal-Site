import { Gaming } from '../components/Gaming';
import { GamingHeader } from '../components/GamingHeader';
import { GamingFooter } from '../components/GamingFooter';
import { usePageMetadata } from '../hooks/usePageMetadata';


export function GamingSite() {
  usePageMetadata('Gaming Portfolio', 'Explore the games, communities, and competitive experiences that are part of Renz Rapanut’s personal interests.');

  return (
    <div className="editorial-gaming min-h-screen bg-[#171717]">
      <GamingHeader />
      <main id="main-content">
        <Gaming />
      </main>
      <GamingFooter />
    </div>
  );
}

