import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary-cyan hover:text-primary-dark transition-all duration-300 magnetic"
    >
      {darkMode ? (
        <Sun className="text-primary-cyan" size={20} />
      ) : (
        <Moon className="text-primary-purple" size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;