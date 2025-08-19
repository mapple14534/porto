import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
  ];

  const skills = {
    frontend: [
      { name: 'HTML', level: 95, rating: 'Expert' },
      { name: 'CSS', level: 90, rating: 'Expert' },
      { name: 'JavaScript', level: 85, rating: 'Advanced' },
      { name: 'React', level: 80, rating: 'Advanced' },
      { name: 'Vue.js', level: 75, rating: 'Intermediate' },
      { name: 'TypeScript', level: 70, rating: 'Intermediate' },
    ],
    backend: [
      { name: 'PHP', level: 85, rating: 'Advanced' },
      { name: 'Node.js', level: 75, rating: 'Intermediate' },
      { name: 'MySQL', level: 80, rating: 'Advanced' },
      { name: 'MongoDB', level: 70, rating: 'Intermediate' },
      { name: 'REST APIs', level: 85, rating: 'Advanced' },
      { name: 'GraphQL', level: 65, rating: 'Intermediate' },
    ],
    design: [
      { name: 'UI/UX Design', level: 80, rating: 'Advanced' },
      { name: 'Figma', level: 85, rating: 'Advanced' },
      { name: 'Adobe XD', level: 75, rating: 'Intermediate' },
      { name: 'Photoshop', level: 70, rating: 'Intermediate' },
      { name: 'Illustrator', level: 65, rating: 'Intermediate' },
      { name: 'Prototyping', level: 80, rating: 'Advanced' },
    ],
    mobile: [
      { name: 'React Native', level: 70, rating: 'Intermediate' },
      { name: 'Flutter', level: 65, rating: 'Intermediate' },
      { name: 'PWA', level: 80, rating: 'Advanced' },
      { name: 'Ionic', level: 60, rating: 'Beginner' },
      { name: 'Cordova', level: 55, rating: 'Beginner' },
      { name: 'App Store', level: 70, rating: 'Intermediate' },
    ],
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-100 dark:to-primary-dark/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            Constantly evolving and mastering new technologies to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 magnetic ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-cyan to-primary-purple text-primary-dark neon-cyan'
                    : 'glass text-gray-900 dark:text-primary-white hover:text-primary-cyan'
                }`}
              >
                <Icon size={20} />
                <span className="font-inter">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold font-poppins">{skill.name}</h3>
                <span className="text-primary-cyan font-bold font-inter text-sm">
                  {skill.rating}
                </span>
              </div>
              
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary-cyan to-primary-purple rounded-full neon-cyan"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-full neon-purple">
            <span className="text-2xl">🏆</span>
            <span className="text-lg font-semibold gradient-text font-poppins">
              50+ Projects Completed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;