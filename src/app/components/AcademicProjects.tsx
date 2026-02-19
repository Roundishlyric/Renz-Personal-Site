import { ExternalLink, Github, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AcademicProjects() {
  const projects = [
    {
      title: 'Campus Event Management System',
      course: 'Software Engineering',
      type: 'Team Project',
      description: 'Full-stack web application for managing campus events with user authentication, event creation, RSVP system, and admin dashboard. Implemented using agile methodology.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      demo: '#',
      grade: 'A',
    },
    {
      title: 'AI Chatbot for Student Services',
      course: 'Artificial Intelligence',
      type: 'Individual Project',
      description: 'Developed an intelligent chatbot to answer common student queries about courses, schedules, and campus services using natural language processing.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      technologies: ['Python', 'NLP', 'TensorFlow', 'Flask'],
      github: '#',
      demo: '#',
      grade: 'A+',
    },
    {
      title: 'E-Library Management System',
      course: 'Database Systems',
      type: 'Team Project',
      description: 'Database-driven library system with book cataloging, borrowing tracking, fine calculation, and advanced search capabilities with normalized database design.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
      technologies: ['MySQL', 'PHP', 'HTML/CSS', 'JavaScript'],
      github: '#',
      demo: '#',
      grade: 'A',
    },
    {
      title: 'Data Structures Visualizer',
      course: 'Data Structures',
      type: 'Individual Project',
      description: 'Interactive web tool to visualize common data structures (trees, graphs, stacks, queues) and algorithms with step-by-step animation for learning purposes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      technologies: ['JavaScript', 'D3.js', 'HTML/CSS', 'Algorithms'],
      github: '#',
      demo: '#',
      grade: 'A',
    },
    {
      title: 'Weather Forecast Mobile App',
      course: 'Mobile App Development',
      type: 'Team Project',
      description: 'Cross-platform mobile application providing real-time weather updates, 7-day forecasts, and location-based alerts with clean UI/UX design.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80',
      technologies: ['React Native', 'Weather API', 'Redux', 'Firebase'],
      github: '#',
      demo: '#',
      grade: 'A',
    },
    {
      title: 'Network Traffic Analyzer',
      course: 'Computer Networks',
      type: 'Team Project',
      description: 'Tool for capturing and analyzing network packets, identifying protocols, and generating traffic reports with visualization of network statistics.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      technologies: ['Python', 'Wireshark', 'Socket Programming', 'Matplotlib'],
      github: '#',
      demo: null,
      grade: 'A-',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Academic Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Projects completed during my studies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all group flex flex-col border-2 border-transparent hover:border-blue-200">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge className="bg-blue-600">{project.type}</Badge>
                  {project.grade && (
                    <Badge className="bg-green-600">Grade: {project.grade}</Badge>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-sm text-blue-600">{project.course}</span>
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Internship Section */}
        <div className="mt-20">
          <h3 className="text-3xl mb-8 text-center">Internship Experience</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <Users className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl mb-2 text-gray-900">Software Development Intern</h4>
                      <p className="text-xl text-blue-600 mb-1">Tech Company Name</p>
                      <p className="text-gray-600">City, State</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-600 mb-2">Current</Badge>
                      <p className="text-gray-500">Summer 2024 - Present</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Developing and maintaining web applications using React and Node.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Collaborating with senior developers on code reviews and best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Participating in agile sprint planning and daily stand-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Contributing to bug fixes and feature implementations for production systems</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Git', 'Agile'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}