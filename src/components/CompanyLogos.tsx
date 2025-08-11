// src/components/CompanyLogos.tsx
import { useEffect, useState, useRef } from 'react';

// Local logo assets
import logo30 from '../assets/30.png';
import logo31 from '../assets/31.png';
import logo32 from '../assets/32.png';
import logo33 from '../assets/33.png';
import logo34 from '../assets/34.png';

interface Company {
  id: number;
  name: string;
  logo: string;
}

const CompanyLogos = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Replace remote logos with your local assets
  const companies: Company[] = [
    { id: 30, name: 'Client 30', logo: logo30 },
    { id: 31, name: 'Client 31', logo: logo31 },
    { id: 32, name: 'Client 32', logo: logo32 },
    { id: 33, name: 'Client 33', logo: logo33 },
    { id: 34, name: 'Client 34', logo: logo34 },
  ];

  // Duplicate for seamless looping
  const allCompanies = [...companies, ...companies];

  useEffect(() => {
    if (!scrollRef.current || !isAutoScrolling) return;

    let animationId = 0;
    let startTime = 0;

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const el = scrollRef.current;
      if (!el) return;

      const elapsed = timestamp - startTime;
      const speed = 0.02; // Adjust speed
      const scrollAmount = elapsed * speed;

      el.scrollLeft = scrollAmount % el.scrollWidth;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isAutoScrolling]);

  return (
    <section id="companies" className="py-20 bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-lime-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-lime-400/30 rounded-full bg-lime-400/10 text-lime-400 text-sm">
            Trusted By
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Companies I&apos;ve <span className="text-lime-400">Collaborated With</span>
          </h2>
          <p className="text-gray-300">
            Partnerships across healthcare, logistics, fintech, and NGOs to deliver production-grade AI.
          </p>
        </div>

        {/* Logo Slider */}
        <div
          className="relative overflow-hidden py-10 px-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-black after:to-transparent"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            aria-label="Company logos marquee"
          >
            {allCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-lime-400/30 transition-all duration-300 w-48 h-48 flex items-center justify-center mx-4"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-20 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex space-x-1">
            {Array.from({ length: companies.length }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-lime-400' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
