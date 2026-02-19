import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      location: 'City, State',
      period: '2022 - 2026 (Expected)',
      gpa: '3.8/4.0',
      status: 'In Progress',
      achievements: [
        'Dean\'s List - Fall 2023, Spring 2024',
        'Presidential Scholarship Recipient',
        'Member of Computer Science Honor Society',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Artificial Intelligence',
        'Computer Networks',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'December 2024',
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'August 2024',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'June 2024',
    },
  ];

  const activities = [
    {
      title: 'Computer Science Club',
      role: 'Vice President',
      period: '2023 - Present',
      description: 'Organize coding workshops and hackathons for 100+ students',
    },
    {
      title: 'Hackathon Participant',
      role: 'Team Member',
      period: '2023 - Present',
      description: 'Participated in 5+ hackathons, won 2nd place in University Hackathon 2024',
    },
    {
      title: 'Peer Tutor',
      role: 'Programming Tutor',
      period: '2023 - 2024',
      description: 'Tutored 20+ students in Introduction to Programming and Data Structures',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Main Education */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl mb-2 text-gray-900">{edu.degree}</h3>
                      <p className="text-xl text-blue-600 mb-1">{edu.school}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-600 mb-2">{edu.status}</Badge>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-lg mt-2">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <Award size={20} className="text-blue-600" />
                      Achievements & Honors
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-900">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-200">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-md">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-2 text-gray-900">{cert.name}</h4>
                    <p className="text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-3xl mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-200 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl mb-2 text-gray-900">{activity.title}</h4>
                <p className="text-blue-600 mb-2 font-medium">{activity.role}</p>
                <p className="text-sm text-gray-500 mb-3">{activity.period}</p>
                <p className="text-gray-700">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}