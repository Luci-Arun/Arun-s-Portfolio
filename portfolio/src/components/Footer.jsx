import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-card)', padding: '2rem 0', borderTop: '1px solid var(--bg-card-border)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent-primary)' }}>{'<'}</span>
            Arun
            <span style={{ color: 'var(--accent-primary)' }}>{'/>'}</span>
          </span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            &copy; {new Date().getFullYear()} Arouna BARRY. Tous droits réservés.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/Luci-Arun" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>GitHub</a>
          <a href="#" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
