import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                YN
              </div>
              <span className="text-xl font-bold">Renz Danniel R. Rapanut</span>
            </div>
            <p className="text-gray-400">
              Computer Science Student & Software Development Intern passionate about creating innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-red-400 transition-colors">Education</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-red-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Connect</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Renz Rapanut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}