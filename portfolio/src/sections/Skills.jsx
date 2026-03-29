import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'C#', 'Dart'],
      color: '#3b82f6'
    },
    {
      title: t('skills.frameworks'),
      skills: ['Angular', 'Django', 'React', 'Vue.js', 'Spring Boot', 'Laravel', 'Node.js', 'Flask'],
      color: '#10b981'
    },
    {
      title: t('skills.databases'),
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQLite', 'Neo4j', 'MariaDB'],
      color: '#f59e0b'
    },
    {
      title: t('skills.tools'),
      skills: ['Git & GitHub', 'Docker', 'Postman', 'Figma', 'Power BI', 'QGIS', 'Architecture Agile', 'UI/UX'],
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="skills" style={{ position: 'relative', background: 'var(--bg-card)' }}>
      <div className="container">
        <SectionTitle title={t('skills.title')} subtitle="02." />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((cat, i) => (
            <Card key={i} delay={i * 0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '4px', background: cat.color, borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{cat.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {cat.skills.map((skill, j) => (
                  <Badge key={j} variant="default">{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
