import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (EmailJS integration)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akhmad-faizal-234462288/',
      icon: Linkedin,
      color: 'text-blue-400',
    },
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
      color: 'text-gray-400',
    },
    {
      name: 'Instagram',
      url: '#',
      icon: Instagram,
      color: 'text-pink-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold mb-6 neon-text-cyan font-poppins">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center neon-cyan">
                    <Mail className="text-primary-cyan" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-inter">Email</p>
                    <p className="text-primary-white font-semibold font-inter">
                      <a href="mailto:akhmadfaizal214@gmail.com" className="hover:text-primary-cyan transition-colors">
                        akhmadfaizal214@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center neon-purple">
                    <Phone className="text-primary-purple" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-inter">Phone</p>
                    <p className="text-gray-900 dark:text-primary-white font-semibold font-inter">
                      +62 xxx-xxxx-xxxx
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center neon-cyan">
                    <MapPin className="text-primary-cyan" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-inter">Location</p>
                    <p className="text-gray-900 dark:text-primary-white font-semibold font-inter">
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV & Social Links */}
            <div className="glass p-8 rounded-2xl hover-glow">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-primary-cyan to-primary-purple text-primary-dark rounded-xl font-semibold mb-6 hover-glow magnetic"
              >
                <Download size={20} />
                <span className="font-inter">Download CV</span>
              </motion.a>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 glass rounded-full flex items-center justify-center ${social.color} hover:bg-white/10 transition-all duration-300 magnetic`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold mb-6 neon-text-purple font-poppins">
                Send Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-inter">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-primary-dark/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-cyan focus:outline-none transition-colors duration-300 font-inter text-gray-900 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-inter">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-primary-dark/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-cyan focus:outline-none transition-colors duration-300 font-inter text-gray-900 dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-inter">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-primary-dark/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-cyan focus:outline-none transition-colors duration-300 resize-none font-inter text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-primary-purple to-primary-cyan text-primary-dark rounded-lg font-semibold hover-glow magnetic"
                >
                  <Send size={20} />
                  <span className="font-inter">Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;