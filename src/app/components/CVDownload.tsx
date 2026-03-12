import { Download, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function CVDownload() {
  const handleRequestCV = () => {
    window.location.href =
      'mailto:renzdanniel63@gmail.com?subject=CV%20Request&body=Hello%20Renz%2C%20I%20would%20like%20to%20request%20your%20latest%20CV.';
  };

  return (
    <section
      id="cv-download"
      className="py-20 bg-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-2 border-red-600 bg-white shadow-2xl shadow-red-900/40">
          <div className="p-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-700">
              <FileText size={40} className="text-white" />
            </div>

            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
              Request My CV
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-black">
              I am a fresh Computer Engineering graduate open to entry-level opportunities. Contact me to request my latest CV and learn more about my education, internship experience, and projects.
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={handleRequestCV}
                className="bg-red-700 px-8 py-6 text-lg text-white shadow-lg shadow-red-900/50 hover:bg-red-800"
              >
                <Download size={24} className="mr-3" />
                Request CV via Email
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-black">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-700"></div>
                <span>Updated March 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16} />
                <span>Latest CV Available on Request</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
