import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-red-600/40 bg-black py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 font-bold text-white">
                YN
              </div>
              <span className="text-xl font-bold">Renz Danniel R. Rapanut</span>
            </div>
            <p className="text-gray-300">
              Computer Engineering graduate focused on full-stack development, cybersecurity, and building practical technology solutions with clean implementation.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-red-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 transition-colors hover:text-red-700">About</a></li>
              <li><a href="#education" className="text-gray-300 transition-colors hover:text-red-700">Education</a></li>
              <li><a href="#experience" className="text-gray-300 transition-colors hover:text-red-700">Experience</a></li>
              <li><a href="#skills" className="text-gray-300 transition-colors hover:text-red-700">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 transition-colors hover:text-red-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-red-700">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/renz-danniel-rapanut-692902210"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-red-700"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Roundishlyric"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-red-700"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:renzdanniel63@gmail.com"
                className="rounded-lg bg-gray-800 p-2 text-white transition-colors hover:bg-red-700"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Renz Rapanut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
