import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function GamingFooter() {
  const currentYear = new Date().getFullYear();
  const navLabelClass = "inline-flex min-h-11 items-center text-gray-300 transition-colors hover:text-teal-300";

  return (
    <footer className="border-t border-teal-900/40 bg-slate-950 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20 border border-teal-300/30 font-bold text-teal-200">
                SG
              </div>
              <span className="text-xl font-bold">SenGouku</span>
            </div>
            <p className="text-gray-300">
              Fighting game competitor and gaming content creator, sharing tournament journeys, favorite titles, and community profiles.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-teal-200">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#overview" className={navLabelClass}>Overview</a></li>
              <li><a href="#team" className={navLabelClass}>Team</a></li>
              <li><a href="#main-games" className={navLabelClass}>Main Games</a></li>
              <li><a href="#other-games" className={navLabelClass}>Other Games</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-teal-200">More Links</h3>
            <ul className="space-y-1">
              <li><a href="#profiles" className={navLabelClass}>Profiles</a></li>
              <li><a href="#Social" className={navLabelClass}>Socials</a></li>
              <li><Link to="/" className={navLabelClass}>View CV Site</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-teal-200">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                aria-label="LinkedIn" href="https://www.linkedin.com/in/renz-danniel-rapanut-692902210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 p-2 text-white transition-colors hover:bg-teal-700"
              >
                <Linkedin size={20} />
              </a>
              <a
                aria-label="GitHub" href="https://github.com/Roundishlyric"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 p-2 text-white transition-colors hover:bg-teal-700"
              >
                <Github size={20} />
              </a>
              <a
                aria-label="Email" href="mailto:renzdanniel63@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 p-2 text-white transition-colors hover:bg-teal-700"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Renz Rapanut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
