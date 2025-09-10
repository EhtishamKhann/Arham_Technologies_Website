import React from 'react';
import ScrollToTop from "@/components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import Footer from '@/components/Footer';
import { HelmetProvider } from 'react-helmet-async';  

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop /> 
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
