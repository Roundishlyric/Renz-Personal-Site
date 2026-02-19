import React, { useEffect, useState } from "react";
import { Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gaming() {
  /* ===================== PLAYER DATA ===================== */

  const games = [
    {
      key: "sf6",
      tab: "SF6",
      title: "STREET FIGHTER 6",
      images: ["/images/sf6_1.jpg", "/images/sf6_2.jpg", "/images/sf6_3.jpg"],
      main: "SAGAT",
      subs: ["M. BISON", "KEN", "GUILE"],
      rank: "MASTER",
      placements: [
        { event: "Collegiate Center for Esports", place: "3rd Place" },
        { event: "Geek+Pop Fight Club Ranker Event 4", place: "13th Place" },
        {
          event: "Geek+Pop Fight Club x Philippine Game Show - Brawlfieasta",
          place: "7th Place",
        },
      ],
    },
    {
      key: "tekken",
      tab: "TEKKEN",
      title: "TEKKEN 8",
      images: ["/images/tekken_1.jpg", "/images/tekken_2.jpg"],
      main: "ADD YOUR MAIN",
      subs: ["SUB CHARACTER"],
      rank: "Tekken God Supreme",
      placements: [{ event: "Local Weekly", place: "Top 8" }],
    },
    {
      key: "ggst",
      tab: "GGST",
      title: "GUILTY GEAR STRIVE",
      images: ["/images/ggst_1.jpg", "/images/ggst_2.jpg"],
      main: "ADD YOUR MAIN",
      subs: ["SUB CHARACTER"],
      rank: "FLOOR 10",
      placements: [{ event: "Online Lobby", place: "Top Player" }],
    },
    {
      key: "gbvsr",
      tab: "GBVSR",
      title: "GRANBLUE FANTASY VERSUS RISING",
      images: ["/images/gbvsr_1.jpg", "/images/gbvsr_2.jpg"],
      main: "ADD YOUR MAIN",
      subs: ["SUB CHARACTER"],
      rank: "S+",
      placements: [{ event: "Add Event", place: "Placement" }],
    },
  ];

  const [activeKey, setActiveKey] = useState(games[0].key);
  const active = games.find((g) => g.key === activeKey)!;

  const [slide, setSlide] = useState(0);
  const canSlide = (active.images?.length ?? 0) > 1;

  // animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [prevSlide, setPrevSlide] = useState(0);

  useEffect(() => {
    // reset when switching game tabs
    setSlide(0);
    setPrevSlide(0);
    setIsAnimating(false);
    setDirection("next");
  }, [activeKey]);

  const goToSlide = (nextIndex: number, dir: "next" | "prev") => {
    if (!canSlide) return;
    if (isAnimating) return;
    if (nextIndex === slide) return;

    setDirection(dir);
    setPrevSlide(slide);
    setIsAnimating(true);
    setSlide(nextIndex);

    // match duration-300 below
    window.setTimeout(() => setIsAnimating(false), 300);
  };

  const prev = () => {
    const nextIndex = (slide - 1 + active.images.length) % active.images.length;
    goToSlide(nextIndex, "prev");
  };

  const next = () => {
    const nextIndex = (slide + 1) % active.images.length;
    goToSlide(nextIndex, "next");
  };

  /* ===================== UI ===================== */

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* HERO */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
              <div className="bg-slate-900 rounded-full p-1">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 size={40} className="text-teal-400" />
            <h1 className="text-5xl md:text-6xl">Renz</h1>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6" />

          <h2 className="text-2xl text-teal-400 mb-6">
            Competitive Fighting Game Player — Archangel Esports
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Competitive fighting game player focused on fundamentals, spacing,
            adaptation and consistency. Active in online sets, long sessions and
            community tournaments across multiple fighting games.
          </p>
        </div>

        {/* MAIN GAMES FIGMA SECTION */}
        <div className="max-w-6xl mx-auto">
          {/* TABS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {games.map((game) => (
              <button
                key={game.key}
                onClick={() => setActiveKey(game.key)}
                className={`rounded-xl px-4 py-3 font-bold border transition ${
                  game.key === activeKey
                    ? "bg-teal-500 text-slate-900 border-teal-300"
                    : "bg-slate-800 text-white border-slate-700 hover:border-teal-400"
                }`}
              >
                {game.tab}
              </button>
            ))}
          </div>

          {/* PANEL */}
          <div className="rounded-3xl overflow-hidden bg-slate-800 shadow-2xl">
            <div className="grid md:grid-cols-5">
              {/* IMAGE / SLIDER */}
              <div className="md:col-span-3 relative bg-slate-900">
                {/* viewport */}
                <div className="relative w-full h-[420px] overflow-hidden">
                  {/* Previous image (slides out) */}
                  {isAnimating && (
                    <ImageWithFallback
                      src={active.images[prevSlide]}
                      alt={active.title}
                      className={[
                        "absolute inset-0 w-full h-full object-cover",
                        "transition-transform duration-300 ease-out",
                        direction === "next"
                          ? "-translate-x-full"
                          : "translate-x-full",
                      ].join(" ")}
                    />
                  )}

                  {/* Current image (slides in) */}
                  <ImageWithFallback
                    key={`${active.key}-${slide}`}
                    src={active.images[slide]}
                    alt={active.title}
                    className={[
                      "absolute inset-0 w-full h-full object-cover",
                      "transition-transform duration-300 ease-out",
                      isAnimating
                        ? direction === "next"
                          ? "translate-x-0"
                          : "translate-x-0"
                        : "translate-x-0",
                    ].join(" ")}
                    style={
                      isAnimating
                        ? {
                            transform:
                              direction === "next"
                                ? "translateX(100%)"
                                : "translateX(-100%)",
                          }
                        : undefined
                    }
                  />

                  {/* Trick: set initial position then snap to 0 on next frame */}
                  {isAnimating && (
                    <style>{`
                      /* no-op placeholder to keep TSX happy */
                    `}</style>
                  )}
                </div>

                {/* Apply the proper slide-in by toggling class after mount */}
                {/* We do it by using a small effect below */}
                <SlideInFix isAnimating={isAnimating} />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />

                {/* arrows */}
                {canSlide && (
                  <>
                    <button
                      onClick={prev}
                      disabled={isAnimating}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 disabled:opacity-50"
                      aria-label="Previous image"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={next}
                      disabled={isAnimating}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 disabled:opacity-50"
                      aria-label="Next image"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}

                {/* title (smaller & responsive) */}
                <div className="absolute bottom-6 left-6 pr-6 text-white drop-shadow">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-wide leading-tight">
                    {active.title}
                  </div>
                </div>

                {/* dots */}
                {active.images.length > 1 && (
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {active.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          goToSlide(i, i > slide ? "next" : "prev")
                        }
                        disabled={isAnimating}
                        className={`h-2.5 w-2.5 rounded-full transition disabled:opacity-50 ${
                          i === slide ? "bg-teal-400" : "bg-white/40"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="md:col-span-2 bg-slate-700 p-6 space-y-5">
                <div>
                  <p className="font-semibold">MAIN:</p>
                  <p className="text-red-400">{active.main}</p>

                  <p className="font-semibold mt-3">SUB-MAINS:</p>
                  {active.subs.map((s) => (
                    <p key={s} className="text-teal-200">
                      {s}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="font-semibold">RANK:</p>
                  <div className="bg-slate-900/40 px-4 py-2 rounded-xl inline-block mt-2 font-bold">
                    {active.rank}
                  </div>
                </div>

                <div>
                  <p className="text-teal-200 font-semibold">Placements:</p>
                  {active.placements.map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm mt-1 gap-4"
                    >
                      <span className="leading-snug">• {p.event}</span>
                      <span className="text-teal-200 whitespace-nowrap">
                        {p.place}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-sm text-gray-300">
                  Team: <span className="text-white">Archangel Esports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * Tiny helper to force slide-in transforms to animate smoothly.
 * It toggles a global class for 1 frame so the entering image goes from +/-100% to 0%.
 */
function SlideInFix({ isAnimating }: { isAnimating: boolean }) {
  useEffect(() => {
    if (!isAnimating) return;

    const el = document.documentElement;
    el.classList.add("slide-in-frame");
    const id = requestAnimationFrame(() => {
      el.classList.remove("slide-in-frame");
    });

    return () => cancelAnimationFrame(id);
  }, [isAnimating]);

  return null;
}
