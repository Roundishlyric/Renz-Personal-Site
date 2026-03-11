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

    const subject = encodeURIComponent(`Message from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=renzdanniel63@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'renzdanniel63@gmail.com',
      link: 'mailto:renzdanniel63@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 9478178886',
      link: 'mob:+639478178886',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Quezon City, Philippines',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/renz-danniel-rapanut-692902210',
      className: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Roundishlyric',
      className: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/Roundishlyric/',
      className: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
    },
  ];

  return (
    <section id="contact" className="scroll-mt-8 py-10 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-red-700 p-3 text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900 font-medium">renzdanniel63@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-red-700 p-3 text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900 font-medium">(+63) 9478178886</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-red-700 p-3 text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">Quezon City, Philippines</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Connect With Me</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {socialLinks.map(({ icon: Icon, label, href, className }) => (
                  <Button
                    key={label}
                    size="lg"
                    className={`h-auto min-h-20 w-full justify-start gap-4 px-5 py-4 text-left text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] ${className}`}
                    onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                  >
                    <Icon size={30} />
                    <span>{label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-2 border-transparent bg-white p-8 transition-shadow hover:shadow-xl hover:border-red-700">
            <h3 className="text-2xl mb-6 text-gray-900">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input
                  placeholder="Your Name"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  value={formData.name}
                  onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  value={formData.email}
                  onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  rows={5}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  value={formData.message}
                  onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-red-700 text-white hover:bg-red-800"
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
