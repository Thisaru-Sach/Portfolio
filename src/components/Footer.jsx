import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono footer-copy">
          © {new Date().getFullYear()} Thisaru Sachintha — Built with React + Vite
        </span>
        <span className="mono footer-note">
          Designed for clarity, not clutter.
        </span>
      </div>
    </footer>
  )
}
