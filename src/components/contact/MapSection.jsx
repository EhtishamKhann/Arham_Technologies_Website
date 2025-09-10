import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Main <span className="gradient-text">Office</span>
          </h2>
          <p className="text-xl text-gray-600">
            Located in the heart of New York's business district
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
            <p className="text-gray-500">123 Business Ave, Suite 100, New York, NY 10001</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;