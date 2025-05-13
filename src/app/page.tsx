'use client';

import { useState, useEffect } from 'react';
import ChatWidget from '@/components/ChatWidget';
import HeroSection from '@/sections/HeroSection';
import HowItWorks from '@/sections/HowItWorks';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Testimonials from '@/sections/Testimonials';
import ContactForm from '@/sections/ContactForm';
import Footer from '@/sections/Footer';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user preference when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', (!darkMode).toString());
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <main>
      {/* Dark Mode Toggle */}
      <motion.button
        className="fixed top-5 right-5 z-50 p-2 bg-secondary-200 dark:bg-secondary-800 rounded-full shadow-lg"
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" size={20} />
        ) : (
          <FaMoon className="text-secondary-700" size={20} />
        )}
      </motion.button>

      {/* Landing Page Sections */}
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {/* Chat Widget */}
      <ChatWidget />
    </main>
  );
}