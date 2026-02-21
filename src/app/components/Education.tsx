import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'Far Eastern University Institute of Technology',
      location: 'Manila',
      period: '2021 - 2026 (Expected)',
      status: 'In Progress',
      achievements: [
        'Member of Computer Engineering Organization',
      ],
      coursework: ['Data Structures & Algorithms', 
        'Object-Oriented Programming', 'Database Systems', 
        'Software Engineering', 'Operating Systems', 
        'Computer Networks','Hardware Engineering', 'Computer Architecture', 
        'Digital Logic Design', 'Electronic Circuits',
      ],
    },
  ];

  const activities = [
    {
      name: 'IEEE Computer Society',
      role: 'Active Member',
      period: '2023 - Present',
      description: 'Participating in technical workshops, seminars, and collaborative projects focused on emerging technologies and software development practices.',
      logo: '🖥️',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">My academic journey and achievements</p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-red-200">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                  <GraduationCap size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-2 text-gray-900">{edu.degree}</h3>
                      <p className="text-xl text-red-600 mb-2">{edu.school}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg mb-2 text-gray-700 font-semibold">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="border-red-300 text-gray-700">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {edu.achievements && (
                    <div>
                      <h4 className="text-lg mb-2 text-gray-700 font-semibold">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Organization */}
        <div className="mt-16">
          <h3 className="text-3xl mb-8 text-center">Organization</h3>
          <div className="max-w-2xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-4xl">
                    {activity.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl mb-2 text-gray-900">{activity.name}</h4>
                    <p className="text-red-600 mb-2 font-medium text-lg">{activity.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{activity.period}</p>
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