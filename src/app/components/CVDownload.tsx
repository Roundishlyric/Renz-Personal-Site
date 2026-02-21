import { Download, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function CVDownload() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Renz_Rapanut_CV.pdf'; // put your CV inside /public
    link.download = 'Renz_Rapanut_CV.pdf';
    link.click();
  };

  return (
    <section
      id="cv-download"
      className="py-20 bg-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border-2 border-red-600 shadow-2xl shadow-red-900/40 overflow-hidden">
          <div className="p-12 text-center">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
              <FileText size={40} className="text-white" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl mb-4 text-black font-bold">
              Download My CV
            </h2>

            {/* Description */}
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my education, skills, and projects in a downloadable PDF format.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-red-600 text-black hover:bg-red-700 px-8 py-6 text-lg shadow-lg shadow-red-900/50"
              >
                <Download size={24} className="mr-3" />
                Download CV (PDF)
              </Button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-8 text-black">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span>Updated Feb 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16} />
                <span>PDF Format</span>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}