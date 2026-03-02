import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Gallium31 Corporation",
      period: "2025 - 2026",
      description: [
        "Assisted in the development and enhancement of web applications.",
        "Worked on UI and front-end implementations across multiple company websites.",
        "Improved site usability and responsiveness to provide a better user experience.",
        "Automated testing using Playwright to verify functionality and reduce manual testing effort.",
        "Used Git for version control, including branching, committing, pushing code, and creating pull requests for team review."
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "Git","Playwright","Wordpress","Figma"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Internship Experience
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-neutral-900 border border-red-600 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-600 rounded-lg">
                  <Briefcase className="text-white" size={22} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl mb-1 text-white">{exp.role}</h3>
                  <p className="text-lg text-red-500 mb-2">{exp.company}</p>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3 mb-6 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-black border border-red-600 text-red-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}