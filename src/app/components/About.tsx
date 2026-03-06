import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating clear, focused interfaces that feel polished and usable',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'Continuously improving through projects, technical study, and hands-on problem solving',
    },
  ];

  return (
    <section id="about" className="scroll-mt-8 py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-white">About Me</h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-red-700"></div>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
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
            <p className="text-lg leading-relaxed text-white">
              Hello! I'm a Computer Engineering student and a Full Stack Developer Intern, with strong interest in software development, cybersecurity, and hardware-software integration.
            </p>

            <p className="text-lg leading-relaxed text-white">
              In my internship, I focus on full-stack web development using modern tools like React, Node.js, and databases while improving testing, collaboration, and delivery workflows.
            </p>

            <p className="text-lg leading-relaxed text-white">
              Beyond coding, I continue to build practical projects, explore technical systems, and grow through hands-on experience and continuous learning.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">Intern</div>
                <div className="text-gray-300">Current Role</div>
              </div>
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">Growth</div>
                <div className="text-gray-300">Learning Focus</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border border-red-900 bg-neutral-900 p-4 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl bg-red-700 p-2 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
