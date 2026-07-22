import { useState } from 'react';
import { Code2, MonitorSmartphone, Server, Wrench } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code2,
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
      ],
    },
    {
      icon: MonitorSmartphone,
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vite.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'UI / UX Design', level: 80 },
      ],
    },
    {
      icon: Server,
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      icon: Wrench,
      category: 'Tools & Testing',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Playwright', level: 75 },
        { name: 'Figma / Photoshop', level: 80 },
      ],
    },
  ];

  const selectedCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="scroll-mt-8 py-10 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
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
              className={`group rounded-2xl border-2 p-4 text-left transition-all duration-300 sm:p-6 ${
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
                <h3 className="text-base font-semibold sm:text-lg">
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
          className="mt-6 overflow-hidden border-2 border-red-100 bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="mb-8 flex items-center gap-4 border-b-2 border-red-100 pb-5">
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
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="font-semibold text-red-700">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2.5 bg-red-100 [&_[data-slot=progress-indicator]]:bg-red-700" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
