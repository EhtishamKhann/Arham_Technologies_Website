import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and success."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital trends and continuously evolve our strategies to keep you competitive."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy development to execution."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "10+ years in digital marketing with expertise in SEO and growth strategies."
    },
    {
      name: "Michael Chen",
      role: "Head of SEO",
      description: "Technical SEO specialist with a track record of improving search rankings."
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      description: "Award-winning creative professional specializing in brand storytelling."
    },
    {
      name: "David Kim",
      role: "Analytics Manager",
      description: "Data scientist focused on performance optimization and ROI maximization."
    }
  ];

  const achievements = [
    "Google Partner Certified Agency",
    "Facebook Marketing Partner",
    "HubSpot Gold Partner",
    "Bing Ads Accredited Professional",
    "SEMrush Certified Agency"
  ];

  return (
    <>
      <Helmet>
        <title>About Arham Technologies - Leading Digital Marketing Experts</title>
        <meta name="description" content="Learn about Arham Technologies' mission, values, and expert team. Discover why we're the trusted choice for SEO and digital marketing solutions." />
        <meta property="og:title" content="About Arham Technologies - Leading Digital Marketing Experts" />
        <meta property="og:description" content="Learn about Arham Technologies' mission, values, and expert team. Discover why we're the trusted choice for SEO and digital marketing solutions." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-[#a4cdfa] text-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Arham Technologies
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Empowering businesses with innovative digital marketing solutions since 2019
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img  
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  alt="Arham Technologies office environment with team collaboration"
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600">
                    To empower businesses of all sizes with cutting-edge digital marketing strategies 
                    that drive growth, increase visibility, and deliver measurable results in today's 
                    competitive digital landscape.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-600">
                    To be the leading digital marketing agency that transforms how businesses connect 
                    with their audiences, creating lasting impact through innovative strategies and 
                    exceptional service.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Arham Technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate professionals dedicated to your digital marketing success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img  
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                      alt={`${member.name} - ${member.role} at Arham Technologies`}
                     src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="text-yellow-300">Achievements</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Recognized expertise and certified partnerships with leading digital platforms
                </p>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Award className="h-5 w-5 text-yellow-400 mr-3" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img  
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  alt="Awards and certifications display at Arham Technologies"
                 src="https://images.unsplash.com/photo-1542884028-7528427f867d" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center pulse-animation">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-blue-100">
                Delivering exceptional results for businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Successful Projects" },
                { number: "98%", label: "Client Retention Rate" },
                { number: "150%", label: "Average ROI Increase" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;