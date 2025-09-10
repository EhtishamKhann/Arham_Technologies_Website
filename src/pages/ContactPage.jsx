import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("ENV CHECK", {
    PUBLIC: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    SERVICE: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service || "Not specified",
          message: formData.message,
          // to_email: 'info@arhamtechnologies.site', // <-- ONLY if your template expects this variable
          // reply_to: formData.email                   // OPTIONAL if you added reply_to var in template
        }
      );

      toast?.({ title: "✅ Message sent successfully!" });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err?.text || err);
      toast?.({ title: "❌ Failed to send. Please try again." });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@arhamtechnologies.site",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us (Main)",
      details: "(091) 527 0003",
      description: "Mon–Fri 8am–5pm",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon–Fri: 8:00–18:00",
      description: "Weekend support available",
    },
  ];

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "PPC Advertising",
    "Web Analytics",
    "Email Marketing",
    "Brand Strategy",
    "Other",
  ];

  const whyChooseUsBenefits = [
    "Free initial consultation and strategy session",
    "Customized solutions for your business needs",
    "Transparent reporting and regular updates",
    "Dedicated account manager for your project",
  ];

  const offices = [
    {
      country: "Pakistan Office",
      address: "Opposite Golf Club Avenue Shami Road Cantt.",
      phone: "+92 333 0960 009",
    },
    {
      country: "USA Office",
      address: "630 GLASS LANE Modesto, CA 95356.",
      phone: "+1 (209) 362-8462",
    },
    {
      country: "UK Office",
      address: "IMPORT BUILDING, 2 Clove Cres, London E14 2BE UK",
      phone: "+44 7424 527 294",
    },
  ];

  // Office data to drive the map
  const officesMap = {
    pakistan: {
      label: "Pakistan Office",
      address:
        "Opposite Golf Club Avenue, Shami Road, Peshawar Cantt, Pakistan",
    },
    usa: {
      label: "USA Office",
      address: "630 Glass Lane, Modesto, CA 95356, USA",
    },
    uk: {
      label: "UK Office",
      address: "Import Building, 2 Clove Cres, London E14 2BE, UK",
    },
  };

  const [activeOffice, setActiveOffice] = useState("pakistan");

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    officesMap[activeOffice].address
  )}&output=embed`;

  return (
    <>
      <Helmet>
        <title>
          Contact Arham Technologies - Get Your Free Digital Marketing
          Consultation
        </title>
        <meta
          name="description"
          content="Ready to grow your business? Contact Arham Technologies for a free consultation. Our digital marketing experts are here to help you succeed online."
        />
      </Helmet>

      <div className="pt-16 overflow-x-hidden">
        {/* Hero */}
        <section className="py-20 bg-[#a4cdfa] text-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let&apos;s Connect
              </h1>
              <p className="text-xl md:text-2xl text-blue-950 max-w-3xl mx-auto">
                Ready to transform your digital presence? Get in touch for a
                free consultation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Info column */}
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
                    We&apos;re here to help you succeed. Reach out and
                    we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Offices */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {offices.map((o, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-semibold text-gray-900">
                        {o.country}
                      </h4>
                      <p className="text-gray-600">{o.address}</p>
                      <p className="text-blue-600 font-medium mt-1">
                        {o.phone}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Why choose us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Arham Technologies?
                  </h3>
                  <div className="space-y-3">
                    {whyChooseUsBenefits.map((b, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-300 mr-3" />
                        <span className="text-blue-100">{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Our <span className="gradient-text">Offices</span>
              </h2>
              <p className="text-xl text-gray-600">
                Click a location to view it on the map.
              </p>
            </motion.div>

            {/* Office toggle buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {Object.entries(officesMap).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setActiveOffice(key)}
                  className={`px-4 py-2 rounded-full border transition
            ${
              activeOffice === key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Active address */}
            <div className="text-center mb-6 text-gray-700 font-medium">
              {officesMap[activeOffice].address}
            </div>

            {/* Responsive 16:9 map */}
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-lg"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title={`Map - ${officesMap[activeOffice].label}`}
                src={mapSrc}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
