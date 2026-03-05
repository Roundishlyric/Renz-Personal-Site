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
        "Used Git for version control, including branching, committing, pushing code, and creating pull requests for team review.",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "Git", "Playwright", "WordPress", "Figma"],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.10),transparent_55%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl">Internship Experience</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-red-700"></div>
          <p className="text-lg text-gray-300">
            Hands-on experience building interfaces, improving usability, and supporting delivery workflows
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-red-600 bg-neutral-900 p-8 transition-colors hover:border-red-500"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-lg bg-red-700 p-3">
                  <Briefcase className="text-white" size={22} />
                </div>

                <div className="flex-1">
                  <h3 className="mb-1 text-2xl text-white">{exp.role}</h3>
                  <p className="mb-2 text-lg text-red-500">{exp.company}</p>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="mb-6 space-y-3 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-red-500">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-red-600 bg-black px-3 py-1.5 text-sm text-red-400"
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
