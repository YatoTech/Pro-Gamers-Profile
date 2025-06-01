import { Github, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8 mt-12 border-t border-purple-700/50 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
            <Twitter className="h-7 w-7" />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
            <Youtube className="h-7 w-7" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors duration-300">
            <Instagram className="h-7 w-7" />
          </a>
        </div>
        <p className="text-sm text-purple-200">
          &copy; {new Date().getFullYear()} [Nama Pro Player]. All rights reserved.
        </p>
        <p className="text-xs text-purple-300 mt-2">
          Designed with passion for the game.
        </p>
      </div>
    </footer>
  );
}
