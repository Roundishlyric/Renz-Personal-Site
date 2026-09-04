import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { usePageMetadata } from "../hooks/usePageMetadata";

export function NotFoundPage() {
  usePageMetadata("Page not found", "The requested page could not be found.");

  return (
    <div className="min-h-screen bg-[#f4f1eb]">
      <Header />
      <main id="main-content" className="grid min-h-[75vh] place-items-center px-4 pb-20 pt-28 text-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-700">Error 404</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-[#171717] sm:text-7xl">Page not found</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-black/60">
            The page may have moved or the address may be incorrect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800">
              <Home size={18} aria-hidden="true" /> Home
            </Link>
            <button type="button" onClick={() => window.history.back()} className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3 font-semibold text-black hover:border-black">
              <ArrowLeft size={18} aria-hidden="true" /> Go back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
