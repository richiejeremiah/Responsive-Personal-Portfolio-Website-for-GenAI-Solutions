import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-36 md:pb-40 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Animated reveal blocks */}
          <div
            className={`relative overflow-hidden mb-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          >
            <div
              className={`absolute bg-white h-full ${isLoaded ? 'w-0' : 'w-full'} right-0 transition-all duration-700 delay-300`}
            />
            <small className="text-lime-400 text-sm font-mono border border-lime-400/30 px-3 py-1 rounded-full bg-lime-400/10 inline-flex items-center">
              <span className="mr-1">Start</span>
              <span className="text-xs opacity-80">/&gt;</span>
            </small>
          </div>

          <div
            className={`relative overflow-hidden mb-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          >
            <div
              className={`absolute bg-lime-400/20 h-full ${isLoaded ? 'w-0' : 'w-full'} right-0 transition-all duration-700 delay-500`}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, my name is <strong className="text-lime-400">Dr Jay</strong>
            </h1>
          </div>

          <div
            className={`relative overflow-hidden mb-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          >
            <div
              className={`absolute bg-lime-400/20 h-full ${isLoaded ? 'w-0' : 'w-full'} right-0 transition-all duration-700 delay-700`}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I <em className="font-serif font-normal not-italic">design</em>
            </h1>

            {/* Removed the angle brackets around “develop” */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight flex items-center flex-wrap">
              <span className="mr-2">and</span>
              <span className="font-mono inline-flex items-center relative px-2 my-1">
                develop
              </span>
            </h1>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="animate-pulse text-lime-400">solutions</span>
            </h1>
          </div>

          <div
            className={`relative overflow-hidden mb-8 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          >
            <div
              className={`absolute bg-white h-full ${isLoaded ? 'w-0' : 'w-full'} right-0 transition-all duration-700 delay-900`}
            />
            <p className="text-xl md:text-2xl text-gray-300">
              Available for projects & consultations —{' '}
              <span className="text-lime-400 font-semibold">$120/hour</span>
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-1000`}
          >
            <Button primary href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation <ArrowRightIcon size={18} className="ml-2" />
            </Button>
            <Button href="#projects">View My Projects</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator – pushed lower and pointer-events disabled so it never blocks clicks */}
      <div
        className={`pointer-events-none absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-all duration-700 delay-1200`}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-lime-400/30 rounded-full flex justify-center mb-2">
          <div className="w-1.5 h-3 bg-lime-400/50 rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-sm text-lime-400/50 uppercase tracking-widest">Scroll</span>
      </div>

      {/* Direction Arrow */}
      <a
        href="#about"
        className={`absolute bottom-10 right-5 md:right-10 w-12 h-12 flex items-center justify-center border border-lime-400/30 rounded-full text-lime-400 transform rotate-90 hover:bg-lime-400/10 transition-all duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } delay-1200`}
        aria-label="Jump to About"
      >
        <span className="text-2xl">→</span>
      </a>
    </section>
  );
};

export default Hero;
