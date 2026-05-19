import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'DataXplore 2.0',
    subtitle: 'Inter-University Data Analytics Competition Platform',
    relevance: 'Data platforms · Auth systems · Admin dashboards',
    description:
      'Full-stack competition platform for the Statistics Society at USJP. Built with React/Vite, Supabase (PostgreSQL + Storage), and Vercel. Features include date-driven phase configuration, NIC+email authentication via Edge Functions, drag-and-drop JSZip file submissions, a comprehensive admin dashboard, RLS-enforced data security, and a Top 10 Teams reveal system.',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Vercel'],
    type: 'Full-Stack Platform',
  },
  {
    id: '02',
    title: 'AlgoAttendance',
    subtitle: 'QR-Based Attendance System',
    relevance: 'Real-time systems · Mobile · API security',
    description:
      'Migrated a legacy Node.js/web attendance system to a React Native Expo mobile app with MongoDB Atlas. Implemented time-bound encrypted QR codes, base64 image delivery, dynamic IP whitelisting, and resolved a critical encryption key bug causing session invalidation on every server restart.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB Atlas'],
    type: 'Mobile + Backend',
  },
  {
    id: '03',
    title: 'EcoBridge',
    subtitle: 'Circular Economy Marketplace (In Progress)',
    relevance: 'Microservices · Zero Trust · Financial systems',
    description:
      'Architecture and implementation of a marketplace using React 18 + Spring Boot microservices. Applying Eureka service discovery, API Gateway routing, OpenFeign inter-service communication, JWT/Zero Trust security, RBAC, XSS/SQLi prevention, and SSE-based real-time notifications. Designed as a structured 9-week delivery roadmap.',
    tech: ['Spring Boot', 'Java', 'React', 'Eureka', 'JWT', 'Docker'],
    type: 'Microservices Architecture',
  },
  {
    id: '04',
    title: 'Certificate Generation System',
    subtitle: 'Bulk PDF Automation for DataXplore Workshop',
    relevance: 'Data processing · Automation · Workflow tools',
    description:
      'Streamlit application that stamps PDF certificate templates with participant names from a CSV, handles bulk Gmail SMTP delivery, and runs offline on Windows with Device Guard constraints resolved. Processes hundreds of certificates with error logging per recipient.',
    tech: ['Python', 'Streamlit', 'PDF Processing', 'Gmail SMTP', 'CSV Automation'],
    type: 'Automation Tool',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Work that demonstrates<br/>relevant engineering depth</h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <article key={p.id} className="project-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-meta">
                <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.68rem' }}>{p.id}</span>
                <span className="project-type mono">{p.type}</span>
              </div>

              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                  <div className="project-relevance mono">
                    <span style={{ color: 'var(--accent)', marginRight: 6 }}>↳</span>
                    {p.relevance}
                  </div>
                </div>

                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map(t => (
                    <span key={t} className="tech-tag mono">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
