import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function useActiveSection() {
  const [active, setActive] = React.useState('home')
  const loc = useLocation()
  React.useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [loc.pathname])
  return active
}

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const activeSection = useActiveSection()
  const location = useLocation()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // nav font size
  const NAV_FONT_SIZE = 13

  const navLinks = [
    { to: '/', label: 'Home', key: 'home' },
    { to: '/about', label: 'About', key: 'about' },
    { to: '/services', label: 'Services', key: 'services' },
    { to: '/training', label: 'Training', key: 'training' },
    { to: '/team', label: 'Team', key: 'team' },
    { to: '/partners', label: 'Partners', key: 'partners' },
    { to: '/faq', label: 'FAQ', key: 'faq' },
    { to: '/contact', label: 'Contact', key: 'contact' }, // ← Contact normal hi rahega (no popup)
    { to: '/careers', label: 'Careers', key: 'careers' },
  ]

  const currentKey = React.useMemo(() => {
    if (location.pathname === '/') return activeSection
    const map = { '/':'home','/about':'about','/services':'services','/training':'training','/team':'team','/partners':'partners','/faq':'faq','/contact':'contact','/sitemap':'sitemap','/careers':'careers' }
    return map[location.pathname] || ''
  }, [location.pathname, activeSection])

  const colors = {
    bg: scrolled ? '#0d47a1' : '#ffffff',
    border: scrolled ? 'transparent' : 'rgba(0,0,0,.06)',
    link: scrolled ? '#e5eefc' : '#374151',
    linkActive: scrolled ? '#ffffff' : '#0d6efd',
    ctaBg: scrolled ? '#ffffff' : '#0d6efd',
    ctaText: scrolled ? '#0d47a1' : '#ffffff',
    ctaBorder: scrolled ? '#ffffff' : '#0d6efd',
    bar: scrolled ? '#ffffff' : '#111827',
  }

  // 👉 helper: sirf event fire karo (WelcomePopup globally mounted ho)
  const openPopup = () => {
    window.dispatchEvent(new CustomEvent('open-welcome-popup'))
  }

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 1030,
        background: colors.bg, borderBottom: `1px solid ${colors.border}`,
        boxShadow: scrolled ? '0 .35rem 1rem rgba(0,0,0,.15)' : 'none',
        transition: 'background-color .2s, box-shadow .2s, border-color .2s',
        width: '100vw', maxWidth: '100vw',
        marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)',
      }}
    >
      <div style={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ minHeight: 88, display: 'flex', alignItems: 'center' }}>
          {/* LEFT: logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label="DoonOps.ai"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginLeft: 0, paddingLeft: 0 }}
          >
            <img src="/images/logo4.png" alt="DoonOps.ai" style={{ height: 60, width: 'auto', display: 'block' }} />
          </Link>

          {/* RIGHT: nav */}
          <nav
            className={open ? 'open' : ''}
            style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: 16,
              paddingRight: 0,
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.to}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: NAV_FONT_SIZE,
                  textDecoration: 'none',
                  fontWeight: 500,
                  padding: '4px 4px',
                  color: currentKey === link.key ? colors.linkActive : colors.link,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ CTA: sirf yahan popup khulega; koi navigation nahi */}
            <button
              type="button"
              onClick={() => { setOpen(false); openPopup(); }}
              style={{
                appearance: 'none',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '.55rem 1rem', borderRadius: 8, cursor: 'pointer',
                border: `1px solid ${colors.ctaBorder}`,
                background: colors.ctaBg, color: colors.ctaText,
                fontWeight: 600,
                boxShadow: scrolled ? '0 .25rem .6rem rgba(255,255,255,.18)' : '0 .25rem .5rem rgba(13,110,253,.15)',
                transform: 'translateY(0)', transition: 'transform .15s',
                marginLeft: 4,
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Get in touch
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="d-lg-none"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            style={{ appearance: 'none', background: 'transparent', border: 0, padding: 4, marginLeft: 8 }}
          >
            <span style={{ display: 'block', width: 24, height: 2, background: colors.bar, margin: '5px 0', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: colors.bar, margin: '5px 0', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: colors.bar, margin: '5px 0', borderRadius: 2 }} />
          </button>
        </div>
      </div>
    </header>
  )
}
