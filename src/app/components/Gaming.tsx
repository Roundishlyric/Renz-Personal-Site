import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  Trophy,
  Gamepad2,
  Users,
  Twitch,
  Youtube,
  Medal,
  ExternalLink,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Clock
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
  focus: string;
  main: string;
  subs: string[];
  rank: string; 
  placements: { event: string; place: string }[];
};

type SlideAnim = {
  from: number;
  to: number;
  dir: "next" | "prev";
  phase: "init" | "animate";
};

const XIcon = ({ size = 34 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2H21.5l-7.37 8.42L23 22h-6.828l-5.345-6.993L4.5 22H1.244l7.885-9.007L1 2h6.828l4.84 6.35L18.244 2Zm-2.395 18h2.1L7.95 4h-2.1l9.999 16Z" />
  </svg>
);

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
          "https://media.eventhubs.com/images/2022/06/09_gui04.jpg",
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
          "https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Screenshots_V1/Kuma/Kuma-poster.jpg",
          "https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Screenshots_V1/Panda/Pande-poster.jpg",
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/tekken-8-clive-rosfield-header-image.jpg",
          "/images/paul.webp",
          "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/07/tekken-8-fahkumram-guide-featured-image.jpg",
        ],
        focus: "object-center",
        main: "KUMA / PANDA",
        subs: ["CLIVE ROSFIELD", "PAUL PHOENIX", "FAHKUMRAM"],
        rank: "TEKKEN GOD SUPREME",
        placements: [
          { event: "CTRL+ALT+ELITE tournament", place: "3rd Place" },
          { event: "MANILA MADNESS III", place: "49th Place" },
          {
            event: "RTX PC AI DAY TEKKEN 8 COMMUNITY TOURNAMENT",
            place: "17th Place",
          },
          { event: "TRYHARDS September 2024", place: "49th Place" },
          { event: "Geekpop+ Ayala Circuit", place: "25th Place" },
        ],
      },
      {
        key: "ggst",
        tab: "GGST",
        title: "GUILTY GEAR STRIVE",
        images: [
          "https://cdn.dashfight.com/9d3a20e201c12900f66ac1e4a2de1962c3e8b2b7.png",
          "https://www.fightersgeneration.com/nf8/game/guiltygear/guiltygear2020-screenshot5.jpg",
          "/images/leo.jpg",
        ],
        focus: "object-right",
        main: "ELPHELT VALENTINE",
        subs: ["NAGORIYUKI", "LEO WHITEFANG"],
        rank: "Platinum",
        placements: [
          { event: "Geekpop+ Ayala Circuit", place: "11th Place" },
          { event: "Geekpop+ Fight Club February 2026", place: "5th Place" },
        ],
      },
      {
        key: "gbvsr",
        tab: "GBVSR",
        title: "GRANBLUE FANTASY VERSUS RISING",
        images: [
          "https://gamingbolt.com/wp-content/uploads/2024/05/Granblue-Fantasy-Versus-Rising_Beatrix.jpg",
          "https://www.heypoorplayer.com/wp-content/uploads/2025/05/Granblue-Fantasy-Versus-Rising-Galleon-Attack.jpg",
          "https://gamicsoft.sgp1.digitaloceanspaces.com/26032/QQ%E5%9B%BE%E7%89%8720230306130348.png",
        ],
        focus: "object-center",
        main: "BEATRIX",
        subs: ["GALLEON", "ANILA"],
        rank: "S+",
        placements: [
          { event: "Geek+Pop Fight Club Ranker Event 4", place: "13th Place" },
        ],
      },
    ],
    []
  );

  const otherGames = [
    {
      title: "Fatal Fury: City of the Wolves",
      rank: "A+",
      hours: "800+",
      role: "Andy Bogard",
      image: "https://www.snk-corp.co.jp/hero/fatal-fury/s2kv_pc.webp",
    },
    {
      title: "King of Fighters XV",
      rank: "Immortal",
      hours: "500+",
      role: "Duelist",
      image: "https://i.redd.it/hf9yujsb8si71.jpg",
    },
    {
      title: "Melty Blood: Type Lumina",
      rank: "Predator",
      hours: "400+",
      role: "Assault",
      image: "https://images4.alphacoders.com/117/1179291.jpg",
    },
    {
      title: "UNDER NIGHT IN-BIRTH II Sys:Celes",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image: "/images/und.png",
    },
    {
      title: "2XKO",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image: "https://wiki.play2xko.com/en-us/images/2XKO_Cover.jpg?302f5",
    },
    {
      title: "Uma Musume: Pretty Derby",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image: "https://i.redd.it/592408sdingf1.jpeg",
    },
    {
      title: "Wuthering Waves",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image: "https://4kwallpapers.com/images/wallpapers/wuthering-waves-v2-3840x2160-24011.jpg",
    },
    {
      title: "Grandblue Fantasy: Relink",
      rank: "Champion III",
      hours: "600+",
      role: "Striker",
      image: "https://4kwallpapers.com/images/wallpapers/granblue-fantasy-3840x2160-15025.jpg",
    },
    {
      title: "Monster Hunter: Wilds",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://i.redd.it/wallpaper-compilation-from-wilds-release-s-capcom-survey-v0-x1ytckrvmvle1.jpg?width=2560&format=pjpg&auto=webp&s=b34be37c51661ff48b918a0a217c353bd16909af",
    },
    {
      title: "Monster Hunter: World",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://images3.alphacoders.com/107/1070888.jpg",
    },
    {
      title: "Elden Ring",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://preview.redd.it/mn7z7ia8qet71.jpg?auto=webp&s=92e01d8b1c4e0b3ffc87096be274b31fbd17a430",
    },
    {
      title: "Dark Souls III",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg",
    },
    {
      title: "Apex Legends",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://www.denofgeek.com/wp-content/uploads/2021/08/Apex-Legends-Season-10-Meta.jpg?fit=1200%2C800",
    },
    {
      title: "Clair Obscur: Expedition 33",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://cdn.mos.cms.futurecdn.net/n9ZybPuhE42y6etXEuutWc.jpg",
    },
    {
      title: "Overwatch",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt030bf3d606661d3c/633f5be164fe5a7d4481a16c/overwatch-section1-feature1.png?imwidth=1920&imdensity=2.625",
    },
    {
      title: "Sekiro: Shadows Die Twice",
      rank: "Completed - All Achievements",
      hours: "300+",
      role: "PvE",
      image: "https://4kwallpapers.com/images/wallpapers/sekiro-shadows-die-5120x2880-14176.jpg",
    },
  ];

  /* ===================== MAIN GAMES SLIDER STATE ===================== */
  const [activeKey, setActiveKey] = useState<string>(games[0]?.key ?? "sf6");
  const active = useMemo(
    () => games.find((g) => g.key === activeKey) ?? games[0],
    [games, activeKey]
  );

  const [slide, setSlide] = useState(0);
  const [anim, setAnim] = useState<SlideAnim | null>(null);

  const canSlide = (active?.images?.length ?? 0) > 1;
  const currentIndex = anim ? anim.to : slide;

  // Reset slider when switching games
  useEffect(() => {
    setSlide(0);
    setAnim(null);
  }, [activeKey]);

  // Kick off the CSS transition on the next frame (prevents “jump” / broken transition)
  useEffect(() => {
    if (!anim || anim.phase !== "init") return;
    const raf = requestAnimationFrame(() => {
      setAnim((a) => (a ? { ...a, phase: "animate" } : a));
    });
    return () => cancelAnimationFrame(raf);
  }, [anim]);

  // Finish animation cleanly
  useEffect(() => {
    if (!anim || anim.phase !== "animate") return;
    const t = window.setTimeout(() => {
      setSlide(anim.to);
      setAnim(null);
    }, 320);
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

      setAnim({ from: slide, to: normalizedTo, dir, phase: "init" });
    },
    [active, anim, canSlide, slide]
  );

  const next = useCallback(() => startSlide(slide + 1, "next"), [slide, startSlide]);
  const prev = useCallback(() => startSlide(slide - 1, "prev"), [slide, startSlide]);

