import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Building maintainable web applications with a focus on clean structure, usability, and reliability',
    },
    {
      icon: Palette,
      title: 'System Thinking',
      description: 'Applying Computer Engineering fundamentals to connect software, hardware, and problem-solving in practical projects',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Continuously improving through coursework, thesis work, internships, personal projects, and hands-on technical learning',
    },
  ];

  return (
    <section id="about" className="scroll-mt-8 bg-[#f4f1eb] py-20 text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-transition-item mb-16 text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-700">Profile · 01</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#171717] md:text-6xl">About me</h2>
          <div className="mb-4 h-1 w-20 bg-red-700"></div>
        </div>

        <div className="section-transition-item section-transition-delay-1 grid items-start gap-10 md:grid-cols-2">
          <div>
            <Card className="overflow-hidden border-2 border-transparent bg-neutral-950 shadow-xl transition-all hover:border-red-300">
              <ImageWithFallback
                src="/images/fib.jpg"
                alt="Profile"
                className="h-96 w-full object-cover md:h-[420px]"
              />
            </Card>
          </div>

          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-black/70">
              I am currently a Bachelor of Science in Computer Engineering student with a strong interest in software development, embedded systems, and hardware-software integration.
            </p>

            <p className="text-lg leading-relaxed text-black/70">
              Through academic projects and internship experience, I have built a practical foundation in web development using tools such as React, Node.js, and databases, while also strengthening my understanding of system design, debugging, and collaborative development workflows.
            </p>

            <p className="text-lg leading-relaxed text-black/70">
              As I continue completing my CpE requirements, I am looking for opportunities where I can contribute, continue learning, and grow as an engineer by working on real-world systems and meaningful technical problems.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-black/15 bg-white/60 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">BS CpE</div>
                <div className="text-black/55">Student</div>
              </div>
              <div className="rounded-2xl border border-black/15 bg-white/60 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">Entry-Level</div>
                <div className="text-black/55">Open to Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-transition-item section-transition-delay-2 mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border border-black/15 bg-white/60 p-5 shadow-none">
              <div className="mb-3 inline-flex rounded-xl bg-red-700 p-2 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#171717]">{title}</h3>
              <p className="text-sm leading-relaxed text-black/55">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
