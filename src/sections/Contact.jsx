import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Contact</p>
        <div className="contact-inner">
          <div className="contact-text">
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Let's talk about<br/>what I can build for you
            </h2>
            <p className="contact-sub">
              I'm actively seeking software engineering internship opportunities,
              particularly in fintech, data platforms, and enterprise systems.
              If you're from LSEG or a similar organisation, I'd love to connect.
            </p>

            <div className="contact-links">
              <a href="mailto:thisaru@example.com" className="contact-link">
                <span className="mono accent">Email</span>
                <span>thisaru@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="mono accent">LinkedIn</span>
                <span>linkedin.com/in/thisaru</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="mono accent">GitHub</span>
                <span>github.com/thisaru</span>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <p className="mono" style={{ color: 'var(--muted)', fontSize: '0.72rem', marginBottom: 20 }}>
              // Quick summary
            </p>
            {[
              ['Role target',    'Software Engineering Intern'],
              ['Domain interest','Financial data · Cloud platforms'],
              ['Availability',   'Immediate / flexible start'],
              ['Location',       'Colombo, Sri Lanka · Remote-ready'],
              ['Languages',      'Java · Python · JavaScript · SQL'],
            ].map(([k, v]) => (
              <div key={k} className="contact-kv">
                <span className="mono contact-key">{k}</span>
                <span className="contact-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
