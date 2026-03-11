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
      className="scroll-mt-8 py-10 bg-gradient-to-br from-red-50 via-white to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Hobbies & Interests
          </h2>

          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-transparent bg-white transition-all duration-500 hover:shadow-xl hover:border-red-700"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/0 via-red-700/10 to-red-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

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

        <div className="mt-10 text-center">
          <Card className="max-w-4xl mx-auto border-2 border-transparent bg-white transition-shadow hover:shadow-xl hover:border-red-700">
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">Balance is Key</h3>

              <p className="text-lg text-gray-700">
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
