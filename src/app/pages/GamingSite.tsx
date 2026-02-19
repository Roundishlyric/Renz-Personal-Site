import { Gaming } from '../components/Gaming';
import { GamingHeader } from '../components/GamingHeader';
import { GamingFooter } from '../components/GamingFooter';
import { OtherGames } from "../components/OtherGames";


export function GamingSite() {
  return (
    <div className="min-h-screen bg-slate-900">
      <GamingHeader />
      <main>
        <Gaming />
        <OtherGames />
      </main>
      <GamingFooter />
    </div>
  );
}

