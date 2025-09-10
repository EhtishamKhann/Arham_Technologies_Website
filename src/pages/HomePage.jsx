import React from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const HomePage = () => {
  const {
    toast
  } = useToast();
  const handleGetStarted = (e) => {
  e.preventDefault();
  const el = document.getElementById('stats');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
  const services = [{
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with our proven SEO strategies and techniques.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
  }, {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to grow your online presence.",
    features: ["Social Media Marketing", "Content Marketing", "Email Marketing", "PPC Advertising"]
  }, {
    icon: Users,
    title: "Social Media Management",
    description: "Engage your audience and build your brand across all social platforms.",
    features: ["Content Creation", "Community Management", "Social Analytics", "Influencer Marketing"]
  }];
  const stats = [{
    number: "500+",
    label: "Happy Clients"
  }, {
    number: "1000+",
    label: "Projects Completed"
  }, {
    number: "98%",
    label: "Client Satisfaction"
  }, {
    number: "5+",
    label: "Years Experience"
  }];
  return <>
      <Helmet>
        <title>Arham Technologies - Premier SEO & Digital Marketing Agency</title>
        <meta name="description" content="Transform your business with Arham Technologies' expert SEO and digital marketing services. Drive traffic, increase conversions, and grow your online presence." />
        <meta property="og:title" content="Arham Technologies - Premier SEO & Digital Marketing Agency" />
        <meta property="og:description" content="Transform your business with Arham Technologies' expert SEO and digital marketing services. Drive traffic, increase conversions, and grow your online presence." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[140vh] flex items-center justify-center overflow-hidden bg-[#a4cdfa]">
          <div className="absolute inset-0 bg-[#a4cdfa] "></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <motion.div className="floating-animation" transition={{
              delay: 0.2
            }}>
               <img
  src="/images/logo-hero.png"
  alt="Arham Technologies Logo"
  className="mx-auto mb-8 w-32 sm:w-40 md:w-48 h-auto"
/>
              </motion.div>
              
             <h1 className="text-5xl md:text-7xl font-bold text-blue-900 leading-tight">
  Transform Your
  <span className="block text-blue-900">Digital Presence</span>
</h1>
              <p className="text-xl md:text-2xl text-blue-950 max-w-3xl mx-auto leading-relaxed">
                Arham Technologies delivers cutting-edge SEO and digital marketing solutions 
                that drive real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-950 font-semibold px-8 py-4 text-lg" onClick={handleGetStarted}>
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-4 text-lg">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl floating-animation" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl floating-animation" style={{
          animationDelay: '4s'
        }}></div>
        </section>

        {/* Stats Section */}
       <section id="stats" className="py-20 bg-white/95 backdrop-blur-sm scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} className="service-card rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="gradient-text">Arham Technologies?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine innovative strategies with proven results to deliver exceptional digital marketing solutions.
                </p>
                <div className="space-y-4">
                  {["Data-driven strategies that deliver measurable results", "Expert team with years of industry experience", "Customized solutions for your unique business needs", "24/7 support and transparent reporting"].map((point, index) => <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-400 mr-3" />
                      <span className="text-gray-300">{point}</span>
                    </div>)}
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="relative">
                <img
  className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[16/9] md:aspect-[4/3]"
  alt="Digital marketing team collaborating on strategy"
  src="/images/why-choose-us.png"
/>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center pulse-animation">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#a4cdfa] text-blue-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl mb-8 text-blue-900">
                Let's discuss how Arham Technologies can help you achieve your digital marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-950 font-semibold px-8 py-4 text-lg">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default HomePage;