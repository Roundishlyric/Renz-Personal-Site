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

    window.location.href = `mailto:renzdanniel63@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/renz-danniel-rapanut-692902210',
      className: 'border border-black/10 bg-[#171717] hover:bg-red-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Roundishlyric',
      className: 'border border-black/10 bg-[#171717] hover:bg-red-700',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/Roundishlyric/',
      className: 'border border-black/10 bg-[#171717] hover:bg-red-700',
    },
  ];

  return (
    <section id="contact" className="editorial-ring-section editorial-ring-top-left scroll-mt-8 bg-[#f4f1eb] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left sm:mb-16">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">Get in touch</h2>
          <div className="mb-4 h-1 w-20 bg-red-700"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-lg bg-red-700 p-2 sm:p-3 text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a className="break-all font-medium text-gray-900 hover:text-red-700" href="mailto:renzdanniel63@gmail.com">renzdanniel63@gmail.com</a>
                    </div>
                  </div>
                </Card>

                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-lg bg-red-700 p-2 sm:p-3 text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a className="break-all font-medium text-gray-900 hover:text-red-700" href="tel:+639478178886">(+63) 9478178886</a>
                    </div>
                  </div>
                </Card>

                <Card className="border-2 border-transparent bg-white p-4 transition-shadow hover:shadow-xl hover:border-red-700">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-lg bg-red-700 p-2 sm:p-3 text-white">
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
                    asChild
                    size="lg"
                    className={`h-auto min-h-16 w-full justify-start gap-3 px-4 py-4 text-left text-sm font-semibold text-white shadow-none transition-colors ${className}`}
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon size={30} />
                      <span>{label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-2 border-transparent bg-white p-5 sm:p-8 transition-shadow hover:shadow-xl hover:border-red-700">
            <h3 className="text-2xl mb-6 text-gray-900">Send a Message</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Submitting opens a pre-filled message in your default email app so you can review it before sending.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your Name"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  value={formData.name}
                  onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  value={formData.email}
                  onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
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
                Continue to email
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
