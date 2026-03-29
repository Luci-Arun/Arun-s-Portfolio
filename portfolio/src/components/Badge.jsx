import React from 'react';

const Badge = ({ children, variant = 'default' }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    letterSpacing: '0.5px'
  };

  const variants = {
    default: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--text-main)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    primary: {
      background: 'rgba(14, 165, 233, 0.15)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(14, 165, 233, 0.3)'
    }
  };

  const style = { ...baseStyles, ...variants[variant] };

  return (
    <span style={style}>
      {children}
    </span>
  );
};

export default Badge;
