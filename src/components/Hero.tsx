// src/components/Hero.tsx
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRightIcon } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/doctor-jay/30min';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['workflows', 'agents', 'apps', 'solutions'];

  // Hero animations
  useEffect(() => {
    setIsLoaded(true);
    const t = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  // Load Calendly assets once
  useEffect(() => {
    // CSS
    const linkId = 'calendly-widget-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // JS
    const scriptId = 'calendly-widget-js';
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing && window.Calendly) {
      setCalendlyReady(true);
      return;
    }

    if (!existing) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setCalendlyReady(true);
      script.onerror = () => setCalendlyReady(false);
      document.body.appendChild(script);
    } else {
      // script present but Calendly not ready yet—poll briefly
      const start = Date.now();
      const i = setInterval(() => {
        if (window.Calendly) {
          setCalendlyReady(true);
          clearInterval(i);
        } else if (Date.now() - start > 4000) {
          clearInterval(i);
        }
      }, 100);
      return () => clearInterval(i);
    }
  }, []);

  // Init Calendly when modal opens
  useEffect(() => {
    if (!isCalendlyOpen) return;
    const parent = calendlyContainerRef.current;
    if (!parent) return;

    // Clear any previous content
    parent.innerHTML = '';

    if (calendlyReady && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: `${CALENDLY_URL}?hide_gdpr_banner=1`,
        parentElement: parent,
      });
    } else {
      // Fallback: plain iframe if Calendly object not ready in time
      const iframe = document.createElement('iframe');
      iframe.src = `${CALENDLY_URL}?hide_gdpr_banner=1&embed_domain=${window.location.hostname}&embed_type=Inline`;
      iframe.style.width = '100%';
      iframe.style.height = '700px';
      iframe.frameBorder = '0';
      parent.appendChild(iframe);
    }
  }, [isCalendlyOpen, calendlyReady]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-36 md:pb-40 overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`relative overflow-hidden py-1 mb-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <small className="text-lime-400 text-sm font-mono border border-lime-400/30 px-3 py-1 rounded-full bg-lime-400/10 inline-flex items-center">
              Solution Engineer
            </small>
          </div>

          {/* Headline */}
          <div className={`relative overflow-hidden py-1 mb-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug">
              Hi, my name is <strong className="text-lime-400">Dr Jay</strong>
            </h1>
          </div>

          <div className={`relative overflow-hidden py-1 mb-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug">I design & develop</h1>
          </div>

          <div className={`relative overflow-hidden py-1 mb-12 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug">
              <span className="text-lime-400">AI</span>{' '}
              <span key={wordIndex} className="text-lime-400 transition-opacity duration-500 ease-in-out inline-block">
                {words[wordIndex]}
              </span>
            </h1>
          </div>

          {/* Rate */}
          <p className={`text-lg text-white mb-8 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
            Available for projects & consultations — <span className="font-semibold text-lime-400">$89/hour</span>
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-700`}>
            <Button primary onClick={() => setIsCalendlyOpen(true)}>
              Book a Free Consultation <ArrowRightIcon size={18} className="ml-2" />
            </Button>
            <Button href="#projects">View My Projects</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (lower so it doesn't overlap buttons) */}
      <div
        className={`pointer-events-none absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-all duration-700 delay-900`}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-lime-400/30 rounded-full flex justify-center mb-2">
          <div className="w-1.5 h-3 bg-lime-400/50 rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-sm text-lime-400/50 uppercase tracking-widest">Scroll</span>
      </div>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl relative">
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <div ref={calendlyContainerRef} style={{ minWidth: '320px', height: '700px' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
