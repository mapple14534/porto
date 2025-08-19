import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'iot', name: 'IoT' },
    { id: 'design', name: 'Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather IoT Dashboard',
      description: 'IoT weather monitoring system with real-time data',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'iot',
      technologies: ['Arduino', 'React', 'WebSocket', 'Charts.js'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Biometric API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package for tech startup',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'design',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Smart Home Controller',
      description: 'IoT-based smart home automation system',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'iot',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            A showcase of my latest work, from web applications to IoT solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 magnetic ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-cyan to-primary-purple text-primary-dark neon-cyan'
                  : 'glass text-primary-white hover:text-primary-cyan'
              }`}
            >
              <Filter size={16} />
              <span className="font-inter">{filter.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="project-card-inner h-96">
                {/* Front Side */}
                <div className="project-card-front glass overflow-hidden">
                  <div className="relative h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-2/3 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2 font-poppins">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-inter">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="project-card-back glass p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-4 gradient-text font-poppins">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 font-inter">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-cyan/20 text-primary-cyan rounded-full text-xs font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-primary-cyan to-primary-purple text-primary-dark rounded-lg font-semibold hover-glow"
                    >
                      <ExternalLink size={16} />
                      <span className="font-inter">Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 glass border border-primary-purple text-primary-purple rounded-lg font-semibold hover:bg-primary-purple hover:text-primary-dark transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="font-inter">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;