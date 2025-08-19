import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <ThreeBackground />

      <div className="relative z-10 text-center px-6">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0px 0px 15px #00ffff55",
                "0px 0px 35px #00ffffaa",
                "0px 0px 15px #00ffff55"
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary-cyan overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Akhmad Faizal"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-poppins tracking-tight"
        >
          Hello! I'm{" "}
          <span className="bg-gradient-to-r from-primary-cyan to-primary-purple bg-clip-text text-transparent">
            Akhmad Faizal
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 font-inter"
        >
          Turning Ideas into{" "}
          <span className="text-primary-cyan font-semibold">
            Digital Reality
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #00ffff88" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-primary-cyan text-primary-cyan rounded-full font-semibold transition-all duration-300"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #a020f088" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-cyan to-primary-purple text-black rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            <Mail size={20} />
            Hire Me
          </motion.a>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-primary-cyan hover:text-primary-purple transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-1.5 h-1.5 bg-primary-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
