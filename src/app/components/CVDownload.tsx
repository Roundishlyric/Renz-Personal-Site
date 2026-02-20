import { Download, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function CVDownload() {
  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF file
    // For now, it's a placeholder that would trigger a download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'YourName_CV.pdf';
    // link.click();
    alert('CV download would start here. Please upload your CV file to enable this feature.');
  };

  return (
    <section id="cv-download" className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-2xl overflow-hidden">
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <FileText size={40} className="text-red-600" />
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Download My CV</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my education, skills, and projects in a downloadable PDF format.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg"
              >
                <Download size={24} className="mr-3" />
                Download CV (PDF)
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
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