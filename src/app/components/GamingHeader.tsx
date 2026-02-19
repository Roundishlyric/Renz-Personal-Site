import { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

export function GamingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-teal-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-teal-500" size={28} />
            <span className="text-xl font-bold text-white">
              SenGouku
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-700 hover:border-teal-500 rounded-lg"
            >
              <Briefcase size={18} />
              View CV Site
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <Link
              to="/"
              className="flex items-center gap-2 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <Briefcase size={18} />
              View CV Site
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}