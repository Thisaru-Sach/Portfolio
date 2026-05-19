import './Education.css'

const education = [
  {
    degree: 'BSc (Hons) in Statistics',
    institution: 'University of Sri Jayewardenepura',
    period: '2022 – Present',
    notes: [
      'Department of Statistics — quantitative methods, probability, data analysis',
      'Active member of the Statistics Society; led development of the DataXplore 2.0 platform',
      'Coursework in statistical computing, regression modelling, and experimental design',
    ],
  },
]

const certifications = [
  {
    name: 'ISC2 Certified in Cybersecurity (CC)',
    status: 'In Progress',
    note: 'Self-studying all 5 domains including AI security (Oct 2025 outline)',
  },
  {
    name: 'Spring Boot Microservices',
    status: 'Self-Study',
    note: 'Eureka, API Gateway, OpenFeign, Docker — implemented in EcoBridge project',
  },
  {
    name: 'Full-Stack Web Development',
    status: 'Production Experience',
    note: 'React, Supabase, Vercel — live systems built and maintained',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <p className="section-label">Education & Credentials</p>
        <h2 className="section-title">Academic &<br/>professional development</h2>

        <div className="edu-grid">
          <div>
            <p className="mono sub-label">Academic</p>
            {education.map(e => (
              <div key={e.degree} className="edu-card">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{e.degree}</h3>
                    <p className="edu-inst">{e.institution}</p>
                  </div>
                  <span className="edu-period mono">{e.period}</span>
                </div>
                <ul className="edu-notes">
                  {e.notes.map(n => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="mono sub-label">Certifications & Training</p>
            <div className="cert-list">
              {certifications.map(c => (
                <div key={c.name} className="cert-card">
                  <div className="cert-top">
                    <h4 className="cert-name">{c.name}</h4>
                    <span className="cert-status mono">{c.status}</span>
                  </div>
                  <p className="cert-note">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
