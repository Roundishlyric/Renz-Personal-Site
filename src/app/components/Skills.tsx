import { Code2, MonitorSmartphone, Server, Wrench } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
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

  return (
    <section id="skills" className="py-10 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-700">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-red-100">
                <div className="p-2 bg-red-700 rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-red-700 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
