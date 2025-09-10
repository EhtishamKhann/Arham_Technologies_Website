import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const GlobalOfficesSection = ({ officeLocations }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Our Global Offices
      </h2>
      {officeLocations.map((office, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{office.country}</h3>
              <p className="text-gray-600 mb-1">{office.address}</p>
              <a href={office.phoneHref} className="text-lg text-blue-600 font-medium hover:underline">
                {office.phone}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GlobalOfficesSection;