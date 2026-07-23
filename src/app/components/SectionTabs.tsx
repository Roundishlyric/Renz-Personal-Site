import { useEffect, useState } from "react";

export type SectionTab = {
  id: string;
  label: string;
};

export function SectionTabs({ items, label = "Page sections" }: { items: SectionTab[]; label?: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const marker = window.scrollY + 150;
      let current = sections[0].id;

      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id;
      });

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  const navigateToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = section.getBoundingClientRect().top + window.scrollY - 112;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
    setActiveId(id);
  };

  return (
    <>
      <div className="h-16 bg-[#171717]" aria-hidden="true" />
      <nav
        aria-label={label}
        className="sticky top-16 z-40 border-b border-black/10 bg-[#f4f1eb]/95 px-4 py-2 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(item.id);
                }}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-700 text-white shadow-sm shadow-red-950"
                    : "text-black/60 hover:bg-black/5 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
