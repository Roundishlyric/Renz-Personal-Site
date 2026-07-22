import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('scroll-reveal-visible'));
      return;
    }

    sections.forEach((section) => section.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'scroll-reveal-visible',
            entry.isIntersecting,
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
