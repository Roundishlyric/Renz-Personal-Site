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

const SLIDE_ANIM_MS = 300;

type HoyoKey = "genshin" | "hsr" | "zzz";

type HoyoMember = { name: string; img: string };

type HoyoTeam = {
  key: HoyoKey;
  label: string;
  icon: string;
  teamCols: 3 | 4;
  members: HoyoMember[];
  team2Members: HoyoMember[];
};

type OtherGame = {
  title: string;
  rank: string;
  hours: string;
  role: string;
  image: string;
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

const HOYO_TEAMS: Record<HoyoKey, HoyoTeam> = {
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

const TeamPanel = React.memo(function TeamPanel({
  title,
  members,
  teamCols,
}: {
  title: string;
  members: HoyoMember[];
  teamCols: 3 | 4;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
      <p className="text-white font-semibold mb-5">{title}</p>

      <div
        className={[
          "grid gap-5",
          teamCols === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3",
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
});

const OtherGameCard = React.memo(function OtherGameCard({
  game,
}: {
  game: OtherGame;
}) {
  return (
    <Card className="group relative overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-2xl hover:shadow-teal-500/20">
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <ImageWithFallback
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/15 via-transparent to-cyan-400/5 opacity-70" />

        <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-teal-300/30 bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-teal-200 backdrop-blur">
            <Medal size={13} />
            {game.rank}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-cyan-300/30 bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
            <Clock size={13} />
            {game.hours}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h4 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-snug text-white">
          {game.title}
        </h4>

        <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/50 p-3">
          <div className="flex items-start gap-2 text-sm text-gray-200">
            <Gamepad2 size={16} className="mt-0.5 shrink-0 text-teal-300" />
            <p className="line-clamp-2">{game.role}</p>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-white/10" />
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-gray-400">
          Game Snapshot
        </p>
      </div>
    </Card>
  );
});

export function Gaming() {
  const aboutTitleClass = "mb-4 text-4xl md:text-5xl text-white";

  const games = useMemo<Game[]>(
    () => [
      {
        key: "sf6",
        tab: "SF6",
        title: "STREET FIGHTER 6",
        images: [
          "https://www.streetfighter.com/6/assets/images/character/sagat/sagat_ss04_thumb.jpg",
          "https://www.streetfighter.com/article/sites/2/2024/06/lighting05_06.jpg",
          "https://media.eventhubs.com/images/2022/06/09_gui04.jpg",
          "https://4kwallpapers.com/images/wallpapers/street-fighter-6-ken-2560x1440-9529.jpg",
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
          "https://images8.alphacoders.com/132/1326135.png",
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
          "https://www.destructoid.com/wp-content/uploads/2021/05/619542-guiltygearstrivewhitefang.jpg",
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

  const otherGames = useMemo<OtherGame[]>(
    () => [
    {
      title: "Fatal Fury: City of the Wolves",
      rank: "C1",
      hours: "20+",
      role: "Andy Bogard",
      image: "https://www.snk-corp.co.jp/hero/fatal-fury/s2kv_pc.webp",
    },
    {
      title: "King of Fighters XV",
      rank: "Rank 12",
      hours: "10+",
      role: "Shermie/Whip/Leona",
      image: "https://i.redd.it/hf9yujsb8si71.jpg",
    },
    {
      title: "Melty Blood: Type Lumina",
      rank: "C1",
      hours: "40+",
      role: "Kouma Kirishima",
      image: "https://images4.alphacoders.com/117/1179291.jpg",
    },
    {
      title: "UNDER NIGHT IN-BIRTH II Sys:Celes",
      rank: "C3",
      hours: "20+",
      role: "Izumi",
      image: "/images/und.png",
    },
    {
      title: "2XKO",
      rank: "Silver",
      hours: "10+",
      role: "Warwick & Braum",
      image: "https://wiki.play2xko.com/en-us/images/2XKO_Cover.jpg?302f5",
    },
    {
      title: "Uma Musume: Pretty Derby",
      rank: "A3",
      hours: "600+",
      role: "Rice Shower/Agnes Tachyon",
      image: "https://i.redd.it/592408sdingf1.jpeg",
    },
    {
      title: "Wuthering Waves",
      rank: "Lvl. 70",
      hours: "700+",
      role: "Zani/Phoebe/Verina",
      image: "https://4kwallpapers.com/images/wallpapers/wuthering-waves-v2-3840x2160-24011.jpg",
    },
    {
      title: "Grandblue Fantasy: Relink",
      rank: "Lvl. 15",
      hours: "10+",
      role: "Narmaya",
      image: "https://4kwallpapers.com/images/wallpapers/granblue-fantasy-3840x2160-15025.jpg",
    },
    {
      title: "Monster Hunter: Wilds",
      rank: "MR: 40",
      hours: "100+",
      role: "GunLance/Switch Axe",
      image: "https://i.redd.it/wallpaper-compilation-from-wilds-release-s-capcom-survey-v0-x1ytckrvmvle1.jpg?width=2560&format=pjpg&auto=webp&s=b34be37c51661ff48b918a0a217c353bd16909af",
    },
    {
      title: "Monster Hunter: World",
      rank: "HR: 20",
      hours: "20+",
      role: "GunLance/Switch Axe",
      image: "https://images3.alphacoders.com/107/1070888.jpg",
    },
    {
      title: "Elden Ring",
      rank: "Completed",
      hours: "160+",
      role: "Sorcerer",
      image: "https://preview.redd.it/mn7z7ia8qet71.jpg?auto=webp&s=92e01d8b1c4e0b3ffc87096be274b31fbd17a430",
    },
    {
      title: "Dark Souls III",
      rank: "Completed",
      hours: "200+",
      role: "Warrior",
      image: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg",
    },
    {
      title: "Apex Legends",
      rank: "Silver",
      hours: "320+",
      role: "Mad Maggie/Crypto",
      image: "https://www.denofgeek.com/wp-content/uploads/2021/08/Apex-Legends-Season-10-Meta.jpg?fit=1200%2C800",
    },
    {
      title: "Clair Obscur: Expedition 33",
      rank: "Incomplete",
      hours: "20+",
      role: "Verso/Lune/Sciel",
      image: "https://cdn.mos.cms.futurecdn.net/n9ZybPuhE42y6etXEuutWc.jpg",
    },
    {
      title: "Overwatch",
      rank: "Platinum V",
      hours: "300+",
      role: "Reaper",
      image: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt030bf3d606661d3c/633f5be164fe5a7d4481a16c/overwatch-section1-feature1.png?imwidth=1920&imdensity=2.625",
    },
    {
      title: "Sekiro: Shadows Die Twice",
      rank: "Completed",
      hours: "100+",
      role: "Okami",
      image: "https://4kwallpapers.com/images/wallpapers/sekiro-shadows-die-5120x2880-14176.jpg",
    },
  ],
    []
  );

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

  // Finish animation from JS timer to avoid transitionend race/bounce issues.
  useEffect(() => {
    if (!anim || anim.phase !== "animate") return;
    const target = anim.to;
    const t = window.setTimeout(() => {
      setSlide(target);
      setAnim(null);
    }, SLIDE_ANIM_MS + 20);
    return () => window.clearTimeout(t);
  }, [anim]);

  // Preload adjacent slides to reduce flicker during transition.
  useEffect(() => {
    if (!active || active.images.length < 2) return;
    const total = active.images.length;
    const nextIndex = (slide + 1) % total;
    const prevIndex = (slide - 1 + total) % total;
    [active.images[nextIndex], active.images[prevIndex]].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [active, slide]);

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

  const [hoyoActive, setHoyoActive] = useState<HoyoKey>("genshin");

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

      
        {/* ===================== TEAM SECTION ===================== */}
  <div id="team" className="scroll-mt-24 mb-20">
      <div className="text-center mb-10 mt-10">
        <h3 className={aboutTitleClass}>
          Representing Archangel Esports
        </h3>
        <div className="mx-auto mb-4 h-1 w-20 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
      </div>

      <div className="max-w-8xl mx-auto">
        {/* Outer teal frame */}
        <div className="rounded-[2.25rem] p-[2px] bg-gradient-to-r from-teal-400/70 via-cyan-300/35 to-teal-400/70 shadow-[0_0_45px_rgba(45,212,191,0.18)]">
          <Card className="rounded-[2.1rem] overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl">
            {/* HERO */}
            <div className="relative h-[440px] md:h-[540px] lg:h-[600px] bg-slate-950">
              <ImageWithFallback
                src="/images/paka.jpg"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover object-[50%_18%] scale-[1.10]"
                draggable={false}
              />

              {/* Overlay stack (matches reference + blends into panel color) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Bottom fade into the SAME panel color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2a] via-[#0b1f2a]/70 to-transparent" />

                {/* Soft vignette edges */}
                <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_35%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.25)_60%,rgba(2,6,23,0.65)_100%)]" />

                {/* Subtle teal atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 via-transparent to-transparent" />
              </div>

              {/* Logo (top-left) */}
              <div className="absolute left-6 top-6 z-10">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <img
                    src="/images/rogo.png"
                    alt=""
                    className="h-[82%] w-[82%] object-contain drop-shadow-[0_0_14px_rgba(255,215,64,0.45)]"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Center title */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center">
                  <p className="text-teal-200/90 text-xs font-semibold tracking-wide">
                    Archangel Esports
                  </p>

                  <h3 className="mt-2 text-4xl md:text-6xl font-extrabold text-white drop-shadow">
                    Archangel Esports
                  </h3>

                  <div className="mt-5 flex justify-center">
                    <span className="inline-flex items-center rounded-2xl border border-white/10 bg-teal-500/90 px-6 py-2 text-white font-bold shadow-lg shadow-teal-500/25">
                      Est. 2022 • Community Team
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LOWER PANEL (overlaps hero to remove seam) */}
            <div className="relative -mt-10  bg-[#0b1f2a]">
              <div className="p-7 md:p-8">
                <div className="grid gap-5 md:grid-cols-3">
                  {/* Stat 1 */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md px-6 py-5 hover:border-teal-400/25 transition">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center">
                        <Trophy className="text-teal-300" size={30} />
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white leading-none">
                          12+
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                          Team Championships
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md px-6 py-5 hover:border-teal-400/25 transition">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center">
                        <Users className="text-cyan-300" size={30} />
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white leading-none">
                          5
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                          Team Members
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md px-6 py-5 hover:border-teal-400/25 transition">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-teal-500/15 border border-teal-400/20 flex items-center justify-center">
                        <Medal className="text-teal-300" size={30} />
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white leading-none">
                          Top 5
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                          Regional Rank
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="h-px w-full bg-white/10" />
                  <p className="mt-6 text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                    Playing as the main fighter, contributing to team victories
                    across multiple major tournaments and representing our team
                    at international competitions.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>

        {/* ===================== MAIN GAMES SECTION ===================== */}
        <div id="main-games" className="scroll-mt-24 mb-20">
          <div className="max-w-8xl mx-auto">

            {/* ---------------- TABS ---------------- */}
            <div className="mb-8">
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-2 backdrop-blur-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {games.map((game) => {
                    const activeTab = game.key === activeKey;
                    return (
                      <button
                        key={game.key}
                        onClick={() => setActiveKey(game.key)}
                        className={[
                          "relative rounded-2xl px-4 py-3 font-semibold tracking-wide transition-all duration-200",
                          "border",
                          activeTab
                            ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 border-transparent shadow-lg shadow-teal-500/30"
                            : "bg-slate-800/60 text-white border-white/10 hover:border-teal-400/40 hover:bg-slate-800",
                        ].join(" ")}
                      >
                        {activeTab && (
                          <span className="absolute inset-0 rounded-2xl ring-2 ring-teal-300/40 pointer-events-none" />
                        )}
                        {game.tab}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ---------------- GRADIENT BORDER WRAPPER ---------------- */}
            <div className="rounded-[2.75rem] p-[4px] bg-gradient-to-r from-teal-500/60 via-cyan-400/40 to-teal-500/60 shadow-[0_0_45px_rgba(45,212,191,0.25)]">
              <div className="rounded-[2.55rem] overflow-hidden bg-slate-900/40 backdrop-blur-xl shadow-2xl">

                <div className="grid md:grid-cols-5 min-h-[540px]">

                  {/* ================= INFO PANEL ================= */}
                  <div className="md:col-span-2 bg-slate-900/50 p-8 md:border-r border-white/10">

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

                    {/* Sub Mains */}
                    <div className="mb-8">
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
                  
                  {/* ================= IMAGE / SLIDER ================= */}
<div className="md:col-span-3 relative overflow-hidden bg-slate-950">
  <div className="relative w-full h-[420px] md:h-full overflow-hidden">

    {/* Outgoing */}
    <ImageWithFallback
      src={active.images[anim ? anim.from : slide]}
      alt={active.title}
      style={{ transitionDuration: `${SLIDE_ANIM_MS}ms` }}
      className={[
        "absolute inset-0 w-full h-full object-cover",
        active.focus,
        "will-change-transform",
        "transition-transform ease-out",
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
        style={{ transitionDuration: `${SLIDE_ANIM_MS}ms` }}
        className={[
          "absolute inset-0 w-full h-full object-cover",
          active.focus,
          "will-change-transform",
          "transition-transform ease-out",
          anim.phase === "animate"
            ? "translate-x-0"
            : anim.dir === "next"
            ? "translate-x-full"
            : "-translate-x-full",
        ].join(" ")}
      />
    )}

    {/* Overlays (lighter + cleaner) */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
    <div className="absolute inset-0 [background:radial-gradient(circle_at_40%_25%,rgba(45,212,191,0.14),transparent_55%)] pointer-events-none" />

    {/* Title Chip */}
    <div className="absolute bottom-6 left-6">
      <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur">
        <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
        <div className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
          {active.title}
        </div>
      </div>
    </div>

    {/* Dots */}
    {active.images.length > 1 && (
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        {active.images.map((_, i) => (
          <button
            key={i}
            onClick={() => startSlide(i, i > currentIndex ? "next" : "prev")}
            disabled={!!anim}
            className={[
              "h-2 rounded-full transition-all disabled:opacity-50",
              i === currentIndex
                ? "w-10 bg-teal-400"
                : "w-4 bg-white/30 hover:bg-white/45",
            ].join(" ")}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    )}

    {/* Arrows */}
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

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Other Games */}
        <div id="other-games" className="scroll-mt-24 mb-20">
          <h3 className={`${aboutTitleClass} text-center`}>Other Games</h3>
          <div className="mx-auto mb-4 h-1 w-20 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
          <p className="text-center text-gray-300 mb-10">
            Additional competitive and casual titles I play
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {otherGames.map((game) => (
              <OtherGameCard key={game.title} game={game} />
            ))}
          </div>
        </div>

        {/* Steam Profile & Social Media */}
        <div id="profiles" className="scroll-mt-24 mb-20">
          <h3 className={`${aboutTitleClass} text-center`}>
            Gaming Profiles & Social Media
          </h3>
          <div className="mx-auto mb-10 h-1 w-20 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />

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
                    <span className="text-white font-semibold">90</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Total Hours:</span>
                    <span className="text-white font-semibold">5,000+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Level:</span>
                    <span className="text-white font-semibold">10</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Achievements:</span>
                    <span className="text-white font-semibold">909</span>
                  </p>
                </div>
                    <Button
                      className="w-full mt-6 h-11 bg-blue-700 hover:bg-blue-800"
                      onClick={() =>
                        window.open(
                          "https://www.hoyolab.com/accountCenter/postList?id=11846094"
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
                    <p className="text-teal-400">@SenGouku</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-gray-300">
                  <p className="flex justify-between">
                    <span>Followers:</span>
                    <span className="text-white font-semibold">22</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Stream Schedule:</span>
                    <span className="text-white font-semibold">Mon-Fri 7PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Content:</span>
                    <span className="text-white font-semibold">Fighting Games / RPG</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-teal-400 font-semibold">Inactive</span>
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
                                  ["UID", "801498652","text-cyan-300"],
                                  ["Achievements", "587"],
                                  ["Favorites", "Arlecchino/Shenhe"],
                                ],
                              }
                            : k === "hsr"
                            ? {
                                icon: "/images/star.webp",
                                title: "Honkai: Star Rail",
                                rows: [
                                  ["UID", "802923246","text-cyan-300"],
                                  ["Achievements", "296"],
                                  ["Favorites", "Black Swan / Kafka"],
                                ],
                              }
                            : {
                                icon: "/images/zzz.webp",
                                title: "Zenless Zone Zero",
                                rows: [
                                  ["UID", "1302497095","text-cyan-300"],
                                  ["Achievements", "326"],
                                  ["Favorites", "Jane Doe / Tsukishiro Yanagi"],
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
                        teamCols={HOYO_TEAMS[hoyoActive].teamCols}
                      />
                      <TeamPanel
                        title="Second Team"
                        members={HOYO_TEAMS[hoyoActive].team2Members}
                        teamCols={HOYO_TEAMS[hoyoActive].teamCols}
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
                <h4 className={`${aboutTitleClass} text-center`}>
                  Connect on Social Media
                </h4>
                <div className="mx-auto mb-4 h-1 w-20 rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
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
