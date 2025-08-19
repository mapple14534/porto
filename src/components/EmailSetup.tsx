import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Settings, Key } from 'lucide-react';

const EmailSetup: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 rounded-2xl max-w-2xl w-full"
      >
        <div className="text-center mb-6">
          <Mail className="text-primary-cyan mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold gradient-text font-poppins mb-2">
            EmailJS Setup Required
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-inter">
            To enable the contact form, you need to set up EmailJS
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary-cyan font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-poppins">Create EmailJS Account</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                Go to <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-primary-cyan hover:underline">emailjs.com</a> and create a free account
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary-cyan font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-poppins">Configure Email Service</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                Add your email service (Gmail, Outlook, etc.) and create an email template
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary-cyan font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-poppins">Update Configuration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                Replace the placeholder IDs in ContactSection.tsx with your actual EmailJS service ID, template ID, and user ID
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Key className="text-yellow-500" size={16} />
              <span className="text-yellow-500 font-semibold text-sm font-poppins">Configuration Needed</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 font-inter">
              Update these values in ContactSection.tsx:
              <br />• serviceId: 'your_service_id'
              <br />• templateId: 'your_template_id'  
              <br />• userId: 'your_user_id'
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailSetup;