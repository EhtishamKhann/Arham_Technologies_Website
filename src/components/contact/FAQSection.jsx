import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "Typically, you can expect to see initial improvements in 3-6 months, with significant results in 6-12 months. SEO is a long-term strategy that builds momentum over time."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are tailored to fit your budget and goals."
    },
    {
      question: "What's included in your digital marketing packages?",
      answer: "Our packages typically include SEO optimization, content marketing, social media management, PPC advertising, and detailed analytics reporting. We customize each package based on your specific needs."
    },
    {
      question: "How do you measure success?",
      answer: "We track key performance indicators (KPIs) such as organic traffic growth, keyword rankings, conversion rates, and ROI. You'll receive regular reports showing your progress."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;