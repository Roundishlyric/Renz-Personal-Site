import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    icon: Mail,
    label: 'Email',
    href: 'mailto:renzdanniel63@gmail.com',
  },
];

const focusAreas = [
  ['01', 'Full-stack development', 'React, Node.js, responsive interfaces'],
  ['02', 'Cybersecurity', 'Secure systems and security fundamentals'],
  ['03', 'Computer engineering', 'Hardware, software, and system design'],
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f1eb] pb-20 pt-28 text-[#171717]">
      <div className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-700">
            Portfolio · 2026
          </p>
          <p className="flex items-center gap-2 text-sm font-medium text-black/60">
            <MapPin size={15} />
            Quezon City, Philippines
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/15 bg-white/55 px-4 py-2 text-sm font-semibold backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
                Open to opportunities
              </div>

              <h1 className="max-w-4xl text-[clamp(4rem,9vw,8.4rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                Renz
                <span className="block text-red-700">Rapanut</span>
              </h1>

              <div className="mt-9 grid gap-6 border-l-4 border-red-700 pl-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">
                    Computer Engineer building thoughtful digital products and
                    secure, practical systems.
                  </p>
                  <p className="mt-3 max-w-xl leading-relaxed text-black/60">
                    I turn technical requirements into clean interfaces and
                    dependable solutions, with a growing focus on cybersecurity.
                  </p>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  Developer · Engineer
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/CV_RAPANUT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center gap-3 rounded-full bg-red-700 px-7 font-bold text-white shadow-[0_14px_35px_rgba(185,28,28,0.25)] transition hover:-translate-y-0.5 hover:bg-red-800"
              >
                <Download size={19} />
                Download CV
              </a>
              <Link
                to="/projects"
                viewTransition
                className="inline-flex h-13 items-center gap-3 rounded-full border border-black/20 bg-white/50 px-7 font-bold transition hover:-translate-y-0.5 hover:border-black hover:bg-white"
              >
                View selected work
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-red-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#181818] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-zinc-800">
                <ImageWithFallback
                  src="/images/prof.png"
                  alt="Renz Danniel Rapanut"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-300">
                    Current focus
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    Full-stack development &amp; secure systems
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 pb-1 pt-4 text-white">
                <p className="text-sm text-white/55">Let&apos;s build something useful.</p>
                <div className="flex gap-2">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-red-400 hover:bg-red-700 hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-black/15 md:grid-cols-3">
          {focusAreas.map(([number, title, description], index) => (
            <div
              key={number}
              className={`group py-7 md:px-7 ${
                index > 0 ? 'border-t border-black/15 md:border-l md:border-t-0' : ''
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-black text-red-700">{number}</span>
                <ArrowDownRight
                  size={20}
                  className="text-black/30 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-red-700"
                />
              </div>
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-1 text-sm text-black/55">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
