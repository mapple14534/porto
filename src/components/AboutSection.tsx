import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript',
      icon: Code2,
    },
    {
      year: '2023',
      title: 'Advanced Frontend Skills',
      description: 'Mastered React, Vue.js, and modern frameworks',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Full-Stack Developer',
      description: 'Expanded to backend development with PHP and databases',
      icon: Calendar,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            I have been involved in the web development field for 2 years and love
            to create visually appealing and functional web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center mb-4">
                <MapPin className="text-primary-cyan mr-3" size={24} />
                <h3 className="text-xl font-semibold font-poppins">Location</h3>
              </div>
              <p className="text-gray-300 font-inter">Indonesia</p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">Indonesia</p>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center mb-4">
                <Award className="text-primary-purple mr-3" size={24} />
                <h3 className="text-xl font-semibold font-poppins">Experience</h3>
              </div>
              <p className="text-gray-300 font-inter">2+ Years in Web Development</p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">2+ Years in Web Development</p>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center mb-4">
                <Code2 className="text-primary-cyan mr-3" size={24} />
                <h3 className="text-xl font-semibold font-poppins">Specialization</h3>
              </div>
              <p className="text-gray-300 font-inter">Full-Stack Web Development</p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">Full-Stack Web Development</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8 neon-text-cyan font-poppins">
              My Journey
            </h3>
            
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center neon-cyan">
                    <Icon size={20} className="text-primary-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-primary-purple font-bold mr-3 font-poppins">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold font-poppins">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 font-inter">{item.description}</p>
                    <p className="text-gray-600 dark:text-gray-300 font-inter">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;