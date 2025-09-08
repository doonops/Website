import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WelcomePopup from "./components/WelcomePopup.jsx";
import HomePage from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'
import SectionRoute from './pages/SectionRoute.jsx'
import Sitemap from './pages/Sitemap.jsx'
import NotFound from './pages/NotFound.jsx'
import { setPageMeta, trackPageView } from './utils/meta.js'
import ContactPage from './pages/Contact.jsx'

function BackToTop() {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      className={`back-to-top ${visible ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

function MetaWatcher() {
  const location = useLocation()
  React.useEffect(() => {
    const map = {
      '/': { title: 'DoonOps.ai — Cloud, DevOps, AI', description: 'Cloud, DevOps, AI, E-commerce and Business Apps engineered for scale.' },
      '/about': { title: 'About — DoonOps.ai', description: 'About DoonOps.ai and our mission.' },
      '/services': { title: 'Services — DoonOps.ai', description: 'DevOps, Cloud, AI, E-commerce and Business Apps.' },
      '/training': { title: 'Training — DoonOps.ai', description: 'IT trainings for students and professionals.' },
      '/team': { title: 'Team — DoonOps.ai', description: 'Meet the DoonOps.ai team.' },
      '/partners': { title: 'Partners — DoonOps.ai', description: 'Our cloud and technology partners.' },
      '/faq': { title: 'FAQ — DoonOps.ai', description: 'Answers to frequently asked questions.' },
      '/contact': { title: 'Contact — DoonOps.ai', description: 'Get in touch with DoonOps.ai.' },
      '/careers': { title: 'Careers — DoonOps.ai', description: 'Open roles and application form.' },
      '/sitemap': { title: 'Sitemap — DoonOps.ai', description: 'Quick links to every route.' },
    }
    const meta = map[location.pathname] || map['/']
    setPageMeta(meta)
    trackPageView(location.pathname)
  }, [location.pathname])
  return null
}

/* 👇 NEW: sirf Home ("/") pe popup dikhane ke liye */
function PopupOnHome() {
  const { pathname } = useLocation()
  if (pathname !== '/') return null
  return <WelcomePopup delayMs={600} showOncePerSession={true} />
}

export default function App() {
  return (
    <BrowserRouter>
      <MetaWatcher />
      <Header />

      {/* 👇 NEW: Only on Home page */}
      <PopupOnHome />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SectionRoute target="about" />} />
        <Route path="/services" element={<SectionRoute target="services" />} />
        <Route path="/training" element={<SectionRoute target="training" />} />
        <Route path="/team" element={<SectionRoute target="team" />} />
        <Route path="/partners" element={<SectionRoute target="partners" />} />
        <Route path="/faq" element={<SectionRoute target="faq" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
