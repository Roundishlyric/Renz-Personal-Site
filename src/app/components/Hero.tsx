import { ArrowDown, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <div className="bg-white rounded-full p-1">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-gray-900">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Computer Science Student & Software Development Intern
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Passionate about learning and building innovative solutions. 
            Currently pursuing a degree in Computer Science while gaining hands-on experience in software development.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="mr-2" size={18} />
              GitHub
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('#', '_blank')}
            >
              <Facebook className="mr-2" size={18} />
              Facebook
            </Button>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}