import { Gamepad2, Twitch, Youtube, Twitter, MessageSquare, Instagram, Facebook } from 'lucide-react';

export function GamingFooter() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-teal-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="text-teal-500" size={32} />
            <span className="text-2xl font-bold">SenGouku</span>
          </div>

          <p className="text-gray-400 text-center mb-2">
            GG WP - Game On!
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}