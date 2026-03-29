import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, icon: Icon, href, download, className = '', type = 'button' }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    textDecoration: 'none',
    fontFamily: 'inherit',
    outline: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--accent-gradient)',
      color: '#fff',
      boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-main)',
      border: '2px solid var(--accent-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
    }
  };

  const style = { ...baseStyles, ...variants[variant] };

  const content = (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  if (href) {
    return (
      <motion.a href={href} style={style} className={className} download={download} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} style={style} className={className} onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;
