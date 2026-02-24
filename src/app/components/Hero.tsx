import { ArrowDown, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-24 bg-white text-black relative overflow-hidden">

      {/* subtle red glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* PROFILE */}
        <div className="mb-10 inline-block">
          <div className="w-40 h-40 mx-auto rounded-full bg-zinc-900 border border-red-600/70 
          flex items-center justify-center text-6xl font-bold text-white
          shadow-[0_0_35px_rgba(255,0,0,0.25)]">
            YN
          </div>
        </div>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-black">Renz Danniel R.</span>
          <br />
          <span className="text-red-700">Rapanut</span>
        </h1>

        {/* underline */}
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded"></div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl text-black mb-8">
          Computer Engineering Student & Software Development Intern
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg text-black max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building innovative solutions and exploring modern technologies.
          Focused on full-stack development, system design, and clean UI experiences.
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Badge className="bg-red-600 text-white text-lg px-6 py-2 hover:bg-red-700">
            CpE Student
          </Badge>
          <Badge className="border border-red-600 text-red-500 text-lg px-6 py-2 bg-transparent">
            Full Stack Intern
          </Badge>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white shadow-[0_0_25px_rgba(255,0,0,0.35)]"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}