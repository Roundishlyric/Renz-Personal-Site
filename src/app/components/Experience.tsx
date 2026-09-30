import { useState } from "react";
import { Briefcase, Calendar, ExternalLink, FileText, ImageIcon } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type CompletionDialogProps = {
  title: string;
  file: string;
  logo: string;
  company: string;
};

// Add these files to public/experience/ when your photos are ready.
const experiencePhotos = [
  { src: "/experience/internship-1.jpg", alt: "Internship photo 1" },
  { src: "/experience/internship-2.jpg", alt: "Internship photo 2" },
  { src: "/experience/internship-3.jpg", alt: "Internship photo 3" },
];

function ExperiencePhoto({ src, alt }: { src: string; alt: string }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-black/30">
      {unavailable ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
          <ImageIcon size={28} className="text-red-400" aria-hidden="true" />
          <p className="text-sm text-gray-400">Photo coming soon</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setUnavailable(true)}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      )}
    </div>
  );
}

function CompletionDialog({ title, file, logo, company }: CompletionDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog onOpenChange={(open) => open && setIsLoading(true)}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-red-600 bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-red-500 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202020]"
        >
          <FileText size={16} aria-hidden="true" />
          View {title}
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92dvh] max-w-[min(96vw,72rem)] gap-4 overflow-y-auto border-white/15 bg-[#171717] p-4 text-white sm:p-6">
        <DialogHeader className="pr-10">
          <DialogTitle className="text-xl text-white">{title}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center justify-between gap-2 text-gray-400">
            <span>Internship completion document</span>
            <a
              href={file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-red-400 transition hover:text-red-300"
            >
              Open full view
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-[60dvh] w-full sm:h-auto overflow-hidden rounded-xl border border-white/10 bg-[#262626] sm:aspect-video">
          {isLoading && (
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#111] text-gray-300"
              role="status"
              aria-live="polite"
            >
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-white/10 border-t-red-500" />
                <ImageWithFallback
                  src={logo}
                  alt=""
                  className="h-16 w-16 animate-pulse object-contain"
                  draggable={false}
                />
              </div>
              <p className="text-sm font-medium">Loading {company} document...</p>
            </div>
          )}

          <iframe
            src={`${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${title} internship document`}
            onLoad={() => setIsLoading(false)}
            className="absolute inset-0 h-full w-full bg-white"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
      completions: [
        { title: "Completion 1", file: "/Completion%201.pdf" },
        { title: "Completion 2", file: "/Completion%202.pdf" },
      ],
    },
  ];

  return (
    <section id="experience" className="editorial-ring-section editorial-ring-top-left bg-[#171717] py-12 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left sm:mb-16">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">Experience</h2>
          <div className="mb-4 h-1 w-24 bg-white"></div>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="rounded-[2rem] border border-white/15 bg-[#202020] p-5 sm:p-8 transition-colors hover:border-red-500"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:items-start">
                <div className="flex h-full flex-col justify-center">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="rounded-lg bg-red-700 p-3">
                      <Briefcase className="text-white" size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-xl sm:text-2xl text-white">{exp.role}</h3>
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

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Completion documents
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.completions.map((completion) => (
                        <CompletionDialog
                          key={completion.file}
                          {...completion}
                          logo={exp.logo}
                          company={exp.company}
                        />
                      ))}
                    </div>
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
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Internship photos
                </h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {experiencePhotos.map((photo) => (
                    <ExperiencePhoto key={photo.src} {...photo} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
