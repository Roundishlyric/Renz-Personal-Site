import { useState, useEffect } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link, NavLink, useLocation } from "react-router";

export function Header({ hasSectionTabs = false }: { hasSectionTabs?: boolean }) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Credentials", to: "/credentials" },
    { label: "Contact", to: "/contact" },
  ];

  const useSolidHeader = isScrolled || pathname !== "/";

  const headerBg = useSolidHeader
    ? `bg-black/90 backdrop-blur-md ${
        hasSectionTabs ? "" : "shadow-lg shadow-black/40"
      }`
    : "bg-transparent";

  const brandText = useSolidHeader ? "text-white" : "text-gray-900";
  const navText = useSolidHeader
    ? "text-gray-200 hover:text-red-400"
    : "text-gray-700 hover:text-red-700";

  const mobileBorder = useSolidHeader ? "border-white/10" : "border-gray-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={`text-xl font-bold transition-colors ${brandText} ${
              useSolidHeader ? "hover:text-red-400" : "hover:text-red-700"
            }`}
          >
            &lt;Renz Rapanut /&gt;
          </Link>

          <nav className="hidden md:flex min-w-0 items-center gap-3">
            <div
              className={`flex max-w-[min(58vw,860px)] items-center gap-1.5 overflow-x-auto whitespace-nowrap rounded-xl border px-2 py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                useSolidHeader
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-white/60 backdrop-blur-sm"
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-medium leading-none transition-colors hover:bg-white/10 ${navText} ${
                    isActive ? "bg-red-700 text-white" : ""
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link to="/gaming" viewTransition>
              <Button
                variant="outline"
                className={`flex items-center gap-2 px-3 transition-colors ${
                  useSolidHeader
                    ? "!bg-transparent !text-white border-white/30 hover:!bg-white/10 hover:!text-white"
                    : "bg-transparent text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                <Gamepad2 size={18} />
              </Button>
            </Link>
          </nav>

          <button
            className={`md:hidden transition-colors ${
              useSolidHeader ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${mobileBorder}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block w-full rounded-lg px-2 py-2 text-left transition-colors ${
                  useSolidHeader
                    ? "text-gray-200 hover:text-red-400"
                    : "text-gray-700 hover:text-red-700"
                } ${isActive ? "bg-red-700 text-white" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/gaming"
              viewTransition
              className={`flex items-center gap-2 py-2 transition-colors ${
                useSolidHeader
                  ? "text-gray-200 hover:text-red-400"
                  : "text-gray-700 hover:text-red-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Gamepad2 size={18} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
