import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hobbies() {
  const hobbies = [
    {
      title: 'Competitive Gaming',
      description: 'Fighting game tournaments and esports competitions',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    },
    {
      title: 'Reading',
      description: 'Tech blogs, sci-fi novels, and programming books',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    },
    {
      title: 'Music',
      description: 'Playing guitar and discovering new genres',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    },
    {
      title: 'Photography',
      description: 'Capturing moments and exploring visual creativity',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
    },
    {
      title: 'Fitness',
      description: 'Regular workouts and staying healthy',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    },
    {
      title: 'Traveling',
      description: 'Exploring new places and cultures',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    },
    {
      title: 'Coffee Enthusiast',
      description: 'Trying different brewing methods and cafes',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    },
    {
      title: 'Digital Art',
      description: 'UI design and creative digital projects',
      image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&q=80',
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">What I enjoy doing in my free time</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl mb-1 text-white font-semibold">{hobby.title}</h3>
                  <p className="text-gray-200 text-sm">{hobby.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl mb-4">Balance is Key</h3>
              <p className="text-lg text-red-100">
                I believe in maintaining a healthy work-life balance. These hobbies help me stay creative, 
                motivated, and bring fresh perspectives to my academic and professional work.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}