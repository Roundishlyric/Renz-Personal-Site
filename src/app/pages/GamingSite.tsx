import { Gaming } from '../components/Gaming';
import { GamingHeader } from '../components/GamingHeader';
import { GamingFooter } from '../components/GamingFooter';


export function GamingSite() {
  return (
    <div className="editorial-gaming min-h-screen bg-[#171717]">
      <GamingHeader />
      <main>
        <Gaming />
      </main>
      <GamingFooter />
    </div>
  );
}

