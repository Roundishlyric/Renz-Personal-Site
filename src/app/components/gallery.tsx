import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      title: 'Profile',
      category: 'Personal',
    },
    {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
      title: 'Outdoor Adventure',
      category: 'Travel',
    },
    {
      src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&q=80',
      title: 'Hiking Trip',
      category: 'Hobbies',
    },
    {
      src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80',
      title: 'City Exploration',
      category: 'Travel',
    },
    {
      src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
      title: 'Team Event',
      category: 'Events',
    },
    {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      title: 'Friends Gathering',
      category: 'Personal',
    },
    {
      src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80',
      title: 'Beach Day',
      category: 'Travel',
    },
    {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      title: 'Working Session',
      category: 'Work',
    },
    {
      src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
      title: 'Casual Portrait',
      category: 'Personal',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Photo Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Moments and memories from my journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold mb-1">{photo.title}</p>
                    <p className="text-gray-300 text-sm">{photo.category}</p>
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
