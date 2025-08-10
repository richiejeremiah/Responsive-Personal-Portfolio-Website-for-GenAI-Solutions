import React, { useState } from 'react';
const About = () => {
  const [hoverSide, setHoverSide] = useState<'none' | 'left' | 'right'>('none');
  return <section id="about" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative min-h-[500px] flex flex-col md:flex-row">
          {/* Split Identity Design */}
          <div className={`md:w-1/2 p-8 transition-all duration-500 relative z-10 ${hoverSide === 'right' ? 'md:w-1/3 opacity-70' : hoverSide === 'left' ? 'md:w-2/3' : 'md:w-1/2'}`} onMouseEnter={() => setHoverSide('left')} onMouseLeave={() => setHoverSide('none')}>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-transparent opacity-20 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                <span className="text-lime-400">Designer</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Specialized in crafting intuitive user interfaces for AI-powered
                applications. I transform complex AI capabilities into
                accessible, elegant user experiences.
              </p>
              <div className="border border-lime-400/30 bg-lime-400/5 rounded-lg p-4 max-w-md">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">
                      UI/UX Design for AI Applications
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Data Visualization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lime-400 mr-2">✓</span>
                    <span className="text-gray-300">Responsive Web Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 p-8 transition-all duration-500 relative z-10 ${hoverSide === 'left' ? 'md:w-1/3 opacity-70' : hoverSide === 'right' ? 'md:w-2/3' : 'md:w-1/2'}`} onMouseEnter={() => setHoverSide('right')} onMouseLeave={() => setHoverSide('none')}>
            <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-transparent opacity-20 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                <span className="text-purple-400">{'<Developer>'}</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Expert in implementing AI solutions and integrating large
                language models into applications. I build robust, scalable
                systems that leverage cutting-edge AI technologies.
              </p>
              <div className="border border-purple-400/30 bg-purple-400/5 rounded-lg p-4 max-w-md">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">
                      LLM Integration & Fine-tuning
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">
                      React & TypeScript Development
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">AI API Implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Profile Image - Positioned in center with improved positioning for responsiveness */}
          <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800 z-20 mt-4 md:mt-0">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" alt="Dr Jay" className="w-full h-full object-cover" />
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-purple-500/20 mix-blend-overlay"></div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24">
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">5+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">4</h3>
            <p className="text-gray-400">Industries Served</p>
          </div>
          <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lime-400 text-3xl font-bold mb-2">∞</h3>
            <p className="text-gray-400">Possibilities</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;