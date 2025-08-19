import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400 font-inter">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500 fill-current" size={20} />
            </motion.div>
            <span className="text-gray-400 font-inter">and</span>
            <Code className="text-primary-cyan" size={20} />
            <span className="text-gray-400 font-inter">by</span>
            <span className="gradient-text font-semibold font-poppins">Akhmad Faizal</span>
          </div>
          
          <p className="text-gray-500 text-sm font-inter">
            &copy; 2024 Akhmad Faizal. All rights reserved.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
          <p className="text-xs text-gray-600 font-inter">
              Designed with futuristic aesthetics and built with modern technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;