type HoyoKey = "genshin" | "hsr" | "zzz";

const HOYO_TEAMS: Record<
  HoyoKey,
  {
    key: HoyoKey;
    label: string;
    icon: string;
    teamCols: 3 | 4;
    members: { name: string; img: string }[];
    team2Members: { name: string; img: string }[];
  }
> = {
  genshin: {
    key: "genshin",
    label: "Genshin Impact",
    icon: "/images/gen.webp",
    teamCols: 4,
    members: [
      { name: "Arlecchino", img: "https://i2.wp.com/images.genshin-builds.com/genshin/characters/arlecchino/image.png?strip=all&quality=100" },
      { name: "Yelan", img: "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Yelan_Icon.png/revision/latest/scale-to-width-down/250?cb=20240711205454" },
      { name: "Kazuha", img: "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Kaedehara_Kazuha_Icon.png/revision/latest/scale-to-width-down/250?cb=20210623063513" },
      { name: "Bennet", img: "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Bennett_Icon.png/revision/latest/scale-to-width-down/250?cb=20231215091856" },
    ],
    team2Members: [
      { name: "Yae Miko", img: "https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Yae_Miko_Icon.png/revision/latest/scale-to-width-down/250?cb=20220216025931" },
      { name: "Raiden Shogun", img: "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Raiden_Shogun_Icon.png/revision/latest/scale-to-width-down/250?cb=20240717072843" },
      { name: "Sucrose", img: "https://i2.wp.com/images.genshin-builds.com/genshin/characters/sucrose/image.png?strip=all&quality=100" },
      { name: "Bennet", img: "https://static.wikia.nocookie.net/gensin-impact/images/7/79/Bennett_Icon.png/revision/latest/scale-to-width-down/250?cb=20231215091856" },
    ],
  },
  hsr: {
    key: "hsr",
    label: "Honkai: Star Rail",
    icon: "/images/star.webp",
    teamCols: 4,
    members: [
      { name: "Kafka", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/1005.png" },
      { name: "Black Swan", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3014.png" },
      { name: "Ruan Mei", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3011.png" },
      { name: "Lynx", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3004.png" },
    ],
    team2Members: [
      { name: "The Herta", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3036.png" },
      { name: "Jade", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3026.png" },
      { name: "Tingyun", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/1202.png" },
      { name: "Gallagher", img: "https://sunderarmor.com/STARRAIL/Characters/Thumb/3019.png" },
    ],
  },
  zzz: {
    key: "zzz",
    label: "Zenless Zone Zero",
    icon: "/images/zzz.webp",
    teamCols: 3,
    members: [
      { name: "Hoshini Miyabi", img: "https://sunderarmor.com/ZZZ/Character/thumb_miyabi.png" },
      { name: "Tsukishiro Yanagu", img: "https://sunderarmor.com/ZZZ/Character/thumb_yanagi.png" },
      { name: "Astra Yao", img: "https://sunderarmor.com/ZZZ/Character/thumb_astra_yao.png" },
    ],
    team2Members: [
      { name: "Jane Doe", img: "https://sunderarmor.com/ZZZ/Character/thumb_jane_doe.png" },
      { name: "Seth Lowell", img: "https://sunderarmor.com/ZZZ/Character/thumb_seth.png " },
      { name: "Ukinami Yuzuha", img: "https://sunderarmor.com/ZZZ/Character/thumb_yuzuha.png" },
    ],
  },
};

const [hoyoActive, setHoyoActive] = useState<HoyoKey>("genshin");

  const TeamPanel = ({
    title,
    members,
  }: {
    title: string;
    members: { name: string; img: string }[];
  }) => (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
      <p className="text-white font-semibold mb-5">{title}</p>

      <div
        className={[
          "grid gap-5",
          HOYO_TEAMS[hoyoActive].teamCols === 4
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-3",
        ].join(" ")}
      >
        {members.map((c) => (
          <div
            key={c.name}
            className="group rounded-2xl border border-white/10 bg-slate-800/40 p-3 hover:border-cyan-400/30 hover:bg-slate-800/60 transition"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950/30 border border-white/10">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <p className="mt-3 text-sm font-semibold text-white text-center truncate">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="gaming"
      className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <section
          id="overview"
          className="
            relative
            w-screen
            left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
            -mt-16
            bg-black text-white overflow-hidden
            min-h-[560px] md:min-h-[680px] lg:min-h-[760px]
          "
        >
          {/* glow background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="absolute top-10 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 h-full">
            {/* LEFT IMAGE */}
            <div className="relative md:col-span-3 min-h-[420px] md:min-h-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=2000&q=80"
                alt="SenGouku"
                className="absolute inset-0 h-full w-full object-cover object-left"
                draggable={false}
              />

              {/* teal tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/25 via-cyan-500/10 to-transparent mix-blend-overlay" />

              {/* readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* bottom identity */}
              <div className="absolute bottom-10 left-10 flex items-center gap-3">
                <Gamepad2 size={28} className="text-teal-300" />
                <div>
                  <p className="text-3xl font-bold">SenGouku</p>
                  <p className="text-teal-300 text-sm">Fighting Game Competitor</p>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative md:col-span-2 bg-slate-900/80 backdrop-blur-xl border-l border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="h-full px-10 py-12 flex flex-col">
                <h1 className="text-white font-extrabold uppercase leading-[0.85] text-6xl sm:text-7xl lg:text-8xl">
                  SENGOUKU
                </h1>

                <div className="mt-6 h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />

                <h2 className="mt-6 text-teal-300 text-lg font-semibold">
                  Fighting Game Competitor &amp; Gaming Content Creator
                </h2>

                <p className="mt-4 text-gray-300 max-w-md">
                  Competing at the highest level in fighting game tournaments worldwide.
                  Specializing in Street Fighter 6, Tekken 8, and multiple fighting game titles.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge className="px-4 py-2 text-sm bg-slate-800/70 border border-white/10 text-white">
                    ⚔️ Fighting Game Specialist
                  </Badge>
                  <Badge className="px-4 py-2 text-sm bg-slate-800/70 border border-white/10 text-white">
                    👥 Archangel Esports
                  </Badge>
                  <Badge className="px-4 py-2 text-sm bg-slate-800/70 border border-white/10 text-teal-200">
                    ⭐ Competitive Player
                  </Badge>
                </div>

                <div className="mt-auto pt-10 grid grid-cols-1 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur px-6 py-5">
                    <p className="text-sm text-gray-300">Main Focus</p>
                    <p className="mt-1 text-xl font-bold text-white">FGC Tournaments</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur px-6 py-5">
                    <p className="text-sm text-gray-300">Signature Titles</p>
                    <p className="mt-1 text-xl font-bold text-white">SF6 • T8 • More</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur px-6 py-5">
                    <p className="text-sm text-gray-300">Content</p>
                    <p className="mt-1 text-xl font-bold text-white">Clips • Guides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <div id="team" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10 mt-10">
            <h3 className="text-3xl mb-4">Representing Archangel Esports</h3>
          </div>

          <div className="max-w-8xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-teal-500 shadow-2xl shadow-teal-500/30 overflow-hidden">
              <div className="relative h-64 bg-slate-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"
                  alt="Team"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Archangel Esports
                    </h3>
                    <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg px-6 py-2">
                      Est. 2022 • Community Team
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
                  Playing as the main fighter, contributing to team victories across multiple major
                  tournaments and representing our team at international competitions.
                </p>
              </div>
            </Card>
          </div>
        </div>

       {/* MAIN GAMES SECTION */}
<div id="main-games" className="scroll-mt-24 mb-20">
  <div className="max-w-8xl mx-auto">
    {/* TABS (segmented pills) */}
    <div className="mb-7">
      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-2 backdrop-blur">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {games.map((game) => {
            const activeTab = game.key === activeKey;
            return (
              <button
                key={game.key}
                onClick={() => setActiveKey(game.key)}
                className={[
                  "relative rounded-xl px-4 py-3 font-semibold tracking-wide transition",
                  "border",
                  activeTab
                    ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 border-transparent shadow-lg shadow-teal-500/20"
                    : "bg-slate-800/60 text-white border-white/10 hover:border-teal-400/40 hover:bg-slate-800",
                ].join(" ")}
              >
                {activeTab && (
                  <span className="absolute inset-0 rounded-xl ring-2 ring-teal-300/30 pointer-events-none" />
                )}
                {game.tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>

    {/* PANEL (gradient border + glass) */}
    <div className="rounded-3xl p-[1px] bg-gradient-to-r from-teal-500/50 via-cyan-400/30 to-teal-500/50">
      <div className="rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur shadow-2xl">
        <div className="grid md:grid-cols-5 min-h-[540px]">
          {/* IMAGE / SLIDER */}
          <div className="md:col-span-3 relative overflow-hidden bg-slate-950">
            <div className="relative w-full h-[420px] md:h-full overflow-hidden">
              {/* Outgoing */}
              <ImageWithFallback
                src={active.images[anim ? anim.from : slide]}
                alt={active.title}
                className={[
                  "absolute inset-0 w-full h-full object-cover",
                  active.focus,
                  "will-change-transform",
                  "transition-transform duration-300 ease-out",
                  anim?.phase === "animate"
                    ? anim.dir === "next"
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : "translate-x-0",
                ].join(" ")}
              />

              {/* Incoming */}
              {anim && (
                <ImageWithFallback
                  src={active.images[anim.to]}
                  alt={active.title}
                  className={[
                    "absolute inset-0 w-full h-full object-cover",
                    active.focus,
                    "will-change-transform",
                    "transition-transform duration-300 ease-out",
                    anim.phase === "animate"
                      ? "translate-x-0"
                      : anim.dir === "next"
                      ? "translate-x-full"
                      : "-translate-x-full",
                  ].join(" ")}
                />
              )}

              {/* overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_55%)] pointer-events-none" />

              {/* Title chip */}
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                  <div className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
                    {active.title}
                  </div>
                </div>
              </div>

              {/* Dots -> progress pills */}
              {active.images.length > 1 && (
                <div className="absolute bottom-6 right-6 flex items-center gap-2">
                  {active.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        startSlide(i, i > currentIndex ? "next" : "prev")
                      }
                      disabled={!!anim}
                      className={[
                        "h-2 rounded-full transition-all disabled:opacity-50",
                        i === currentIndex ? "w-10 bg-teal-400" : "w-4 bg-white/30 hover:bg-white/45",
                      ].join(" ")}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 disabled:opacity-50 border border-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    disabled={!!anim}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 disabled:opacity-50 border border-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* INFO */}
          <div className="md:col-span-2 bg-slate-900/50 p-7">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-300">Main Character</p>
                <p className="text-xl font-bold text-red-400">{active.main}</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-300">Rank</p>
                <div className="inline-flex rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2 font-bold text-white">
                  {active.rank}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 mb-6" />

            {/* Subs */}
            <div className="mb-7">
              <p className="text-sm font-semibold text-gray-200 mb-3">
                Sub-mains
              </p>
              <div className="flex flex-wrap gap-2">
                {active.subs.map((s) => (
                  <span
                    key={s}
                    className="rounded-xl border border-teal-400/20 bg-teal-500/10 px-3 py-1.5 text-sm text-teal-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Placements */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-200">
                  Notable Placements
                </p>
                <span className="text-xs text-gray-400">
                  {active.placements.length} events
                </span>
              </div>

              <div className="space-y-3">
                {active.placements.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm text-gray-200 leading-snug">
                        {p.event}
                      </p>
                      <span className="text-sm font-semibold text-teal-200 whitespace-nowrap">
                        {p.place}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Other Games */}
        <div id="other-games" className="scroll-mt-24 mb-20">
          <h3 className="text-3xl mb-4 text-center">Other Games</h3>
          <p className="text-center text-gray-300 mb-10">
            Additional competitive and casual titles I play
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {otherGames.map((game, index) => (
                    <Card
              key={index}
              className="overflow-hidden border-2 border-slate-700 bg-slate-800 transition-all hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/20 space-y--5"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{game.title}</h4>

              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-teal-400">
                  <Medal size={16} />
                  <span>{game.rank}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Gamepad2 size={16} />
                  <span>{game.role}</span>
                </div>

                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock size={16} />
                  <span>{game.hours}</span>
                </div>
              </div>
              </div>
            </Card>
            ))}
          </div>
        </div>

        {/* Steam Profile & Social Media */}
        <div id="profiles" className="scroll-mt-24 mb-20">
          <h3 className="text-3xl mb-10 text-center">Gaming Profiles & Social Media</h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-8xl mx-auto mb-8 items-stretch">
            {/* Steam */}
            <Card className="h-full flex flex-col bg-slate-800 border-2 border-slate-700 hover:border-teal-500 transition-all">
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-black rounded-xl shadow-lg">
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
                      className="w-full mt-6 h-11 bgblue-700 hover:from-cyan-600 hover:to-blue-800"
                      onClick={() =>
                        window.open(
                          "https://steamcommunity.com/profiles/76561199068794358/"
                        )
                      }
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/steam.svg"
                        alt=""
                        className="w-5 h-5 mr-2 invert"
                      />
                      View Steam Profile
                    </Button>
              </div>
            </Card>

            {/* Twitch */}
            <Card className="h-full flex flex-col bg-slate-800 border-2 border-slate-700 hover:border-teal-500 transition-all">
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg">
                    <Twitch size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white">SenGouku</h4>
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
                    <span className="text-white font-semibold">Fighting Games</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-teal-400 font-semibold">Affiliate</span>
                  </p>
                </div>

                <Button
                  className="w-full mt-auto bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Twitch size={18} className="mr-2" />
                  Watch Live Stream
                </Button>
              </div>
            </Card>
          </div>

          <div className="max-w-8xl mx-auto">
            <Card className="overflow-hidden border border-white/10 bg-slate-800/70 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="grid lg:grid-cols-5 min-h-[540px]">
                
                {/* LEFT: HoYoLAB */}
                <aside className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="p-7">
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-lg flex items-center justify-center">
                        <img
                          src="/images/hoyo.png"
                          alt="HoYoLAB"
                          className="w-8 h-8 object-contain"
                          draggable={false}
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-white leading-tight">
                          HoYoLAB
                        </h4>
                        <p className="text-cyan-300 text-sm">11846094</p>
                      </div>
                    </div>

                    {/* Accounts */}
                    <div className="space-y-4">
                      {["genshin", "hsr", "zzz"].map((key) => {
                        const k = key as HoyoKey;
                        const active = hoyoActive === k;

                        const content =
                          k === "genshin"
                            ? {
                                icon: "/images/gen.webp",
                                title: "Genshin Impact",
                                rows: [
                                  ["UID", "801498652"],
                                  ["Achievements", "950+"],
                                  ["Spiral Abyss", "36★", "text-cyan-300"],
                                ],
                              }
                            : k === "hsr"
                            ? {
                                icon: "/images/star.webp",
                                title: "Honkai: Star Rail",
                                rows: [
                                  ["UID", "802923246"],
                                  ["Memory of Chaos", "Full Clear", "text-cyan-300"],
                                  ["Favorites", "Kafka / Jingliu"],
                                ],
                              }
                            : {
                                icon: "/images/zzz.webp",
                                title: "Zenless Zone Zero",
                                rows: [
                                  ["UID", "1302497095"],
                                  ["Hollow Zero", "Cleared", "text-cyan-300"],
                                  ["Main Squad", "Ellen / Lycaon"],
                                ],
                              };
                        return (
                          <button
                            key={k}
                            onClick={() => setHoyoActive(k)}
                            className={[
                              "w-full text-left rounded-2xl border p-4 transition",
                              "bg-slate-900/40 border-white/10 hover:border-cyan-400/30 hover:bg-slate-900/60",
                              active
                                ? "ring-2 ring-cyan-400/60 border-cyan-400/40"
                                : "",
                            ].join(" ")}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="h-8 w-8 rounded-xl border border-white/10 bg-slate-800/50 flex items-center justify-center">
                                <img
                                  src={content.icon}
                                  alt=""
                                  className="h-5 w-5 object-contain"
                                />
                              </div>
                              <p className="text-white font-semibold">
                                {content.title}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-y-2 text-sm">
                              {content.rows.map(([label, value, accent]) => (
                                <React.Fragment key={label}>
                                  <div className="text-gray-300">{label}</div>
                                  <div
                                    className={[
                                      "text-right font-semibold",
                                      accent ?? "text-white",
                                    ].join(" ")}
                                  >
                                    {value}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                <Button
                  className="w-full mt-10 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  onClick={() => window.open("https://www.hoyolab.com/accountCenter/postList?id=11846094")}
                >
                  <ExternalLink size={18} className="mr-2" />
                  View HoYoLAB Profile
                </Button>
                  </div>
                </aside>

                {/* RIGHT: Teams Showcase */}
                <section className="lg:col-span-3">
                  <div className="p-7">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl border border-white/10 bg-slate-900/40 flex items-center justify-center">
                          <img
                            src={HOYO_TEAMS[hoyoActive].icon}
                            alt=""
                            className="h-7 w-7 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-white">
                            Teams Showcase
                          </h4>
                          <p className="text-sm text-gray-300">
                            {HOYO_TEAMS[hoyoActive].label}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="grid gap-6 lg:grid-cols-1">
                      <TeamPanel
                        title="Main Team"
                        members={HOYO_TEAMS[hoyoActive].members}
                      />
                      <TeamPanel
                        title="Second Team"
                        members={HOYO_TEAMS[hoyoActive].team2Members}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </Card>
          </div>

          {/* Social Media */}
          <div id="Social" className="scroll-mt-24 mt-16">
            <div className="max-w-8xl mx-auto px-4">
              <div className="text-center mb-10">
                <h4 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Connect on Social Media
                </h4>
                <div className="mt-4 mx-auto h-1 w-24 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* YouTube */}
                <button
                  onClick={() => window.open("https://www.youtube.com/@SenGouku")}
                  className="group text-left"
                >
                  <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur transition-all
                                  hover:-translate-y-1 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/15">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-transparent opacity-100" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-red-500/20 blur-2xl" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                    [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />

                    <div className="relative h-full px-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-red-600/25 border border-red-400/20 flex items-center justify-center">
                          <Youtube size={26} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">YouTube</p>
                          <p className="text-gray-300 text-sm">@SenGouku</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => window.open("https://www.instagram.com/sen_gouku/")}
                  className="group text-left"
                >
                  <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur transition-all
                                  hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-2xl hover:shadow-pink-500/15">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 via-purple-600/15 to-transparent" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-pink-500/20 blur-2xl" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                    [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />

                    <div className="relative h-full px-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-pink-600/25 border border-pink-400/20 flex items-center justify-center">
                          <Instagram size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">Instagram</p>
                          <p className="text-gray-300 text-sm">@sen_gouku</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </button>

                {/* Facebook */}
                <button
                  onClick={() => window.open("https://www.facebook.com/SenGouku20")}
                  className="group text-left"
                >
                  <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur transition-all
                                  hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/15">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-transparent" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                    [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />

                    <div className="relative h-full px-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-600/25 border border-blue-400/20 flex items-center justify-center">
                          <Facebook size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">Facebook</p>
                          <p className="text-gray-300 text-sm">SenGouku20</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </button>

                {/* X */}
                <button
                  onClick={() => window.open("https://x.com/Sen_Gouku")}
                  className="group text-left"
                >
                  <div className="relative h-28 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur transition-all
                                  hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                    [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />

                    <div className="relative h-full px-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center">
                          <XIcon size={22} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">X</p>
                          <p className="text-gray-300 text-sm">@Sen_Gouku</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
