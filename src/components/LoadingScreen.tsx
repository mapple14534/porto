import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-center"
      >
        <div className="loading-text font-poppins">AF</div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-primary-cyan to-primary-purple mt-4 rounded-full"
        />
        <p className="text-primary-cyan mt-4 text-lg font-inter">
          Initializing Digital Reality...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;