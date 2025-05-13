'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stats = [
  { label: 'Licenses Sold', value: '12,400+' },
  { label: 'Avg. Payout Time', value: '24h' },
  { label: 'Active Users', value: '3,100+' }
];

const HeroSection = () => (
  <section
    id="hero"
    className="relative pt-16 pb-24 bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 overflow-hidden"
  >
    {/* Decorative blurred gradient blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-10 right-0 w-80 h-80 bg-primary-200 opacity-20 rounded-full blur-2xl pointer-events-none" />

    <div className="container mx-auto px-4 max-w-7xl relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left: Logo, Heading, CTA */}
        <motion.div
          className="w-full md:w-1/2 md:pr-10 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <Image
              src="/logo.svg"
              alt="SoftSell Logo"
              width={300}
              height={60}
              className="drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-secondary-900 dark:text-white leading-tight"
            variants={itemVariants}
          >
            Monetize Your <span className="text-primary-600 dark:text-primary-400">Unused Software</span> Instantly
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl mb-8 text-secondary-700 dark:text-secondary-300 max-w-xl"
            variants={itemVariants}
          >
            SoftSell is the easiest way to turn dormant licenses into cash. Fast, secure, and trusted by thousands of businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button size="lg">Start Selling</Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="secondary" size="lg">How It Works</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Glassmorphism Card */}
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary-400/30 to-primary-700/10 rounded-3xl blur-xl" />
            <div className="relative bg-white/80 dark:bg-secondary-900/80 backdrop-blur-xl border border-primary-100 dark:border-secondary-800 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center shadow">
                  <svg className="w-7 h-7 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
                    <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V7a1 1 0 011-1z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary-800 dark:text-white">Adobe Creative Cloud</h3>
                  <p className="text-secondary-500 dark:text-secondary-400 text-sm">Enterprise License</p>
                </div>
              </div>
              <div className="bg-secondary-100 dark:bg-secondary-800 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-secondary-600 dark:text-secondary-300">Original Price</span>
                  <span className="text-secondary-800 dark:text-white font-semibold">$599.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-secondary-600 dark:text-secondary-300">Your Price</span>
                  <span className="text-secondary-800 dark:text-white font-semibold">$419.99</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-primary-600 dark:text-primary-400">Your Savings</span>
                  <span className="text-primary-600 dark:text-primary-400">$180.00</span>
                </div>
              </div>
              <button className="w-full py-2 mt-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Unknown Flex Items (Stats/Badges) */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center px-6 py-4 bg-white/70 dark:bg-secondary-900/70 rounded-xl shadow-md border border-primary-100 dark:border-secondary-800 min-w-[140px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <span className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">{stat.value}</span>
            <span className="text-xs uppercase tracking-wide text-secondary-600 dark:text-secondary-300 mt-1">{stat.label}</span>
          </motion.div>
        ))}

        {/* Example of a "badge" flex item */}
        <motion.div
          className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl shadow-md min-w-[140px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: stats.length * 0.15 }}
        >
          <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Verified Secure</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
