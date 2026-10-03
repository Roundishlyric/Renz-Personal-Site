import { useCallback, useEffect, useState } from "react";
import { FileText, FolderGit2, Github, ImageIcon, Link2, Video, Wrench } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type ProjectMedia = {
  screenshots: { src: string; alt: string }[];
  videoSrc?: string;
  posterSrc?: string;
  captionsSrc?: string;
};

// Add files under public/projects/ and use paths such as /projects/crud/dashboard.webp.
const projectMedia: Record<string, ProjectMedia> = {
  hadoukraft: {
    screenshots: [{ src: "/projects/hadoukraft-preview.jpg", alt: "Street Fighter 6 artwork featured on Hadoukraft" }],
  },
  crud: { screenshots: [] },
  health: { screenshots: [] },
  nurture: { screenshots: [] },
};

function ProjectPreview({ media, title, showVideo }: { media: ProjectMedia; title: string; showVideo: boolean }) {
  return (
    <div className={`grid gap-4 ${showVideo ? "md:grid-cols-2" : ""}`}>
      <div className="space-y-3">
        {media.screenshots.length > 0 ? media.screenshots.map((screenshot) => (
          <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-black/10 bg-[#f4f1eb]">
            <img src={screenshot.src} alt={screenshot.alt} loading="lazy" className="aspect-video w-full object-contain" />
            <figcaption className="px-4 py-3 text-sm text-gray-600">{screenshot.alt}</figcaption>
          </figure>
        )) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-red-200 bg-red-50/50 p-6 text-center">
            <ImageIcon size={32} className="text-red-700" aria-hidden="true" />
            <p className="font-semibold text-gray-900">Project images coming soon</p>
          </div>
        )}
      </div>
      {showVideo && <div>
        {media.videoSrc ? (
          <video controls playsInline preload="none" poster={media.posterSrc} aria-label={`${title} demonstration`} className="aspect-video w-full rounded-xl bg-black">
            <source src={media.videoSrc} />
            {media.captionsSrc && <track kind="captions" src={media.captionsSrc} srcLang="en" label="English" default />}
            Your browser does not support embedded video. <a href={media.videoSrc}>Open demonstration</a>.
          </video>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-black/15 bg-[#f4f1eb] p-6 text-center">
            <Video size={32} className="text-red-700" aria-hidden="true" />
            <p className="font-semibold text-gray-900">Short demonstration coming soon</p>
          </div>
        )}
      </div>}
    </div>
  );
}

export function Projects() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlideHeight, setActiveSlideHeight] = useState<number>();
  const [selectedProject, setSelectedProject] = useState(0);

  const updateCarouselHeight = useCallback(() => {
    if (!carouselApi) return;

    const selectedIndex = carouselApi.selectedScrollSnap();
    const activeSlide = carouselApi.slideNodes()[selectedIndex];
    setSelectedProject(selectedIndex);
    setActiveSlideHeight(activeSlide?.getBoundingClientRect().height);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    updateCarouselHeight();
    carouselApi.on("select", updateCarouselHeight);
    carouselApi.on("reInit", updateCarouselHeight);

    const resizeObserver = new ResizeObserver(updateCarouselHeight);
    carouselApi.slideNodes().forEach((slide) => resizeObserver.observe(slide));

    return () => {
      carouselApi.off("select", updateCarouselHeight);
      carouselApi.off("reInit", updateCarouselHeight);
      resizeObserver.disconnect();
    };
  }, [carouselApi, updateCarouselHeight]);

  const projects = [
    {
      id: "nurture",
      title: "NURTURE 1: Automated Chicken Eggshell Fertilizer Production and Dispensing System",
      type: "Embedded Systems / IoT Project",
      summary:
        "NURTURE 1 turns recycled eggshells into fertilizer and automates dispensing for cucumber seedlings. Raspberry Pi and Arduino controllers use soil pH readings to guide dispensing, RFID to identify trays, and a mobile app to monitor the system over a local network.",
      documentLabel: "Read full thesis",
      documentNote: "PDF · approximately 35.7 MB · opens in a new tab",
      highlights: [
        "Developed a Raspberry Pi and Arduino-based embedded system for automated fertilizer production and intelligent fertilizer dispensing.",
        "Implemented real-time soil pH monitoring to determine whether fertilizer should be applied, reducing unnecessary fertilizer usage.",
        "Designed an RFID-based multi-tray identification system capable of tracking different seedling trays and storing fertilization records.",
        "Built an IoT monitoring application that displays soil pH, fertilizer status, tray information, and machine status in real time over a local network.",
        "Programmed stepper motors, servo motors, DC motors, load cell sensors, ultrasonic sensors, and limit switches for automated navigation, grinding, and fertilizer dispensing.",
        "Integrated an LCD interface for on-device monitoring and system feedback.",
      ],
      stack: [
        "Raspberry Pi",
        "Arduino Uno",
        "Embedded C / Arduino IDE",
        "Python",
        "RFID Module",
        "Soil pH Sensor",
        "Load Cell",
        "Ultrasonic Sensor",
        "Stepper Motors",
        "Servo Motors",
        "DC Motor",
        "LCD I2C Display",
        "Wi-Fi Communication",
        "Android Mobile Application",
        "IoT Monitoring",
      ],
      docHref: "/Copy%20of%20REVISION%20of%20Automated%20Chicken%20Eggshell%20Fertilizer%20Production%20and%20Dispensing%20System%20for%20Cucumis%20sativus%20L.%20(Cucumber).pdf",
    },
    {
      id: "hadoukraft",
      title: "Hadoukraft — Street Fighter 6 Combo Creator",
      type: "Gaming Web Application",
      summary:
        "A web application for creating, saving, and sharing Street Fighter 6 combos with the Hadoukraft community.",
      highlights: [
        "Create Street Fighter 6 combos in a dedicated web application.",
        "Save combos to revisit later.",
        "Share combos with the Hadoukraft community.",
      ],
      stack: ["Vercel"],
      liveHref: "https://sf-6-combo-create.vercel.app",
    },
    {
      id: "crud",
      title: "CRUD_BY_RENZ User Management System",
      type: "Full-Stack Web Application",
      summary:
        "Developed a full-stack CRUD web application for managing user records with authentication and dynamic data operations. The system uses a React frontend, Node.js/Express backend, and MongoDB database to support secure login, user registration, and record management.",
      highlights: [
        "Built a full-stack application using React for the frontend and Node.js with Express for backend API development.",
        "Implemented Create, Read, Update, and Delete (CRUD) functionality for managing user records stored in MongoDB.",
        "Developed authentication features including user login and signup with protected routes.",
        "Organized backend controllers, routes, and middleware for scalable and maintainable server architecture."
      ],
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JavaScript",
        "Git"
      ],
      repoHref: "https://github.com/Roundishlyric/CRUD_BY_RENZ",
    },
    {
      id: "health",
      title: "Health Monitoring System with Pulse Rate and Temperature Sensors",
      type: "Embedded Systems / IoT Project",
      summary:
        "Designed and implemented a portable Arduino-based health monitoring system capable of measuring pulse rate and body temperature in real time. The device displays health data on an LCD screen and automatically sends SMS alerts through a GSM module when abnormal heart rate thresholds are detected, supporting early health monitoring and notification.",
      highlights: [
        "Developed an Arduino-based system integrating pulse rate and infrared temperature sensors for real-time vital monitoring.",
        "Implemented an LCD interface to display BPM (heart rate) and body temperature readings instantly.",
        "Configured a GSM module to send SMS alerts when the heart rate exceeds a predefined threshold.",
        "Designed circuit connections and programmed microcontroller logic for continuous monitoring and automated alerts."
      ],
      stack: [
        "Arduino Uno",
        "Pulse Sensor",
        "MLX90614 Temperature Sensor",
        "GSM Module",
        "LCD I2C Display",
        "Embedded C / Arduino IDE"
      ],
      docHref: "/FinalPaper.pdf",
    },

  ];

  return (
    <section
      id="projects"
      className="editorial-ring-section editorial-ring-bottom-right scroll-mt-8 bg-[#171717] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left sm:mb-16">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">Projects</h2>
          <div className="mb-4 h-1 w-24 bg-white"></div>
        </div>

        <Carousel className="relative" opts={{ loop: true }} setApi={setCarouselApi}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <CarouselPrevious className="static size-11 shrink-0 translate-y-0 border-white bg-white text-red-700 hover:bg-red-50 hover:text-red-800" />
            <div className="flex items-center justify-center" aria-label="Choose project">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`View project ${index + 1}: ${project.title}`}
                  aria-current={selectedProject === index ? "true" : undefined}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className={`h-2 rounded-full transition-all ${selectedProject === index ? "w-8 bg-white" : "w-3 bg-red-300"}`} />
                </button>
              ))}
            </div>
            <CarouselNext className="static size-11 shrink-0 translate-y-0 border-white bg-white text-red-700 hover:bg-red-50 hover:text-red-800" />
          </div>
          <div
            className="overflow-hidden transition-[height] duration-300 ease-out"
            style={activeSlideHeight ? { height: activeSlideHeight } : undefined}
          >
            <CarouselContent className="items-start">
              {projects.map((project) => (
              <CarouselItem key={project.title} className="md:basis-full">
                <Card
                  className="overflow-hidden border-2 border-transparent bg-white p-4 sm:p-6 transition-shadow hover:shadow-xl hover:border-red-700"
                >
                  <ProjectPreview media={projectMedia[project.id]} title={project.title} showVideo={project.id === "nurture"} />
                  <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                    <div className="space-y-6">
                      <div className="mb-5 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
                        <div className="min-w-0">
                          <div className="mb-2 inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                            {project.type}
                          </div>
                          <h3 className="break-words text-xl text-gray-900 sm:text-2xl">{project.title}</h3>
                        </div>
                        <div className="rounded-lg bg-red-700 p-3 text-white">
                          <FolderGit2 size={22} />
                        </div>
                      </div>

                      {project.documentNote && (
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                          Project summary
                        </h4>
                      )}
                      <p className="text-base leading-relaxed text-gray-600">
                        {project.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.liveHref && (
                          <Button asChild className="bg-red-700 text-white hover:bg-red-800">
                            <a href={project.liveHref} target="_blank" rel="noopener noreferrer">
                              <Link2 size={16} />
                              Visit website
                            </a>
                          </Button>
                        )}
                        {project.docHref && (
                          <Button
                            asChild
                            className="bg-red-700 text-white hover:bg-red-800"
                          >
                            <a
                              href={project.docHref}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText size={16} />
                              {project.documentLabel ?? "Documentation"}
                            </a>
                          </Button>
                        )}

                        {project.repoHref && (
                          <Button
                            asChild
                            variant="outline"
                            className="border-red-200 bg-white text-red-700 hover:bg-red-50"
                          >
                            <a
                              href={project.repoHref}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                      {project.documentNote && (
                        <p className="text-sm text-gray-500">{project.documentNote}</p>
                      )}
                    </div>

                    <div className="rounded-xl border border-red-100 p-5">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">My contributions</h4>
                      <div className="mb-6 space-y-3">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3 text-gray-700">
                            <Link2 size={16} className="mt-1 shrink-0 text-red-700" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-red-100 pt-5">
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                          <Wrench size={16} />
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 8).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
