import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold flex items-center">
          <span className="text-lime-400 mr-1">Dr</span>
          <span>Jay</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Companies', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-lime-400 transition-colors duration-300">
                {item}
              </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 py-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4 px-4">
            {['About', 'Skills', 'Projects', 'Companies', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-lime-400 transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>)}
          </nav>
        </div>}
    </header>;
};
export default Header;