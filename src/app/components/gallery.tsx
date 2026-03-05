import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const photos = [
    {
      src: "/images/prof.png",
      title: "Profile",
      category: "Personal",
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      title: "Outdoor Adventure",
      category: "Travel",
    },
    {
      src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&q=80",
      title: "Hiking Trip",
      category: "Hobbies",
    },
    {
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80",
      title: "City Exploration",
      category: "Travel",
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      title: "Team Event",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
      title: "Friends Gathering",
      category: "Personal",
    },
    {
      src: "/images/yok.png",
      title: "Beach Day",
      category: "Travel",
    },
    {
      src: "/images/work.jpg",
      title: "Working Session",
      category: "Work",
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      title: "Casual Portrait",
      category: "Personal",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Photo Gallery
          </h2>

          <div className="mt-4 w-24 h-1 bg-red-700 mx-auto rounded-full"></div>

          <p className="text-gray-500 mt-6 text-lg">
            Moments and memories from my journey
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">

                {/* IMAGE */}
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* CATEGORY BADGE */}
                <div className="absolute top-3 left-3 bg-red-700 px-3 py-1 text-xs rounded-full font-medium text-white shadow">
                  {photo.category}
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/90 via-red-700/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-lg">
                      {photo.title}
                    </p>
                  </div>

                </div>

              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}
