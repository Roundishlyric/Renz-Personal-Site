import {
  ExternalLink,
  Twitch,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OtherGames() {
  // Replace with your real links
  const links = {
    steam: "https://steamcommunity.com/profiles/76561199068794358/",
    twitch: "https://www.twitch.tv/YOUR_TWITCH",
    youtube: "https://www.youtube.com/@YOUR_CHANNEL",
    instagram: "https://www.instagram.com/YOUR_IG",
    facebook: "https://www.facebook.com/YOUR_FACEBOOK",
  };

  const games = [
    {
      title: "Valorant",
      genre: "Tactical FPS",
      description:
        "Played casually and with friends, focusing on aim and positioning.",
      image: "/images/valorant.jpg",
    },
    {
      title: "League of Legends",
      genre: "MOBA",
      description:
        "Experience in team coordination, macro decision making and mechanics.",
      image: "/images/lol.jpg",
    },
    {
      title: "Monster Hunter",
      genre: "Action RPG",
      description:
        "Cooperative gameplay emphasizing preparation, reaction and patience.",
      image: "/images/mh.jpg",
    },
    {
      title: "Rhythm Games",
      genre: "Rhythm",
      description: "Improves timing, reaction speed and execution consistency.",
      image: "/images/rhythm.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-6">Other Games I Play</h2>

        {/* Game Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <Card
              key={index}
              className="bg-slate-800 border border-slate-700 overflow-hidden hover:border-teal-500 transition-all group"
            >
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl">{game.title}</h3>
                <Badge className="bg-teal-600">{game.genre}</Badge>
                <p className="text-sm text-gray-300">{game.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Steam + Socials */}
        <div className="max-w-3xl mx-auto mt-12 mb-10">
          <Card className="bg-slate-800 border border-slate-700 p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">Steam</p>
                <p className="text-sm text-gray-300">
                  Check my library, playtime and activity.
                </p>
              </div>

              <a
                href={links.steam}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2 font-semibold text-slate-900 hover:bg-teal-500 transition"
              >
                View Steam Profile <ExternalLink size={18} />
              </a>
            </div>

            {/* Follow Me */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm text-gray-300 mb-3">Follow me</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={links.twitch}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-4 py-2 border border-slate-700 hover:border-teal-500 transition"
                >
                  <Twitch size={18} className="text-teal-400" />
                  Twitch
                </a>

                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-4 py-2 border border-slate-700 hover:border-teal-500 transition"
                >
                  <Youtube size={18} className="text-teal-400" />
                  YouTube
                </a>

                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-4 py-2 border border-slate-700 hover:border-teal-500 transition"
                >
                  <Instagram size={18} className="text-teal-400" />
                  Instagram
                </a>

                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-4 py-2 border border-slate-700 hover:border-teal-500 transition"
                >
                  <Facebook size={18} className="text-teal-400" />
                  Facebook
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
