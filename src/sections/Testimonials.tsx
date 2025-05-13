'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechFusion',
      content: 'SoftSell helped our company recover over $50,000 from unused enterprise licenses. The process was incredibly smooth, and their team handled all the details. I highly recommend their service to any business looking to recoup costs from unused software.',
      avatar: '/testimonials/user1.png'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'IT Director',
      company: 'Innovate Inc.',
      content: 'As we transitioned to new software solutions, we had dozens of licenses that were no longer needed. SoftSell provided a secure marketplace to sell these assets, and their pricing algorithm got us 30% more than we expected. The transaction was completed within a week!',
      avatar: '/testimonials/user2.webp'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Join hundreds of satisfied customers who've successfully sold their unused licenses"
        />

        <motion.div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-8 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-6 -left-6">
                <svg className="h-12 w-12 text-primary-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-2.209 0-4 1.791-4 4v12h8V12h-4c0-2.209 1.791-4 4-4V8zm12 0c-2.209 0-4 1.791-4 4v12h8V12h-4c0-2.209 1.791-4 4-4V8z" />
                </svg>
              </div>
              
              <p className="text-secondary-700 dark:text-secondary-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 bg-primary-200 dark:bg-primary-900 flex items-center justify-center">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="56px"
                    />
                  ) : (
                    <span className="text-primary-700 dark:text-primary-300 font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
   