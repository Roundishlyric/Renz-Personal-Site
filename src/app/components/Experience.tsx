import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Gallium31 Corporation",
      period: "2025 - 2026",
      logo: "https://www.gallium31.com/wp-content/uploads/2024/11/gallium-submark-original@4x.png",
      gallery: [
        {
          src: "https://dev.gallium31.com/wp-content/uploads/2025/10/facilities-coworking.webp",
          alt: "Internship work session",
        },
        {
          src: "https://dev.gallium31.com/wp-content/uploads/2025/10/facilities-music-3.webp",
          alt: "Internship project workspace",
        },
      ],
      description: [
        "Contributed to the development and enhancement of web applications in a professional team environment.",
        "Implemented UI and front-end updates across multiple company websites using modern web technologies.",
        "Improved usability, responsiveness, and visual consistency to support better user experience.",
        "Used Playwright for automated testing to help verify functionality and reduce repetitive manual checks.",
        "Worked with Git-based workflows for version control, collaboration, and code review.",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "Git", "Playwright", "WordPress", "Figma"],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.10),transparent_55%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl">Experience</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-red-700"></div>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border border-red-600 bg-neutral-900 p-8 transition-colors hover:border-red-500"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:items-start">
                <div className="flex h-full flex-col justify-center">
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
                </div>

                <div className="grid gap-4 self-start">
                  <div className="flex items-center gap-3 rounded-2xl border border-red-600/40 bg-black/80 p-4">
                    <ImageWithFallback
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-16 w-16 object-contain"
                      draggable={false}
                    />
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-red-400">Company</p>
                      <p className="text-white">{exp.company}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-2xl border border-red-600/40 bg-black">
                      <ImageWithFallback
                        src={exp.gallery[0].src}
                        alt={exp.gallery[0].alt}
                        className="h-44 w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                        draggable={false}
                      />
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-red-600/40 bg-black">
                      <ImageWithFallback
                        src={exp.gallery[1].src}
                        alt={exp.gallery[1].alt}
                        className="h-44 w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
