import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            John Doe
          </motion.h1>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            <a
              href="#about"
              className="block hover:text-purple-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="block hover:text-purple-600 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-purple-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="mailto:contact@example.com">
                <Mail className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}