import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '#about' },
  { name: 'Achievements', link: '#achievements' },
  { name: 'Highlights', link: '#highlights' },
  { name: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 backdrop-blur-lg transition-all duration-300',
        'bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-blue-900/60 border-b border-purple-700/50 shadow-lg'
      )}
    >
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-wider">
          <span className="text-purple-400">PRO</span>PLAYER
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="relative text-lg text-white hover:text-purple-300 transition-colors duration-300 group"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white hover:bg-purple-700/30"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white hover:bg-purple-700/30 mr-2"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-purple-700/30">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-gradient-to-b from-purple-900/90 to-indigo-900/90 border-b border-purple-700/50 shadow-lg md:hidden flex flex-col items-center py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-xl text-white hover:text-purple-300 transition-colors duration-300 w-full text-center py-2"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
