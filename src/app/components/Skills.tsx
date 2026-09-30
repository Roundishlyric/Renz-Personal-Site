import { useState } from 'react';
import { Code2, MonitorSmartphone, Server, Wrench } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code2,
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 'Project experience' },
        { name: 'TypeScript', level: 'Project experience' },
        { name: 'Python', level: 'Working knowledge' },
        { name: 'Java', level: 'Working knowledge' },
        { name: 'HTML', level: 'Project experience' },
        { name: 'CSS', level: 'Project experience' },
      ],
    },
    {
      icon: MonitorSmartphone,
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 'Internship & projects' },
        { name: 'Vite.js', level: 'Project experience' },
        { name: 'Tailwind CSS', level: 'Project experience' },
        { name: 'UI / UX Design', level: 'Working knowledge' },
      ],
    },
    {
      icon: Server,
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Project experience' },
        { name: 'Express.js', level: 'Project experience' },
        { name: 'MongoDB', level: 'Project experience' },
        { name: 'REST APIs', level: 'Project experience' },
      ],
    },
    {
      icon: Wrench,
      category: 'Tools & Testing',
      skills: [
        { name: 'Git / GitHub', level: 'Internship & projects' },
        { name: 'Postman', level: 'Working knowledge' },
        { name: 'Playwright', level: 'Internship experience' },
        { name: 'Figma / Photoshop', level: 'Working knowledge' },
      ],
    },
  ];

  const selectedCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="editorial-ring-section editorial-ring-bottom-left scroll-mt-8 bg-[#f8f5ef] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left sm:mb-16">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">Technical skills</h2>
          <div className="h-1 w-20 bg-red-700"></div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 lg:grid-cols-4"
          role="tablist"
          aria-label="Technical skill categories"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.category}
              type="button"
              role="tab"
              id={`skill-tab-${index}`}
              aria-controls="skill-showcase"
              aria-selected={activeCategory === index}
              onClick={() => setActiveCategory(index)}
              className={`group rounded-2xl min-w-0 border-2 p-3 text-left transition-all duration-300 sm:p-6 ${
                activeCategory === index
                  ? 'border-red-700 bg-red-700 text-white shadow-xl shadow-red-900/20'
                  : 'border-red-100 bg-white text-gray-900 hover:-translate-y-1 hover:border-red-400 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                <div
                  className={`rounded-xl p-3 transition-colors ${
                    activeCategory === index
                      ? 'bg-white text-red-700'
                      : 'bg-red-100 text-red-700 group-hover:bg-red-700 group-hover:text-white'
                  }`}
                >
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="break-words text-sm font-semibold sm:text-lg">
                  {category.category}
                </h3>
              </div>
            </button>
          ))}
        </div>

        <Card
          id="skill-showcase"
          role="tabpanel"
          aria-labelledby={`skill-tab-${activeCategory}`}
          className="mt-6 overflow-hidden border-2 border-red-100 bg-white p-4 shadow-lg sm:p-8"
        >
          <div className="mb-6 flex flex-col items-start gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-4 border-b-2 border-red-100 pb-5">
            <div className="rounded-xl bg-red-700 p-3 text-white">
              <selectedCategory.icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
                Skills showcase
              </p>
              <h3 className="text-2xl text-gray-900">{selectedCategory.category}</h3>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {selectedCategory.skills.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <p className="mt-1 text-sm font-medium text-red-700">{skill.level}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
