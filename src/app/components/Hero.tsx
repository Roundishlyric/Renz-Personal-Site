import { ArrowDown, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              YN
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Renz Danniel R. Rapanut
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Computer Engineering Student & Software Development Intern
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about building innovative solutions and exploring cutting-edge technologies. 
            Currently pursuing a Bachelor's degree in Computer Science with hands-on experience in web development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg px-6 py-2">
              CpE Student
            </Badge>
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg px-6 py-2">
              Full Stack Intern
            </Badge>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}