import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* subtle grid background */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="mono hero-tag fade-up d1">
          <span className="accent">01</span> — Software Engineer & Data Enthusiast
        </p>

        <h1 className="hero-name fade-up d2">
          Thisaru<br />
          <span className="hero-name-dim">Sachintha</span>
        </h1>

        <p className="hero-sub fade-up d3">
          Final-year Statistics undergraduate at the University of Sri Jayewardenepura,
          building production-grade full-stack systems — from financial data platforms
          to real-time analytics pipelines. Seeking to contribute to a high end technology
          ecosystem as a Software Engineering Intern.
        </p>

        <div className="hero-actions fade-up d4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>

        <div className="hero-meta fade-up d5 mono">
          <span>Colombo, Sri Lanka</span>
          <span className="hero-sep">·</span>
          <span>Open to internship opportunities</span>
          <span className="hero-sep">·</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-meta-link">GitHub ↗</a>
          <span className="hero-sep">·</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-meta-link">LinkedIn ↗</a>
        </div>
      </div>

      <div className="hero-scroll-hint mono" aria-hidden="true">scroll ↓</div>
    </section>
  )
}
