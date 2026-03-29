import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';
import Badge from '../components/Badge';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: '#6366f1', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }} />

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 1 }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Badge variant="primary">#OpenToWork</Badge>
              <Badge>Fullstack</Badge>
              <Badge>Data</Badge>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              <span style={{ display: 'block', fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-body)' }}>{t('hero.greeting')}</span>
              Arouna BARRY <br/>
              <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('hero.role')}
              </span>
            </h1>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', lineHeight: 1.8 }}>
              {t('hero.description')}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <Button href="#contact" variant="primary">{t('hero.cta_contact')}</Button>
              <Button href="#projects" variant="outline">{t('hero.cta_projects')}</Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifySelf: 'center' }}
          >
            <div style={{ position: 'relative', width: '300px', height: '300px', maxWidth: '100%' }}>
              <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'var(--accent-gradient)', opacity: 0.4, filter: 'blur(30px)' }} />
              <img 
                src="/src/assets/profile.png" 
                alt="Arouna BARRY Portfolio" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--bg-card)', position: 'relative', zIndex: 2 }}
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '10%', right: '-5%', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)', zIndex: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '10%', left: '-5%', background: 'var(--bg-card)', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)', zIndex: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >
                <span style={{ fontSize: '1.5rem' }}>💻</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
