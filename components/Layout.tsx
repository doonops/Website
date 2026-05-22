import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Chatbot from '@/components/Chatbot'

const NAV_LINKS = [
  { href: '/#products', label: 'Products' },
  { href: '/#exams', label: 'Exams' },
  { href: '/#trending', label: 'Features' },
  { href: '/tutorials/', label: 'Tutorials' },
  { href: '/careers/', label: 'Careers' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { basePath } = useRouter()

  const close = () => setOpen(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Doonops Home" onClick={close}>
            <img src={`${basePath}/logo.png`} alt="" className="logo" width={36} height={36} />
            <span className="brand-name">Doonops</span>
            <span className="brand-tag">EdTech</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav nav-desktop" aria-label="Primary">
            <ul className="nav-list">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className="btn btn-primary btn-sm">Free Demo</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile / tablet toggle */}
          <button
            type="button"
            className="nav-toggle"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-icon" aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      {/* Mobile drawer — outside header so nothing clips it */}
      <div className={`mobile-nav ${open ? 'open' : ''}`} id="mobile-nav" aria-hidden={!open}>
        {open && (
          <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={close} />
        )}
        <div className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="btn btn-primary" onClick={close}>Free Demo</Link>
            </li>
          </ul>
        </div>
      </div>

      <main id="main-content">{children}</main>
      <Chatbot />

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={`${basePath}/logo.png`} alt="" className="logo small" width={32} height={32} />
            <div>
              <strong>Doonops</strong>
              <div className="muted">AI EdTech • Learn • Assess • Succeed</div>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="/#products">Products</a>
            <a href="/#exams">Exams</a>
            <a href="/#trending">Features</a>
            <Link href="/tutorials/">Tutorials</Link>
            <Link href="/careers/">Careers</Link>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
        <div className="container footer-meta">
          <small>© {new Date().getFullYear()} Doonops EdTech</small>
        </div>
      </footer>
    </>
  )
}
