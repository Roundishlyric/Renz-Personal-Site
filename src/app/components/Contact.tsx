import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a mock implementation)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-red-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900 font-medium">your.email@example.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-red-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900 font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-red-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">City, Country</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Connect With Me</h3>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin size={20} />
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github size={20} />
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <Facebook size={20} />
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-8 border-2 border-red-200 shadow-xl">
            <h3 className="text-2xl mb-6 text-gray-900">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input placeholder="Your Name" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Your message here..." rows={5} className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                size="lg"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}