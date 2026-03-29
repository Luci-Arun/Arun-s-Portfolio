import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ color: 'var(--accent-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem', fontSize: '0.875rem' }}
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: 0 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ height: '4px', width: '60px', background: 'var(--accent-gradient)', margin: '1rem auto 0', borderRadius: '2px' }}
      />
    </div>
  );
};

export default SectionTitle;
