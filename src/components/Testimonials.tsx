import React from 'react';
import { QuoteIcon } from 'lucide-react';
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}
const Testimonials = () => {
  const testimonials: Testimonial[] = [{
    id: 1,
    quote: 'Working with this AI engineer transformed our business. The custom GenAI solution they built has automated 70% of our content creation process, saving us countless hours and resources.',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechVision Inc.'
  }, {
    id: 2,
    quote: "Exceptional expertise in AI implementation. They didn't just understand the technology – they understood our business needs and delivered a solution that exceeded our expectations.",
    author: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Systems'
  }, {
    id: 3,
    quote: 'The AI-powered analytics dashboard developed for our team has given us insights we never thought possible. Their technical skills combined with strategic thinking make them an invaluable partner.',
    author: 'Priya Patel',
    role: 'Head of Analytics',
    company: 'Global Insights'
  }];
  return <section id="testimonials" className="py-20 bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-lime-400/30 rounded-full bg-lime-400/10 text-lime-400 text-sm">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-lime-400">Clients Say</span>
          </h2>
          <p className="text-gray-300">
            Hear from organizations that have transformed their operations with
            my AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-lime-400/30">
              <QuoteIcon size={36} className="text-lime-400/30 mb-4" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;