import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const ContactInfoSection = ({ contactInfo, whyChooseUsBenefits }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We're here to help you succeed. Reach out to us through any of the following channels, 
          and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                {info.icon === Mail && <Mail className="h-6 w-6 text-white" />}
                {info.icon === Phone && <Phone className="h-6 w-6 text-white" />}
                {info.icon === Clock && <Clock className="h-6 w-6 text-white" />}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-lg text-blue-600 font-medium mb-1">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">Why Choose Arham Technologies?</h3>
        <div className="space-y-3">
          {whyChooseUsBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
              <span className="text-blue-100">{benefit}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfoSection;