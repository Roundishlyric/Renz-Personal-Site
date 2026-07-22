import { useCallback, useEffect, useState } from "react";
import { FileText, FolderGit2, Github, Link2, Wrench } from "lucide-react";
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
    {
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
      title: "NURTURE 1: Automated Chicken Eggshell Fertilizer Production and Dispensing System",
      type: "Embedded Systems / IoT Project",
      summary:
        "Designed and developed an IoT-enabled automated agricultural system that converts recycled chicken eggshells into calcium-rich fertilizer and intelligently dispenses it across cucumber seedling trays based on real-time soil pH analysis. The system integrates embedded hardware, RFID-based tray identification, motorized automation, and a mobile monitoring application to support precision agriculture and sustainable farming.",
      highlights: [
        "Developed a Raspberry Pi and Arduino-based embedded system for automated fertilizer production and intelligent fertilizer dispensing.",
        "Implemented real-time soil pH monitoring to determine whether fertilizer should be applied, reducing unnecessary fertilizer usage.",
        "Designed an RFID-based multi-tray identification system capable of tracking different seedling trays and storing fertilization records.",
        "Built an IoT monitoring application that displays soil pH, fertilizer status, tray information, and machine status in real time over a local network.",
        "Programmed stepper motors, servo motors, DC motors, load cell sensors, ultrasonic sensors, and limit switches for automated navigation, grinding, and fertilizer dispensing.",
        "Integrated an LCD interface for on-device monitoring and system feedback.",
        "Achieved an overall system success rate exceeding the project's required 90% performance target through testing and validation.",
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
        "Firebase (if used)",
        "IoT Monitoring",
      ],
      docHref: "/Copy%20of%20REVISION%20of%20Automated%20Chicken%20Eggshell%20Fertilizer%20Production%20and%20Dispensing%20System%20for%20Cucumis%20sativus%20L.%20(Cucumber).pdf",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-8 bg-gradient-to-br from-red-950 via-red-900 to-neutral-950 py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-white md:text-5xl">Projects</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-white"></div>
        </div>

        <Carousel className="relative" opts={{ loop: true }} setApi={setCarouselApi}>
          <div
            className="overflow-hidden transition-[height] duration-300 ease-out"
            style={activeSlideHeight ? { height: activeSlideHeight } : undefined}
          >
            <CarouselContent className="items-start">
              {projects.map((project) => (
              <CarouselItem key={project.title} className="md:basis-full">
                <Card
                  className="overflow-hidden border-2 border-transparent bg-white p-6 transition-shadow hover:shadow-xl hover:border-red-700"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                    <div className="space-y-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                            {project.type}
                          </div>
                          <h3 className="text-2xl text-gray-900">{project.title}</h3>
                        </div>
                        <div className="rounded-lg bg-red-700 p-3 text-white">
                          <FolderGit2 size={22} />
                        </div>
                      </div>

                      <p className="text-base leading-relaxed text-gray-600">
                        {project.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
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
                              Documentation
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
                    </div>

                    <div className="rounded-xl border border-red-100 p-5">
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
                          {project.stack.map((tech) => (
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
          <CarouselPrevious className="border-white bg-white text-red-700 hover:bg-red-50 hover:text-red-800" />
          <CarouselNext className="border-white bg-white text-red-700 hover:bg-red-50 hover:text-red-800" />

          <div className="mt-5 flex items-center justify-center gap-2" aria-label="Choose project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`View project ${index + 1}: ${project.title}`}
                aria-current={selectedProject === index ? "true" : undefined}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedProject === index
                    ? "w-10 bg-white"
                    : "w-4 bg-red-300 hover:bg-red-200"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
