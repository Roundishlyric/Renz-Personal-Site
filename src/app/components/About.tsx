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
    <section id="about" className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-white">About Me</h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-red-700"></div>
          <p className="text-lg text-gray-300">A quick overview of my background and strengths</p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Card className="overflow-hidden border-2 border-transparent bg-neutral-950 shadow-xl transition-all hover:border-red-300">
              <ImageWithFallback
                src="/images/fib.jpg"
                alt="Profile"
                className="h-96 w-full object-cover"
              />
            </Card>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white">
              Hello! I'm a Computer Engineering graduate with strong interest in software development, cybersecurity, and hardware-software integration.
            </p>

            <p className="text-lg leading-relaxed text-white">
              I focus on full-stack web development using modern tools like React, Node.js, and databases, while continuing to build my knowledge in secure systems and practical engineering workflows.
            </p>

            <p className="text-lg leading-relaxed text-white">
              Beyond coding, I enjoy building projects, exploring technical systems, and staying current with evolving technologies that improve how software is designed and delivered.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">3+</div>
                <div className="text-gray-300">Years Coding</div>
              </div>
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">15+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border border-red-900 bg-neutral-900 p-4 shadow-sm">
                  <div className="mb-3 inline-flex rounded-xl bg-red-700 p-2 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
