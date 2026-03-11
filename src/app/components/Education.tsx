import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Far Eastern University Institute of Technology",
      location: "Manila",
      period: "2021 - 2026 (Expected)",
      status: "In Progress",
      achievements: ["Member of Computer Engineering Organization"],
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
        "Participating in technical workshops, seminars, and collaborative projects focused on emerging technologies and software development practices.",
      logo: "/images/comp.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-8 py-10 bg-gradient-to-br from-red-50 via-white to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-transparent bg-white p-8 transition-shadow hover:shadow-xl hover:border-red-700"
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
                      <p className="text-xs uppercase tracking-wide text-gray-500">Status</p>
                      <Badge className="mt-2 bg-red-700 text-white">{edu.status}</Badge>
                    </div>

                    <div className="rounded-xl border border-red-200 bg-white px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500">Focus</p>
                      <p className="mt-2 text-sm text-gray-700">
                        Software engineering, systems, and practical project execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-3xl mb-6 text-gray-900">Organization</h3>
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="border-2 border-transparent bg-white p-6 transition-shadow hover:shadow-xl hover:border-red-700"
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
