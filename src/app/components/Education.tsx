import { GraduationCap, Calendar, Award } from "lucide-react";
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

  const certifications = [
    {
      name: "CyberOps Associate",
      issuer: " Cisco Networking Academy",
      date: "July 2025",
    },
    {
      name: "Cisco Certified Support Technician Networking (CCST Networking) - Lifetime",
      issuer: "Certiport",
      date: "March 2025",
    },
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: " Cisco Networking Academy",
      date: "November 2024",
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: " Cisco Networking Academy",
      date: "July 2024",
    },
        {
      name: "Introduction to Networks",
      issuer: " Cisco Networking Academy",
      date: "April 2024",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: " Cisco Networking Academy",
      date: "March 2024",
    },
    {
      name: "IT Specialist - Java",
      issuer: "Certiport",
      date: "July 2023",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 bg-gradient-to-br from-red-50 via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            My academic journey and achievements
          </p>
        </div>

        {/* EDUCATION */}
        <div className="space-y-20">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-red-700"
            >
              <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl 
              flex items-center justify-center overflow-hidden
              shadow-[0_0_20px_rgba(255,0,0,0.15)]">

                <img
                  src="/images/feu.png"
                  alt="FEU Institute of Technology"
                  className="w-16 h-16 object-contain"
                />

              </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-2 text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-red-700">{edu.school}</p>
                    </div>

                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-700 font-semibold">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-red-300 text-gray-700"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-gray-700 font-semibold">
                      Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ORGANIZATION */}
        <div>
          <h3 className="text-3xl mb-12 text-center">Organization</h3>
          <div className="max-w-2xl mx-auto">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-700"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center border">
                    <img
                      src={activity.logo}
                      alt={activity.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        // shows a clear error in console if path is wrong
                        console.error("Logo failed to load:", activity.logo);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="text-2xl text-gray-900">{activity.name}</h4>
                    <p className="text-red-600 font-medium text-lg">
                      {activity.role}
                    </p>
                    <p className="text-sm text-gray-500">{activity.period}</p>
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}