import React, { useEffect, useState, useRef } from 'react';
interface Company {
  id: number;
  name: string;
  logo: string;
}
const CompanyLogos = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const companies: Company[] = [{
    id: 1,
    name: 'NHS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/NHS-Logo.svg/1200px-NHS-Logo.svg.png'
  }, {
    id: 2,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  }, {
    id: 3,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
  }, {
    id: 4,
    name: 'University of Oxford',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png'
  }, {
    id: 5,
    name: 'Imperial College London',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Imperial_College_London_crest.svg/1200px-Imperial_College_London_crest.svg.png'
  }, {
    id: 6,
    name: 'Royal Society of Medicine',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Royal_Society_of_Medicine_logo.svg/1200px-Royal_Society_of_Medicine_logo.svg.png'
  }];
  // Duplicate the companies array for infinite scroll effect
  const allCompanies = [...companies, ...companies];
  useEffect(() => {
    if (!scrollRef.current || !isAutoScrolling) return;
    let animationId: number;
    let startTime: number;
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!scrollRef.current) return;
      const elapsed = timestamp - startTime;
      const scrollAmount = elapsed * 0.02; // Adjust speed here
      scrollRef.current.scrollLeft = scrollAmount % scrollRef.current.scrollWidth;
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAutoScrolling]);
  return <section id="companies" className="py-20 bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-lime-400/30 rounded-full bg-lime-400/10 text-lime-400 text-sm">
            Trusted By
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Companies I've{' '}
            <span className="text-lime-400">Collaborated With</span>
          </h2>
          <p className="text-gray-300">
            I've had the privilege of working with these esteemed organizations
            to deliver innovative solutions.
          </p>
        </div>
        {/* Logo Slider */}
        <div className="relative overflow-hidden py-10 px-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-black after:to-transparent" onMouseEnter={() => setIsAutoScrolling(false)} onMouseLeave={() => setIsAutoScrolling(true)}>
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {allCompanies.map((company, index) => <div key={`${company.id}-${index}`} className="flex-shrink-0 bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-lime-400/30 transition-all duration-300 w-48 h-48 flex items-center justify-center mx-4">
                <img src={company.logo} alt={company.name} className="max-w-full max-h-20 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300" />
              </div>)}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex space-x-1">
            {Array.from({
            length: 6
          }).map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-lime-400' : 'bg-gray-700'}`}></div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default CompanyLogos;