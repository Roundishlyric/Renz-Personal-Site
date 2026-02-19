import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: [
        'Led development of a microservices architecture serving 1M+ users',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    },
    {
      role: 'Full Stack Developer',
      company: 'StartUp Solutions',
      period: '2020 - 2022',
      description: [
        'Built and maintained multiple client-facing web applications',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Developed RESTful APIs and integrated third-party services',
        'Participated in agile development processes and sprint planning',
      ],
      technologies: ['React', 'JavaScript', 'Express', 'MongoDB', 'GraphQL'],
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: [
        'Created responsive web applications for various clients',
        'Worked with design team to translate mockups into code',
        'Optimized websites for performance and SEO',
        'Maintained and updated existing client projects',
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Sass', 'Webpack'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative md:grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

                <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                  <Card className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1 text-gray-900">{exp.role}</h3>
                        <p className="text-lg text-blue-600 mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
