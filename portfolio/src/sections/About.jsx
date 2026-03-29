import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <SectionTitle title={t('about.title')} subtitle="01." />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--bg-card-border)' }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>{t('about.subtitle')}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              {t('about.description')}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Localisation</span>
                <span style={{ fontWeight: 600 }}>{t('about.location')}</span>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</span>
                <a href={`mailto:${t('about.email')}`} style={{ fontWeight: 600, color: 'var(--text-main)', textDecoration: 'underline', textDecorationColor: 'var(--accent-primary)' }}>{t('about.email')}</a>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Téléphone</span>
                <span style={{ fontWeight: 600 }}>{t('about.phone')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            {[
              { label: 'Projets Réalisés', value: '10+' },
              { label: 'Années d\'Expérience', value: '1+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Cafés Consommés', value: '∞' }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--border-radius)', textAlign: 'center', border: '1px solid var(--bg-card-border)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
