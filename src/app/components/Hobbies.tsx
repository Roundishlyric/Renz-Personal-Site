import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hobbies() {
  const hobbies = [
    {
      title: 'Personal Coding',
      description:
        'Building personal projects and experimenting with new technologies and frameworks',
      image: '/images/yes.png',
    },
    {
      title: 'Hardware Exploration',
      description:
        'Exploring computer hardware, components, and how systems work at a deeper level',
      image: '/images/hard.jpg',
    },
    {
      title: 'Networking & Systems',
      description:
        'Learning about computer networks, system architecture, and modern infrastructure',
      image: '/images/TEK.png',
    },
    {
      title: 'Digital Art',
      description:
        'Creating digital illustrations and experimenting with visual styles and design tools',
      image: '/images/ag.png',
    },
    {
      title: 'Competitive & Casual Gaming',
      description:
        'Participating in fighting game tournaments and enjoying competitive and casual gameplay',
      image: '/images/comppo.png',
    },
    {
      title: 'Japanese Media',
      description:
        'Exploring stories through manga, anime, games, and other forms of Japanese media',
      image: '/images/ani.png',
    },
    {
      title: 'Graphic Design',
      description:
        'Designing layouts, visuals, and digital graphics for creative and technical projects',
      image: '/images/grap.png',
    },
    {
      title: 'Building Model Kits',
      description:
        'Assembling and customizing model kits, focusing on precision and creativity',
      image: '/images/gun.png',
    },
    {
      title: 'Music',
      description:
        'Playing guitar and drums while exploring different musical genres and styles',
      image: '/images/git.png',
    },
    {
      title: 'Photography',
      description:
        'Capturing moments and developing creativity through visual storytelling',
      image: '/images/pho.png',
    },
    {
      title: 'Language Learning',
      description:
        'Studying Japanese and Spanish to explore new cultures and improve communication',
      image: '/images/jap.jpg',
    },
    {
      title: 'Travel & Exploration',
      description:
        'Exploring new places, cultures, and experiences for inspiration and personal growth',
      image: '/images/aki.png',
    },
  ];

  return (
    <section
      id="hobbies"
      className="py-10 bg-gradient-to-br from-red-50 via-white to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Hobbies & Interests
          </h2>

          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            What I enjoy doing in my free time
          </p>
        </div>

        {/* HOBBIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-white/20 
              bg-white/70 backdrop-blur-xl 
              transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl 
              hover:shadow-red-400/40 rounded-xl"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-700/20 via-red-500/10 to-transparent"></div>

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl text-white font-semibold">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom message card */}
        <div className="mt-10 text-center">
          <Card className="bg-gradient-to-r from-red-700 to-red-700 text-white max-w-4xl mx-auto rounded-xl">
            <div className="p-8">
              <h3 className="text-2xl mb-4">Balance is Key</h3>

              <p className="text-lg text-red-100">
                I believe in maintaining a healthy work-life balance. These
                hobbies help me stay creative, motivated, and bring fresh
                perspectives to my academic and professional work.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}
