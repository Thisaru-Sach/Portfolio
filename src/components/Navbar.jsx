import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education',href: '#education' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          <span className="mono">T.S</span>
          <span className="nav-dot accent">.</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link mono" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="mailto:thisaru@example.com"
            className="nav-cta"
          >
            Get in Touch
          </a>
        </nav>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
