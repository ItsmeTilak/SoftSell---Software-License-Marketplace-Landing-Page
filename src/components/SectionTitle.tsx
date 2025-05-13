import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  children 
}: SectionTitleProps) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-xl text-secondary-600 dark:text-secondary-400">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionTitle;