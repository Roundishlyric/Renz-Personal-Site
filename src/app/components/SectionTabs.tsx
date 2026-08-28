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
        className="relative z-40 flex h-14 items-center bg-transparent"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-full items-center gap-7 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item, index) => {
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
                  className={`group flex shrink-0 items-baseline gap-2 py-2 text-sm font-semibold transition-colors focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 ${
                    isActive
                      ? "text-red-700"
                      : "text-black/45 hover:text-black"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`text-[10px] font-black tabular-nums tracking-wider transition-colors ${
                      isActive ? "text-red-700" : "text-black/25 group-hover:text-red-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
