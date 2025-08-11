// src/components/Contact.tsx
import Button from './Button';
import { MailIcon, LinkedinIcon, PhoneIcon, SendIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info & CTA */}
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-lime-400/30 rounded-full bg-lime-400/10 text-lime-400 text-sm">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let&apos;s Discuss Your <span className="text-lime-400">AI Project</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Have a project in mind or interested in exploring how AI can transform your business?
                I&apos;m here to help you navigate the possibilities and build solutions that deliver real value.
              </p>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-lg flex items-center justify-center mr-4">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:drlittlekids@gmail.com" className="text-white hover:text-lime-400 transition-colors duration-300">
                      drlittlekids@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-lg flex items-center justify-center mr-4">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/dr-jeremiah-richard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-lime-400 transition-colors duration-300"
                    >
                      linkedin.com/in/dr-jeremiah-richard
                    </a>
                  </div>
                </div>

                {/* Phone (replaces GitHub) */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-lg flex items-center justify-center mr-4">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+18622307479" className="text-white hover:text-lime-400 transition-colors duration-300">
                      (862) 230-7479
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-lime-400/5 border border-lime-400/20 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Book a Free Consultation</h3>
                <p className="text-gray-300 mb-4">
                  Schedule a 15–30 minute call to discuss your project needs and explore potential solutions.
                </p>
                <Button
                  primary
                  href="https://calendly.com/doctor-jay/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project or inquiry"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-transparent text-white resize-none"
                    />
                  </div>
                  <Button primary className="w-full">
                    Send Message <span className="ml-2">🚀</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
