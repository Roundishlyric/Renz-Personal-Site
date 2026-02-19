import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and customizable workflows.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation tool that helps users create high-quality written content using natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['React', 'OpenAI API', 'Tailwind', 'Firebase'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with forecasts, historical data, and interactive charts. Features location-based weather updates.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      technologies: ['Vue.js', 'Weather API', 'Chart.js', 'CSS'],
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms with detailed insights and reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['React', 'D3.js', 'Express', 'Redis'],
      github: '#',
      live: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application with workout plans, progress tracking, and nutrition monitoring.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'Charts'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
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
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
