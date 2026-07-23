import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Far Eastern University Institute of Technology",
      location: "Manila",
      period: "2021 - present",
      achievements: [
        "Member of the Computer Engineering Organization",
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Software Engineering",
        "Operating Systems",
        "Computer Networks",
        "Hardware Engineering",
        "Computer Architecture",
        "Digital Logic Design",
        "Electronic Circuits",
      ],
    },
  ];

  const activities = [
    {
      name: "FEU Tech Computer Engineering Organization",
      role: "Former Member of Documentation section",
      period: "2023 - 2024",
      description:
        "Participated in technical activities, seminars, and collaborative initiatives that strengthened communication, documentation, and teamwork skills.",
      logo: "/images/comp.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-8 bg-[#f4f1eb] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="section-transition-item text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-700">Academic foundation · 01</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">Education</h2>
          <div className="mb-4 h-1 w-20 bg-red-700"></div>
        </div>

        <div className="section-transition-item section-transition-delay-1 space-y-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-[2rem] border border-black/15 bg-white/65 p-8 shadow-none transition hover:-translate-y-1 hover:border-red-700"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg p-2">
                      <img
                        src="/images/feu.png"
                        alt="FEU Institute of Technology"
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl mb-2 text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-red-700">{edu.school}</p>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} />
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-sm text-gray-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Achievements
                    </p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-red-100 bg-red-50/70 px-4 py-2 text-gray-700"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-red-100 p-5">
                  <div className="space-y-4">
                    <div className="rounded-xl border border-red-200 bg-white px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500">Timeline</p>
                      <p className="mt-1 inline-flex items-center gap-2 font-semibold text-gray-900">
                        <Calendar size={15} className="text-red-700" />
                        {edu.period}
                      </p>
                    </div>
                    <div className="rounded-xl border border-red-200 bg-white px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500">Focus</p>
                      <p className="mt-2 text-sm text-gray-700">
                        Software development, and applied engineering projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="section-transition-item section-transition-delay-2">
          <h3 className="text-3xl mb-6 text-gray-900">Organization</h3>
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="rounded-[2rem] border border-black/15 bg-white/65 p-6 shadow-none transition hover:-translate-y-1 hover:border-red-700"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg p-2">
                  <img
                    src={activity.logo}
                    alt={activity.name}
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      console.error("Logo failed to load:", activity.logo);
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <h4 className="text-2xl text-gray-900">{activity.name}</h4>
                  <p className="text-red-700 font-medium text-lg">
                    {activity.role}
                  </p>
                  <p className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {activity.period}
                  </p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
