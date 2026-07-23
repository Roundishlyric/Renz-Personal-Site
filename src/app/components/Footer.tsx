import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navLabelClass = "text-gray-200 transition-colors hover:text-red-400";

  return (
    <footer className="border-t border-white/10 bg-[#111111] py-14 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 font-bold text-white">
                RR
              </div>
              <span className="text-xl font-bold">Renz Danniel R. Rapanut</span>
            </div>
            <p className="text-gray-300">
              Computer Engineering student with strong problem-solving skills, technical knowledge, and internship experience. Passionate about technology and committed to continuous learning.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-200">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/projects" className={navLabelClass}>Projects</Link></li>
              <li><Link to="/about" className={navLabelClass}>About</Link></li>
              <li><Link to="/experience" className={navLabelClass}>Experience</Link></li>
              <li><Link to="/credentials" className={navLabelClass}>Credentials</Link></li>
              <li><Link to="/contact" className={navLabelClass}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-200">More Links</h3>
            <ul className="space-y-1">
              <li><Link to="/about#skills" className={navLabelClass}>Skills</Link></li>
              <li><Link to="/about#hobbies" className={navLabelClass}>Hobbies</Link></li>
              <li><Link to="/credentials#education" className={navLabelClass}>Education</Link></li>
              <li><Link to="/credentials#cert" className={navLabelClass}>Certifications</Link></li>
              <li><Link to="/#cv-download" className={navLabelClass}>CV Download</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-200">Connect</h3>
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
