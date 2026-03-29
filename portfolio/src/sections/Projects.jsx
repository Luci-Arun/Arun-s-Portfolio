import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Arascope",
      description: "Plateforme web innovante permettant aux utilisateurs de découvrir des lieux touristiques avec recommandations. Orientée UX/UI, elle résout le problème de l'accessibilité à l'information patrimoniale et booste l'attractivité locale.",
      techs: ["HTML5", "CSS3", "JavaScript", "API Rest"],
      github: "https://github.com/Luci-Arun/Arascope",
      live: "#",
      featured: true
    },
    {
      title: "NexGen E-Commerce ERP",
      description: "Dashboard analytique en temps réel pour PME, incluant gestion des stocks, prévisions de ventes via analyse de données et suivi KPI. Optimise les opérations de 30%.",
      techs: ["React", "Node.js", "Express", "PostgreSQL", "Power BI"],
      github: "https://github.com/Luci-Arun",
      live: "#"
    },
    {
      title: "HealthTrack System",
      description: "Système de gestion hospitalière sécurisé avec prise de rendez-vous automatique, gestion des dossiers patients et alertes de suivi. Architecture évolutive HDS.",
      techs: ["Angular", "Django Rest Framework", "MongoDB", "Docker"],
      github: "https://github.com/Luci-Arun",
      live: "#"
    }
  ];

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <SectionTitle title={t('projects.title')} subtitle="03." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {projects.map((project, i) => (
            <Card key={i} delay={i * 0.1} hoverable={true} className="project-card">
              {project.featured && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent-gradient)', padding: '0.25rem 1rem', fontSize: '0.75rem', fontWeight: 'bold', borderBottomLeftRadius: '12px' }}>
                  FEATURED
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', marginTop: project.featured ? '1rem' : '0' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.techs.map((tech, j) => (
                  <Badge key={j} variant="primary">{tech}</Badge>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--bg-card-border)' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>
                    <Code size={18} /> Code
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = 'var(--accent-hover)'} onMouseOut={(e) => e.target.style.color = 'var(--accent-primary)'}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
