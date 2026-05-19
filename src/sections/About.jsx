import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label">About</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Bridging data,<br/>systems & finance</h2>
            <p>
              I'm a final-year Statistics undergraduate at the University of Sri Jayewardenepura,
              with a strong practical foundation in software engineering. My academic background
              in quantitative methods pairs naturally with my hands-on experience building
              real-world, production-grade systems.
            </p>
            <p>
              I build full-stack applications end-to-end — designing APIs, managing cloud
              infrastructure, implementing authentication flows, and shipping polished UIs.
              My work on platforms like DataXplore 2.0 (a live inter-university analytics
              competition) gave me direct experience with data pipelines, role-based access
              control, and secure file handling at scale.
            </p>
            <p>
              I'm drawn to organisations like LSEG where technology and financial data
              intersect. I'm particularly interested in building reliable, high-throughput
              systems and contributing to platforms that power global markets infrastructure.
            </p>
          </div>

          <div className="about-stats">
            {[
              { value: '3+', label: 'Years building full-stack systems' },
              { value: 'Java', label: 'Spring Boot microservices experience' },
              { value: 'React', label: 'Production UIs shipped' },
              { value: 'SQL', label: 'PostgreSQL & relational data modelling' },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <span className="stat-value accent">{s.value}</span>
                <span className="stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
