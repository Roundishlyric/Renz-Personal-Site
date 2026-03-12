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
      description: 'Continuously improving through internships, personal projects, and hands-on technical learning',
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
              I am a fresh graduate with a Bachelor of Science in Computer Engineering, with a strong interest in software development, embedded systems, and hardware-software integration.
            </p>

            <p className="text-lg leading-relaxed text-white">
              Through academic projects and internship experience, I have built a practical foundation in web development using tools such as React, Node.js, and databases, while also strengthening my understanding of system design, debugging, and collaborative development workflows.
            </p>

            <p className="text-lg leading-relaxed text-white">
              As I begin my professional career, I am looking for opportunities where I can contribute, continue learning, and grow as an engineer by working on real-world systems and meaningful technical problems.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">BS CpE</div>
                <div className="text-gray-300">Fresh Graduate</div>
              </div>
              <div className="rounded-2xl border border-red-900 bg-neutral-900 p-4 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-red-700">Entry-Level</div>
                <div className="text-gray-300">Open to Opportunities</div>
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
