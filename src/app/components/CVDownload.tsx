import { ArrowUpRight, Download } from 'lucide-react';

export function CVDownload() {
  const handleRequestCV = () => {
    window.open('/CV_RAPANUT.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="cv-download"
      className="relative overflow-hidden bg-[#171717] py-24 text-white"
    >
      <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border-[80px] border-red-700/10" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="border-y border-white/15 py-12 sm:py-16">
          <div className="flex flex-col">
            <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Want the full picture?
              <span className="mt-1 block text-white/65">Take my CV with you.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              Review my education, internship experience, technical skills, and
              selected project work in one concise document.
            </p>

            <button
              type="button"
              onClick={handleRequestCV}
              className="mt-8 inline-flex self-start items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:-translate-y-0.5 hover:bg-red-700 hover:text-white"
            >
              <Download size={20} aria-hidden="true" />
              Download CV
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
