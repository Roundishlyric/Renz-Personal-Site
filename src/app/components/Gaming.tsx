import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Trophy,
  Gamepad2,
  Users,
  Twitch,
  Youtube,
  Medal,
  Target,
  Swords,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type TournamentBadge = "gold" | "silver" | "bronze" | "participant";

type Game = {
  key: string;
  tab: string;
  title: string;
  images: string[];
  focus: string; // tailwind object-* utility
  main: string;
  subs: string[];
  rank: string;
  placements: { event: string; place: string }[];
};

type SlideAnim = {
  from: number;
  to: number;
  dir: "next" | "prev";
};

export function Gaming() {
  const games = useMemo<Game[]>(
    () => [
      {
        key: "sf6",
        tab: "SF6",
        title: "STREET FIGHTER 6",
        images: [
          "/images/sagat.webp",
          "/images/bison.webp",
          "/images/Guile.webp",
          "/images/ken.webp",
        ],
        focus: "object-left",
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
        images: [
          "/images/kuma.webp",
          "/images/panda.webp",
          "/images/clive.webp",
          "/images/paul.webp",
          "/images/fahk.webp",
        ],
        focus: "object-center",
        main: "KUMA / PANDA",
        subs: ["CLIVE ROSFIELD", "PAUL PHOENIX", "FAHKUMRAM"],
        rank: "Tekken God Supreme",
        placements: [
          { event: "CTRL+ALT+ELITE tournament", place: "3rd Place" },
          { event: "MANILA MADNESS III", place: "49th Place" },
          {
            event: "RTX PC AI DAY TEKKEN 8 COMMUNITY TOURNAMENT",
            place: "49th Place",
          },
        ],
      },
      {
        key: "ggst",
        tab: "GGST",
        title: "GUILTY GEAR STRIVE",
        images: ["/images/elp.webp", "/images/nago.webp", "/images/leo.jpg"],
        focus: "object-right",
        main: "ELPHELT VALENTINE",
        subs: ["NAGORIYUKI", "LEO WHITEFANG"],
        rank: "Platinum",
        placements: [{ event: "Online Lobby", place: "Top Player" }],
      },
      {
        key: "gbvsr",
        tab: "GBVSR",
        title: "GRANBLUE FANTASY VERSUS RISING",
        images: ["/images/bea.webp", "/images/gal.webp", "/images/anila.webp"],
        focus: "object-center",
        main: "BEATRIX",
        subs: ["GALLEON", "ANILA"],
        rank: "S+",
        placements: [{ event: "Add Event", place: "13th Place" }],
      },
    ],
    []
  );

  const otherGames = [
    {
      title: "League of Legends",
      rank: "Diamond II",
      hours: "800+",
      role: "Mid Lane",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80",
    },
    {
      title: "Valorant",
      rank: "Immortal",
      hours: "500+",
      role: "Duelist",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    },
    {
      title: "Apex Legends",
      rank: "Predator",
      hours: "400+",
      role: "Assault",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    },
    {
      title: "Rocket League",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    },
    {
      title: "Elden Ring",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    },
  ];

  const tournaments: {
    name: string;
    placement: string;
    prize: string;
    date: string;
    participants: string;
    badge: TournamentBadge;
  }[] = [
    {
      name: "EVO 2025 - Street Fighter 6",
      placement: "1st Place",
      prize: "$5,000",
      date: "August 2025",
      participants: "2,500+",
      badge: "gold",
    },
    {
      name: "Combo Breaker 2025",
      placement: "2nd Place",
      prize: "$2,500",
      date: "May 2025",
      participants: "1,200+",
      badge: "silver",
    },
    {
      name: "CEO Fighting Game Championships",
      placement: "3rd Place",
      prize: "$1,000",
      date: "June 2025",
      participants: "800+",
      badge: "bronze",
    },
    {
      name: "Tekken World Tour Regional",
      placement: "1st Place",
      prize: "$3,000",
      date: "March 2025",
      participants: "500+",
      badge: "gold",
    },
    {
      name: "Local Fighting Game League",
      placement: "1st Place",
      prize: "$500",
      date: "February 2025",
      participants: "150+",
      badge: "gold",
    },
    {
      name: "Online Championship Series",
      placement: "4th Place",
      prize: "$750",
      date: "January 2025",
      participants: "1,000+",
      badge: "participant",
    },
  ];


  const getBadgeColor = (badge: TournamentBadge) => {
    switch (badge) {
      case "gold":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "silver":
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case "bronze":
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      default:
        return "bg-gradient-to-r from-teal-500 to-cyan-500 text-white";
    }
  };

  /* ===================== MAIN GAMES SLIDER STATE ===================== */
  const [activeKey, setActiveKey] = useState<string>(games[0]?.key ?? "sf6");
  const active = useMemo(
    () => games.find((g) => g.key === activeKey) ?? games[0],
    [games, activeKey]
  );

  const [slide, setSlide] = useState(0);
  const [anim, setAnim] = useState<SlideAnim | null>(null);

  const canSlide = (active?.images?.length ?? 0) > 1;

  // Reset slider when switching games
  useEffect(() => {
    setSlide(0);
    setAnim(null);
  }, [activeKey]);

  // Finish animation + set final slide (prevents "blank" frames)
  useEffect(() => {
    if (!anim) return;
    const t = window.setTimeout(() => {
      setSlide(anim.to);
      setAnim(null);
    }, 320); // match duration-300 + tiny buffer
    return () => window.clearTimeout(t);
  }, [anim]);

  const startSlide = useCallback(
    (to: number, dir: "next" | "prev") => {
      if (!active) return;
      if (!canSlide) return;
      if (anim) return;

      const total = active.images.length;
      const normalizedTo = ((to % total) + total) % total;
      if (normalizedTo === slide) return;

      setAnim({ from: slide, to: normalizedTo, dir });
    },
    [active, anim, canSlide, slide]
  );

  const next = useCallback(() => {
    if (!active) return;
    startSlide(slide + 1, "next");
  }, [active, slide, startSlide]);

  const prev = useCallback(() => {
    if (!active) return;
    startSlide(slide - 1, "prev");
  }, [active, slide, startSlide]);

  const currentIndex = anim ? anim.to : slide;

  return (
    <section
      id="gaming"
      className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
              <div className="bg-slate-900 rounded-full p-1">
                <div className="w-40 h-40 bg-gradient-to-br from-teal-900 to-cyan-900 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80"
                    alt="Player Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 size={40} className="text-teal-400" />
            <h1 className="text-5xl md:text-6xl text-white">Your Gamertag</h1>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6" />

          <h2 className="text-2xl md:text-3xl text-teal-400 mb-6">
            Professional Fighting Game Competitor
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            Competing at the highest level in fighting game tournaments
            worldwide. Specializing in Street Fighter 6, Tekken 8, and multiple
            fighting game titles.
          </p>

          <p className="text-md text-gray-400 max-w-2xl mx-auto mb-8">
            With over 5 years of competitive experience, I've secured multiple
            championship titles and consistently place in top 8 at major
            tournaments. Currently representing Team Apex Fighters.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg px-6 py-2">
              🏆 5x Champion
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg px-6 py-2">
              ⚔️ Fighting Game Specialist
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg px-6 py-2">
              👥 Team Apex Fighters
            </Badge>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4">Representing Team Apex Fighters</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Competing as one of the top fighting game teams in the region
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-teal-500 shadow-2xl shadow-teal-500/30 overflow-hidden">
              <div className="relative h-64 bg-slate-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"
                  alt="Team Apex Fighters"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Team Apex Fighters
                    </h3>
                    <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg px-6 py-2">
                      Est. 2020 • Regional Champions
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-teal-600/20 rounded-lg">
                      <Trophy className="text-teal-400" size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">12+</div>
                      <div className="text-gray-300">Team Championships</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-teal-600/20 rounded-lg">
                      <Users className="text-teal-400" size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">5</div>
                      <div className="text-gray-300">Team Members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-teal-600/20 rounded-lg">
                      <Medal className="text-teal-400" size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Top 5</div>
                      <div className="text-gray-300">Regional Rank</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-center">
                  Playing as the main fighter, contributing to team victories
                  across multiple major tournaments and representing our team at
                  international competitions.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Tournament Placements */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4">Tournament Placements</h3>
            <p className="text-gray-300">
              Recent competitive achievements and prize winnings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-teal-500 transition-all hover:shadow-xl hover:shadow-teal-500/20 overflow-hidden"
              >
                <div className={`h-2 ${getBadgeColor(tournament.badge)}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl mb-2 text-white">
                        {tournament.name}
                      </h4>
                      <Badge className={`${getBadgeColor(tournament.badge)} mb-2`}>
                        {tournament.placement}
                      </Badge>
                    </div>
                    <div className="text-right ml-2">
                      <div className="text-2xl text-teal-400 font-bold">
                        {tournament.prize}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>📅 {tournament.date}</p>
                    <p>👥 {tournament.participants} Participants</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* MAIN GAMES SECTION */}
        <div className="mb-20">
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
              <div className="grid md:grid-cols-5 min-h-[520px]">
                {/* IMAGE / SLIDER (fills left panel) */}
                <div className="md:col-span-3 relative bg-slate-900 overflow-hidden">
                  <div className="relative w-full h-[420px] md:h-full overflow-hidden">
                    {/* Outgoing image (stays visible so no blank flash) */}
                    <ImageWithFallback
                      src={active.images[anim ? anim.from : slide]}
                      alt={active.title}
                      className={[
                        "absolute inset-0 w-full h-full object-cover",
                        active.focus,
                        "transition-transform duration-300 ease-out",
                        "md:group-hover:scale-110", // zoom feel on desktop hover
                        anim
                          ? anim.dir === "next"
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0",
                      ].join(" ")}
                    />

                    {/* Incoming image */}
                    {anim && (
                      <ImageWithFallback
                        src={active.images[anim.to]}
                        alt={active.title}
                        className={[
                          "absolute inset-0 w-full h-full object-cover",
                          active.focus,
                          "transition-transform duration-300 ease-out",
                          anim.dir === "next"
                            ? "translate-x-0"
                            : "translate-x-0",
                          // start positions
                          anim.dir === "next"
                            ? "will-change-transform"
                            : "will-change-transform",
                        ].join(" ")}
                        // set initial transform via style so it never shows blank
                        style={{
                          transform:
                            anim.dir === "next"
                              ? "translateX(100%)"
                              : "translateX(-100%)",
                          animation: `gamingSlideIn300ms ${
                            anim.dir === "next" ? "fromRight" : "fromLeft"
                          } 300ms ease-out forwards`,
                        }}
                      />
                    )}

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 pointer-events-none" />

                    {/* title */}
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
                              startSlide(i, i > currentIndex ? "next" : "prev")
                            }
                            disabled={!!anim}
                            className={`h-2.5 w-2.5 rounded-full transition disabled:opacity-50 ${
                              i === currentIndex ? "bg-teal-400" : "bg-white/40"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* arrows */}
                    {canSlide && (
                      <>
                        <button
                          onClick={prev}
                          disabled={!!anim}
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 disabled:opacity-50"
                          aria-label="Previous image"
                        >
                          <ChevronLeft />
                        </button>
                        <button
                          onClick={next}
                          disabled={!!anim}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 disabled:opacity-50"
                          aria-label="Next image"
                        >
                          <ChevronRight />
                        </button>
                      </>
                    )}
                  </div>
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
                    <p className="text-teal-200 font-semibold">
                      Notable Placements:
                    </p>
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
                </div>
              </div>
            </div>

            {/* tiny keyframes for the incoming image (no blank flash) */}
            <style>{`
              @keyframes gamingSlideIn300ms_fromRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0%); }
              }
              @keyframes gamingSlideIn300ms_fromLeft {
                from { transform: translateX(-100%); }
                to { transform: translateX(0%); }
              }
            `}</style>
          </div>
        </div>

        {/* Other Games */}
        <div className="mb-20">
          <h3 className="text-3xl mb-4 text-center">Other Games</h3>
          <p className="text-center text-gray-300 mb-10">
            Additional competitive and casual titles I play
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {otherGames.map((game, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-2 border-slate-700 overflow-hidden hover:border-teal-500 transition-all hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg mb-2 text-white">{game.title}</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-teal-400">🏅 {game.rank}</p>
                    <p className="text-gray-300">🎮 {game.role}</p>
                    <p className="text-cyan-400">⏱️ {game.hours}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Steam Profile & Social Media */}
        <div className="mb-20">
          <h3 className="text-3xl mb-10 text-center">
            Gaming Profiles & Social Media
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Steam Profile */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-teal-500 transition-all">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg">
                    <img
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/steam.svg"
                        alt="Steam Logo"
                        className="w-8 h-8 invert"
                      />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white">Sen</h4>
                    <p className="text-teal-400">ID: 1108528630</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6 text-gray-300">
                  <p className="flex justify-between">
                    <span>Games Owned:</span>
                    <span className="text-white font-semibold">200+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Total Hours:</span>
                    <span className="text-white font-semibold">6,400+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Level:</span>
                    <span className="text-white font-semibold">85</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Achievements:</span>
                    <span className="text-white font-semibold">850+</span>
                  </p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Steam Profile
                </Button>
              </div>
            </Card>

            {/* Twitch Streaming */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-teal-500 transition-all">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg">
                    <Twitch size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white">Twitch Channel</h4>
                    <p className="text-teal-400">@YourTwitchHandle</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6 text-gray-300">
                  <p className="flex justify-between">
                    <span>Followers:</span>
                    <span className="text-white font-semibold">2,500+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Stream Schedule:</span>
                    <span className="text-white font-semibold">Mon-Fri 7PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Content:</span>
                    <span className="text-white font-semibold">
                      Fighting Games
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-teal-400 font-semibold">Affiliate</span>
                  </p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Twitch size={18} className="mr-2" />
                  Watch Live Stream
                </Button>
              </div>
            </Card>
          </div>

                    {/* HoYoLAB Profile (Genshin + Star Rail + ZZZ) */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-cyan-400 transition-all">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-lg flex items-center justify-center">
                    <img
                      src="/images/hoyolab.png"
                      alt="HoYoLAB"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white">HoYoLAB</h4>
                    <p className="text-cyan-300">@YourHoYoUsername</p>
                  </div>
                </div>

                {/* Combined stats */}
                <div className="space-y-4 mb-6 text-gray-300">
                  {/* Genshin */}
                  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/images/genshin.png"
                        alt="Genshin Impact"
                        className="w-6 h-6 object-contain"
                      />
                      <p className="text-white font-semibold">Genshin Impact</p>
                    </div>

                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Adventure Rank:</span>
                        <span className="text-white font-semibold">AR 60</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Achievements:</span>
                        <span className="text-white font-semibold">950+</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Spiral Abyss:</span>
                        <span className="text-cyan-300 font-semibold">36★</span>
                      </p>
                    </div>
                  </div>

                  {/* Honkai: Star Rail */}
                  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/images/starrail.png"
                        alt="Honkai: Star Rail"
                        className="w-6 h-6 object-contain"
                      />
                      <p className="text-white font-semibold">Honkai: Star Rail</p>
                    </div>

                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Trailblaze Level:</span>
                        <span className="text-white font-semibold">TL 70</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Memory of Chaos:</span>
                        <span className="text-cyan-300 font-semibold">Full Clear</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Favorites:</span>
                        <span className="text-white font-semibold">Kafka / Jingliu</span>
                      </p>
                    </div>
                  </div>

                  {/* Zenless Zone Zero */}
                  <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/images/zzz.png"
                        alt="Zenless Zone Zero"
                        className="w-6 h-6 object-contain"
                      />
                      <p className="text-white font-semibold">Zenless Zone Zero</p>
                    </div>

                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Inter-Knot Level:</span>
                        <span className="text-white font-semibold">IK 50</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Hollow Zero:</span>
                        <span className="text-cyan-300 font-semibold">Cleared</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Main Squad:</span>
                        <span className="text-white font-semibold">Ellen / Lycaon</span>
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-600 hover:to-blue-800"
                  onClick={() => window.open("https://www.hoyolab.com/", "_blank")}
                >
                  <img src="/images/hoyolab.png" alt="" className="w-5 h-5 mr-2" />
                  View HoYoLAB Profile
                </Button>
              </div>
            </Card>
          

          {/* Social Media Links */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl mb-6 text-center text-white">
              Connect on Social Media
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-16"
                onClick={() => window.open("https://www.youtube.com/@SenGouku")}
              >
                <Youtube size={24} className="mr-2" />
                YouTube
              </Button>
              <Button
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 h-16"
                onClick={() => window.open("https://www.instagram.com/sen_gouku/")}
              >
                <Instagram size={24} className="mr-2" />
                Instagram
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-16"
                onClick={() => window.open("https://www.facebook.com/SenGouku20")}
              >
                <Facebook size={24} className="mr-2" />
                Facebook
              </Button>
              <Button
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 h-16"
                onClick={() => window.open("https://x.com/Sen_Gouku")}
              >
                <Twitter size={24} className="mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-teal-900/50 to-slate-900/50 border-2 border-teal-700 backdrop-blur-sm max-w-5xl mx-auto">
            <div className="p-8">
              <h3 className="text-3xl mb-8 text-white">Career Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-teal-500/30">
                  <div className="text-4xl mb-2 text-teal-400 font-bold">
                    6,400+
                  </div>
                  <div className="text-gray-300">Total Hours</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-teal-500/30">
                  <div className="text-4xl mb-2 text-teal-400 font-bold">
                    25+
                  </div>
                  <div className="text-gray-300">Tournaments</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-teal-500/30">
                  <div className="text-4xl mb-2 text-yellow-400 font-bold">
                    5
                  </div>
                  <div className="text-gray-300">Championships</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-teal-500/30">
                  <div className="text-4xl mb-2 text-teal-400 font-bold">
                    $15K+
                  </div>
                  <div className="text-gray-300">Prize Money</div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-teal-500/30">
                  <div className="text-4xl mb-2 text-teal-400 font-bold">
                    Top 5
                  </div>
                  <div className="text-gray-300">Regional Rank</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}