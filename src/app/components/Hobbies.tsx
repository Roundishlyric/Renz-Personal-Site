import { Gamepad2, Music, Book, Plane, Camera, Dumbbell, Coffee, Palette } from 'lucide-react';
import { Card } from './ui/card';

export function Hobbies() {
  const hobbies = [
    {
      icon: Gamepad2,
      title: 'Competitive Gaming',
      description: 'Fighting game tournaments and esports competitions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Book,
      title: 'Reading',
      description: 'Tech blogs, sci-fi novels, and programming books',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Playing guitar and discovering new genres',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and exploring visual creativity',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Regular workouts and staying healthy',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Plane,
      title: 'Traveling',
      description: 'Exploring new places and cultures',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Coffee,
      title: 'Coffee Enthusiast',
      description: 'Trying different brewing methods and cafes',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: Palette,
      title: 'Digital Art',
      description: 'UI design and creative digital projects',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">What I enjoy doing in my free time</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200"
              >
                <div className={`h-2 bg-gradient-to-r ${hobby.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 bg-gradient-to-br ${hobby.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">{hobby.title}</h3>
                    <p className="text-gray-600">{hobby.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl mb-4">Balance is Key</h3>
              <p className="text-lg text-blue-100">
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
