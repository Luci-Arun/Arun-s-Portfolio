import React, { useEffect } from 'react';

const CV = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cv-container" style={{
      background: '#fff',
      color: '#1e293b',
      fontFamily: '"Inter", sans-serif',
      width: '210mm',
      height: '296mm',
      margin: '0 auto',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
      display: 'block', // Strictly block layout, no flex stretching on the main wrapper
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          @media print {
            @page { margin: 0; size: A4 portrait; }
            body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            body * { visibility: hidden; }
            .cv-container, .cv-container * { visibility: visible; }
            .cv-container {
              position: absolute;
              left: 0;
              top: 0;
              box-shadow: none;
              width: 100%;
              height: 100%;
              page-break-after: avoid;
            }
          }
          /* Custom reset for this print scope */
          .cv-container h1, .cv-container h2, .cv-container h3, .cv-container p, .cv-container ul {
            margin: 0;
            padding: 0;
          }
          .cv-section {
            margin-bottom: 24px;
          }
          .cv-section:last-child {
            margin-bottom: 0;
          }
          .cv-heading {
            font-size: 14px;
            color: #0f172a;
            border-bottom: 2px solid #0ea5e9;
            padding-bottom: 4px;
            margin-bottom: 12px;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 0.5px;
          }
          .cv-item {
            margin-bottom: 16px;
          }
          .cv-item:last-child {
            margin-bottom: 0;
          }
        `}
      </style>

      {/* Header */}
      <header style={{ background: '#0a0a0a', color: '#fff', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '4px', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Arouna BARRY
          </h1>
          <h2 style={{ fontSize: '15px', fontWeight: '500', color: '#0ea5e9', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Ingénieur en Développement & Data Fullstack
          </h2>
        </div>
        <div style={{ textAlign: 'right', fontSize: '13px', lineHeight: '1.6', color: '#cbd5e1' }}>
          <div>📍 Lomé, Togo</div>
          <div>📧 arounbarry94@gmail.com</div>
          <div>📞 +228 70 10 47 63</div>
          <div>🔗 github.com/Luci-Arun</div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 4fr', height: 'calc(296mm - 96px)' }}>
        
        {/* Left Sidebar */}
        <div style={{ background: '#f8fafc', padding: '24px 20px', borderRight: '1px solid #e2e8f0', display: 'block' }}>
          
          <div className="cv-section">
            <h3 className="cv-heading">Profil</h3>
            <p style={{ fontSize: '13px', color: '#475569', textAlign: 'justify', lineHeight: 1.5 }}>
              Ingénieur passionné spécialisé en développement fullstack et data. Je conçois des solutions logicielles robustes et évolutives pour transformer la complexité technique en outils décisionnels simples, intuitifs et stratégiques pour l'entreprise.
            </p>
          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Compétences</h3>
            
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ display: 'block', fontSize: '13px', color: '#1e293b' }}>Langages</strong>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>Python, Java, JS, TS, PHP, C#</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ display: 'block', fontSize: '13px', color: '#1e293b' }}>Frameworks Web</strong>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>React.js, Angular, Django, Node.js</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ display: 'block', fontSize: '13px', color: '#1e293b' }}>Bases & Data</strong>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>PostgreSQL, MongoDB, Power BI, QGIS</div>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#1e293b' }}>DevOps & Ingénierie</strong>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>Git, Docker, Architecture SI, UML</div>
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Soft Skills</h3>
            <ul style={{ paddingLeft: '16px', fontSize: '12px', color: '#475569', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '4px' }}>Analyse & Résolution</li>
              <li style={{ marginBottom: '4px' }}>Auto-formation soutenue</li>
              <li style={{ marginBottom: '4px' }}>Collaboration Agile / Scrum</li>
              <li>Communication technique</li>
            </ul>
          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Certifications</h3>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '12px', color: '#1e293b', fontWeight: '600' }}>IBM Data Science Professional</div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Coursera, 2024</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#1e293b', fontWeight: '600' }}>Scrum Fundamentals</div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>SCRUMstudy, 2023</div>
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Langues</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#1e293b', fontWeight: '600' }}>Français</span>
              <span style={{ color: '#0ea5e9' }}>Courant</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: '#1e293b', fontWeight: '600' }}>Anglais</span>
              <span style={{ color: '#0ea5e9' }}>Technique</span>
            </div>
          </div>

        </div>

        {/* Right Content */}
        <div style={{ padding: '24px 32px', display: 'block' }}>
          
          <div className="cv-section">
            <h3 className="cv-heading">Expériences & Pratiques</h3>
            
            <div className="cv-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>Développeur Fullstack Data (Stagiaire)</strong>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>3 mois</span>
              </div>
              <div style={{ fontSize: '13px', color: '#0ea5e9', fontWeight: '700', marginBottom: '6px' }}>Cognitive Factory &bull; Lomé, Togo</div>
              <ul style={{ paddingLeft: '16px', color: '#334155', fontSize: '13px', lineHeight: 1.5 }}>
                <li style={{ marginBottom: '4px' }}>Conception complète et développement d'une application interne centralisée de gestion analytique budgétaire.</li>
                <li style={{ marginBottom: '4px' }}>Intégration d'un tableau de bord décisionnel (Dashboard) équipé de graphiques interactifs pour un suivi temps réel.</li>
                <li><strong>Impact :</strong> Numérisation totale du processus de traçabilité et accélération des bilans trimestriels.</li>
              </ul>
            </div>

            <div className="cv-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>Consultant SI Académique (Projet)</strong>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>6 mois</span>
              </div>
              <div style={{ fontSize: '13px', color: '#0ea5e9', fontWeight: '700', marginBottom: '6px' }}>IAI Togo (Projet) &bull; Lomé</div>
              <ul style={{ paddingLeft: '16px', color: '#334155', fontSize: '13px', lineHeight: 1.5 }}>
                <li style={{ marginBottom: '4px' }}>Modélisation d'une base de données relationnelle complexe pour simuler la gestion logistique d'une PME.</li>
                <li><strong>Impact :</strong> Validation de la capacité à traduire des règles métier complexes en algorithmes robustes.</li>
              </ul>
            </div>
          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Projets Majeurs</h3>
            
            <div className="cv-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>Plateforme Arascope</strong>
                <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: '700', background: '#e0f2fe', padding: '2px 8px', borderRadius: '4px' }}>HTML / CSS / JS / API</span>
              </div>
              <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
                Plateforme web innovante de découverte patrimoniale. Création d'une interface UX/UI fluide avec des algorithmes de recommandation géographique des lieux touristiques.<br/>
                <span style={{ color: '#0ea5e9', fontWeight: '600', display: 'block', marginTop: '4px' }}>&rarr; Impact : Facilite l'accès à l'information et valorise l'attractivité touristique locale avec succès.</span>
              </div>
            </div>

            <div className="cv-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>NexGen E-Commerce ERP</strong>
                <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: '700', background: '#e0f2fe', padding: '2px 8px', borderRadius: '4px' }}>React / Node.js / SQL</span>
              </div>
              <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
                Dashboard analytique sécurisé traitant des flux B2B. L'interface permet un suivi instantané des inventaires massifs et inclut une modélisation d'analyse prédictive.<br/>
                <span style={{ color: '#0ea5e9', fontWeight: '600', display: 'block', marginTop: '4px' }}>&rarr; Impact : Réduction de 30% des ruptures de stock grâce à l'anticipation algorithmique.</span>
              </div>
            </div>

            <div className="cv-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '14px', color: '#1e293b' }}>HealthTrack Data System</strong>
                <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: '700', background: '#e0f2fe', padding: '2px 8px', borderRadius: '4px' }}>Angular / Django REST</span>
              </div>
              <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
                Système d'information rigoureusement structuré conçu pour les cadres de santé (centralisation chiffrée, gestion avancée de rendez-vous, traçabilité des admissions).<br/>
                <span style={{ color: '#0ea5e9', fontWeight: '600', display: 'block', marginTop: '4px' }}>&rarr; Impact : Optimisation du flux des admissions et respect strict des règles de sécurité des données.</span>
              </div>
            </div>

          </div>

          <div className="cv-section">
            <h3 className="cv-heading">Formation Académique</h3>
            
            <div style={{ padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <strong style={{ fontSize: '14px', color: '#1e293b' }}>Cycle Ingénieur Travaux Informatiques</strong>
                 <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>2023 - 2026</span>
               </div>
               <div style={{ fontSize: '13px', color: '#0ea5e9', fontWeight: '600', marginTop: '4px' }}>Institut Africain d'Informatique (IAI) - Togo</div>
               <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                 <strong>Spécialité :</strong> Génie Logiciel, Maths Appliquées et Systèmes d'Information.<br/> 
                 Acquisition de méthodologies avancées d'analyse (UML / Merise), Big Data, Bases de Données (SQL / NoSQL), architectures logicielles distribuées (Cloud).
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CV;
