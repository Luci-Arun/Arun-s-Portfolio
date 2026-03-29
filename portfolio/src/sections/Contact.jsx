import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès ! (Simulation)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--bg-dark)',
    border: '1px solid var(--bg-card-border)',
    borderRadius: '8px',
    color: 'var(--text-main)',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '1.5rem'
  };

  return (
    <section id="contact" style={{ position: 'relative', background: 'var(--bg-card)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionTitle title={t('contact.title')} subtitle="05." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Parlons de votre prochain projet</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Vous cherchez un développeur fullstack pour construire des solutions robustes et évolutives ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Email</div>
                  <a href={`mailto:${t('about.email')}`} style={{ fontWeight: 500, color: 'var(--text-main)' }}>{t('about.email')}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Téléphone</div>
                  <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{t('about.phone')}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Localisation</div>
                  <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{t('about.location')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{ background: 'var(--bg-dark)', padding: '2.5rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--bg-card-border)' }}
          >
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('contact.name')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={inputStyle} 
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--bg-card-border)'}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('contact.email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--bg-card-border)'}
              />
            </div>
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('contact.message')}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={4} 
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--bg-card-border)'}
              />
            </div>
            <Button type="submit" variant="primary" icon={Send} className="w-full justify-center">
              {t('contact.send')}
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
