import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverable = true, delay = 0 }) => {
  const baseStyles = {
    background: 'var(--bg-card)',
    borderRadius: 'var(--border-radius)',
    padding: '2rem',
    border: '1px solid var(--bg-card-border)',
    transition: 'border-color 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const Component = hoverable ? motion.div : 'div';
  
  const motionProps = hoverable ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5 },
    whileHover: { y: -5, borderColor: 'var(--accent-primary)' }
  } : {};

  return (
    <Component style={baseStyles} className={className} {...motionProps}>
      {children}
    </Component>
  );
};

export default Card;
