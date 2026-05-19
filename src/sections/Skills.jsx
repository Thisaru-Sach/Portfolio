import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    tag: '01',
    items: ['Java', 'Python', 'JavaScript / TypeScript', 'SQL', 'R', 'Bash'],
  },
  {
    category: 'Backend & APIs',
    tag: '02',
    items: ['Spring Boot', 'Spring Microservices', 'Node.js / Express', 'REST API Design', 'JWT & OAuth 2.0', 'Supabase Edge Functions'],
  },
  {
    category: 'Frontend',
    tag: '03',
    items: ['React 18', 'Vite', 'React Native (Expo)', 'HTML / CSS', 'Component Architecture'],
  },
  {
    category: 'Data & Analytics',
    tag: '04',
    items: ['PostgreSQL', 'MongoDB Atlas', 'Statistical Modelling', 'Data Pipelines', 'Pandas / NumPy', 'Streamlit'],
  },
  {
    category: 'Cloud & DevOps',
    tag: '05',
    items: ['Supabase', 'Vercel', 'Docker (learning)', 'Eureka / API Gateway', 'Git / GitHub', 'CI basics'],
  },
  {
    category: 'Security',
    tag: '06',
    items: ['Row-Level Security (RLS)', 'API Key Hardening', 'RBAC', 'ISC2 CC (in progress)', 'XSS / SQLi Prevention', 'Zero Trust concepts'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">Capabilities aligned<br/>with LSEG's tech stack</h2>

        <div className="skills-grid">
          {skillGroups.map(g => (
            <div key={g.category} className="skill-group">
              <div className="skill-group-header">
                <span className="mono accent" style={{ fontSize: '0.65rem' }}>{g.tag}</span>
                <h3 className="skill-group-title">{g.category}</h3>
              </div>
              <ul className="skill-list">
                {g.items.map(item => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
