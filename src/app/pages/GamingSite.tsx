import { Gaming } from '../components/Gaming';
import { GamingHeader } from '../components/GamingHeader';
import { GamingFooter } from '../components/GamingFooter';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useEffect } from 'react';


export function GamingSite() {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    window.scrollTo({ top: target ? target.getBoundingClientRect().top + window.scrollY - 64 : 0, behavior: 'instant' });
  }, []);
  usePageMetadata('Gaming Portfolio', 'Explore the games, communities, and competitive experiences that are part of Renz Rapanut’s personal interests.');

  return (
    <div className="editorial-gaming min-h-screen bg-slate-950">
      <GamingHeader />
      <main id="main-content">
        <Gaming />
      </main>
      <GamingFooter />
    </div>
  );
}

