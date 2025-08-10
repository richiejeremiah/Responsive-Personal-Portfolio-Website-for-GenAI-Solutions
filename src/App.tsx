import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CompanyLogos from './components/CompanyLogos';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompanyLogos />
        <Contact />
      </main>
      <Footer />
    </div>;
}