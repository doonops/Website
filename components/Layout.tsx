import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { basePath } = useRouter()
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Doonops Home">
            <img src={`${basePath}/logo.png`} alt="Doonops logo" className="logo" />
            <span className="brand-name">Doonops</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <button className="nav-toggle" aria-controls="primary-nav" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
            <ul id="primary-nav" className={`nav-list ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#solutions">Solutions</Link></li>
              <li><Link href="/#showcase">Showcase</Link></li>
              <li><Link href="/#partners">Partners</Link></li>
              <li><Link href="/#testimonials">Testimonials</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/#contact" className="btn btn-primary">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={`${basePath}/logo.png`} alt="Doonops logo" className="logo small" />
            <div>
              <strong>Doonops</strong>
              <div className="muted">Software • Mobile • AI • HCM • DevOps</div>
            </div>
          </div>
          <nav className="footer-nav">
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#showcase">Showcase</a>
            <a href="/#partners">Partners</a>
            <a href="/#testimonials">Testimonials</a>
            <Link href="/careers">Careers</Link>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
        <div className="container footer-meta">
          <small>© <span id="year">{new Date().getFullYear()}</span> Doonops. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}
