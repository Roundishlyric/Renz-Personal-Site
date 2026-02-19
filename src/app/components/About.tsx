import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from './ui/card';

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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Computer Science student with a strong foundation in software development
              and a keen interest in web technologies. Currently working as a software development intern,
              I'm gaining valuable real-world experience while pursuing my degree.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My academic journey has equipped me with solid knowledge in data structures, algorithms,
              database systems, and modern web frameworks. I enjoy tackling challenging problems and
              turning ideas into functional applications.
            </p>
            <p className="text-lg text-gray-700">
              I'm actively involved in campus tech communities, participate in hackathons, and continuously
              work on personal projects to enhance my skills. Always eager to learn new technologies and
              contribute to meaningful projects.
            </p>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-gray-900">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}