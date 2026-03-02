import { useState, useEffect } from "react";
import { Gamepad2, Menu, X, Briefcase } from "lucide-react";
import { Link } from "react-router";

const navItems = [
  { label: "Overview", id: "overview" },
  { label: "Team", id: "team" },
  { label: "Main Games", id: "main-games" },
  { label: "Other Games", id: "other-games" },
  { label: "Profiles", id: "profiles" },
  { label: "Socials", id: "Social" },
];

export function GamingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with navbar offset
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 64;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        bg-slate-950 border-b border-white/10
        transition-all duration-300
        ${isScrolled ? "shadow-lg shadow-teal-500/20" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToId("overview")}
            className="flex items-center gap-2"
            aria-label="Go to overview"
          >
            <Gamepad2 className="text-teal-400" size={28} />
            <span className="text-xl font-bold text-white">SenGouku</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="px-3 py-2 text-sm text-gray-300 hover:text-teal-300 transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/"
              className="ml-2 flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white border border-gray-700 hover:border-teal-500 rounded-lg transition"
            >
              <Briefcase size={18} />
              View CV Site
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="w-full text-left px-2 py-2 text-gray-300 hover:text-teal-300 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/"
              className="flex items-center gap-2 px-2 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
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