import { ArrowDown, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/renz-danniel-rapanut-692902210',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Roundishlyric',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/Roundishlyric/',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:renzdanniel63@gmail.com',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.16),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(185,28,28,0.08),transparent)] pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-red-100 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="text-center lg:text-left">
          <Badge className="mb-6 rounded-full bg-red-700 px-4 py-2 text-sm font-medium tracking-[0.18em] text-white uppercase hover:bg-red-700">
            Computer Engineering Graduate
          </Badge>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            <span className="block text-gray-900">Renz Danniel R.</span>
            <span className="block text-red-700">Rapanut</span>
          </h1>

          <div className="mb-8 h-1 w-24 bg-red-700 rounded lg:mx-0 mx-auto"></div>

          <h2 className="mb-6 max-w-3xl text-2xl text-gray-900 md:text-3xl">
            Computer Engineering graduate building practical full-stack projects with a growing focus on cybersecurity and secure systems.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-700 lg:mx-0">
            I build frontend and backend solutions with attention to structure, clarity, and implementation detail, while developing deeper skills in cybersecurity, secure development, and system design.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Badge className="rounded-full bg-red-700 px-6 py-2 text-base text-white hover:bg-red-700">
              CpE Graduate
            </Badge>
            <Badge className="rounded-full border border-red-700 px-6 py-2 text-base text-red-700 bg-white">
              Full-Stack Developer
            </Badge>
            <Badge className="rounded-full border border-red-200 bg-red-50 px-6 py-2 text-base text-red-700 hover:bg-red-50">
              Cybersecurity-Focused
            </Badge>
            <Badge className="rounded-full border border-red-200 bg-red-50 px-6 py-2 text-base text-red-700 hover:bg-red-50">
              Quezon City, Philippines
            </Badge>
          </div>

          <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              className="h-12 bg-red-700 px-8 text-white shadow-[0_18px_45px_rgba(185,28,28,0.28)] hover:bg-red-800"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 border-red-700 px-8 text-red-700 hover:bg-red-700 hover:text-white"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Button
                key={label}
                variant="outline"
                className="h-12 border-red-200 bg-white px-4 text-gray-700 hover:border-red-700 hover:bg-red-700 hover:text-white"
                onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
              >
                <Icon size={18} className="mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-red-100 via-white to-red-50 blur-2xl" />
          <div className="relative w-full rounded-[2rem] border border-red-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                Available for opportunities
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2.5 w-2.5 rounded-full bg-red-700" />
                2026
              </span>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-red-100 bg-zinc-900 text-6xl font-bold text-white shadow-[0_20px_45px_rgba(185,28,28,0.2)]">
                YN
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="text-lg font-semibold text-gray-900">Full-Stack Development, Cybersecurity, and Secure Systems</p>
              </div>
              <div className="rounded-2xl border border-red-100 p-4">
                <p className="text-sm text-gray-500">Strengths</p>
                <p className="text-lg font-semibold text-gray-900">React, Node.js, Tailwind, UI Implementation, Security Fundamentals</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-700 hover:text-white"
            >
              Explore Portfolio
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
