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
      description: 'Creating beautiful, intuitive interfaces that users love to interact with',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver exceptional user experiences',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="overflow-hidden border-2 border-transparent hover:border-red-300 transition-all shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Profile"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm a passionate Computer Science student with a keen interest in software development 
              and problem-solving. Currently pursuing my degree while gaining practical experience as a 
              Software Development Intern.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in full-stack web development, with expertise in modern frameworks like React, 
              Node.js, and databases. I'm always eager to learn new technologies and apply them to real-world projects.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, 
              and staying updated with the latest trends in technology.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">3+</div>
                <div className="text-gray-700">Years Coding</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-700">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}