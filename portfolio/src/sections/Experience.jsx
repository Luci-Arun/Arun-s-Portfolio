import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      <div className="container">
        <SectionTitle title={t('experience.title')} subtitle="04." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Briefcase size={28} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{t('experience.work')}</h3>
            </div>
            
            <div style={{ position: 'relative', borderLeft: '2px solid var(--bg-card-border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0', width: '1rem', height: '1rem', background: 'var(--accent-primary)', borderRadius: '50%', border: '4px solid var(--bg-dark)' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Développeur Fullstack (Stagiaire)</h4>
                <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '1rem' }}>Cognitive Factory</div>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> 3 mois</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Lomé, Togo</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Mission principale : Développement d'une application interne de gestion des dépenses et revenus.
                </p>
                <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Conception de l'architecture logicielle et modélisation de la base de données.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Mise en place de KPIs et de tableaux de bord financiers interactifs.</li>
                  <li><strong>Impact :</strong> Amélioration de la gestion financière globale et suivi des dépenses en temps réel, optimisant la prise de décision.</li>
                </ul>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>PostgreSQL</Badge>
                </div>
              </div>

            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <GraduationCap size={28} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{t('experience.education')}</h3>
            </div>
            
            <div style={{ position: 'relative', borderLeft: '2px solid var(--bg-card-border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.55rem', top: '0', width: '1rem', height: '1rem', background: 'var(--bg-card-border)', borderRadius: '50%', border: '4px solid var(--bg-dark)' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Ingénieur des Travaux Informatiques</h4>
                <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '1rem' }}>IAI-TOGO</div>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> 2023 - 2026</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Lomé, Togo</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Spécialisation : <strong>Génie Logiciel et Systèmes d'Information</strong>. <br/>
                  Apprentissage approfondi de l'architecture logicielle, des bases de données avancées et du développement d'applications d'entreprise complexes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
