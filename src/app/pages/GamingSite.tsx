import { Gaming } from '../components/Gaming';
import { GamingHeader } from '../components/GamingHeader';
import { GamingFooter } from '../components/GamingFooter';


export function GamingSite() {
  return (
    <div className="min-h-screen bg-slate-900">
      <GamingHeader />
      <main>
        <Gaming />
      </main>
      <GamingFooter />
    </div>
  );
}

