import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero3D from '@/components/Hero3D'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useMemo, useState } from 'react'

export default function Home() {
  const { basePath } = useRouter()
  const onContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const company = String(data.get('company') || '')
    const message = String(data.get('message') || '')
    const subject = `New inquiry from ${name || 'Website'}`
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    window.location.href = `mailto:hello@doonops.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const testimonials = useMemo(() => ([
    { text: '“Doonops delivered our mobile app on time with AI features our users love.”', by: '— Product Lead, Fintech' },
    { text: '“Their DevOps automation cut our release time from days to minutes.”', by: '— CTO, SaaS Startup' },
    { text: '“Clean architecture and great communication. Highly recommended partner.”', by: '— Head of Engineering, Retail' },
  ]), [])
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [testimonials.length])
  const next = () => setSlide((s) => (s + 1) % testimonials.length)
  const prev = () => setSlide((s) => (s - 1 + testimonials.length) % testimonials.length)

  const onShowcaseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    ;(e.currentTarget as HTMLDivElement).style.setProperty('--mx', `${x}%`)
  }

  return (
    <Layout>
      <Head>
        <title>Doonops — IT, Mobile, AI, HCM, Billing, Ecommerce, DevOps</title>
        <meta name="description" content="Doonops builds IT software, iOS & Android apps, AI-driven smart applications, HCM solutions, billing systems, ecommerce platforms, and DevOps automation." />
        <meta property="og:title" content="Doonops" />
        <meta property="og:description" content="IT software, mobile apps, AI, HCM, billing, ecommerce, DevOps automation." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero with 3D/interactive graphics */}
      <Hero3D />

      {/* Services */}
      {/* Announcements */}
      <section id="announcements" className="section section-annc">
        <div className="container">
          <h2 className="section-title">Announcements</h2>
          <p className="section-lead">Latest updates, events, and releases</p>
          <AnnouncementsSlider />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section section-tight">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <p className="section-lead">Full‑stack engineering across devices and platforms</p>
          <div className="cards grid-3">
            <article className="card">
              <h3>IT Software Engineering</h3>
              <p>Custom web platforms, APIs, integrations, and cloud‑native systems.</p>
              <ul className="checklist">
                <li>Microservices & APIs</li>
                <li>Cloud (AWS/GCP/Azure)</li>
                <li>Security & Compliance</li>
              </ul>
            </article>
            <article className="card">
              <h3>Mobile Apps (iOS & Android)</h3>
              <p>Consumer and enterprise apps with AI‑driven features and analytics.</p>
              <ul className="checklist">
                <li>Native & Cross‑platform</li>
                <li>Offline‑first & Secure</li>
                <li>App Store / Play release</li>
              </ul>
            </article>
            <article className="card">
              <h3>DevOps Automation</h3>
              <p>CI/CD, infrastructure as code, observability, and cost optimization.</p>
              <ul className="checklist">
                <li>Build & Release pipelines</li>
                <li>Kubernetes & IaC</li>
                <li>Monitoring & SRE</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section">
        <div className="container">
          <h2 className="section-title">Solutions</h2>
          <p className="section-lead">Domain‑ready accelerators for faster time‑to‑value</p>
          <div className="cards grid-4">
            <article className="card">
              <h3>AI‑Driven Apps</h3>
              <p>Intelligent assistants, recommendations, computer vision, and automation.</p>
            </article>
            <article className="card">
              <h3>HCM</h3>
              <p>People operations: HR, payroll, attendance, performance and workflows.</p>
            </article>
            <article className="card">
              <h3>Billing Solutions</h3>
              <p>Subscriptions, invoicing, payments, reconciliation and reporting.</p>
            </article>
            <article className="card">
              <h3>Ecommerce</h3>
              <p>Headless storefronts, marketplace integrations, and omnichannel experiences.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Showcase</h2>
          <p className="section-lead">Recent highlights from client work</p>
          <div className="showcase-grid">
            <div className="showcase-item" onMouseMove={onShowcaseMove}>
              <div className="badge">AI</div>
              <h3>Field Agent Assistant</h3>
              <p>On‑device AI for offline knowledge search and guidance.</p>
            </div>
            <div className="showcase-item" onMouseMove={onShowcaseMove}>
              <div className="badge">HCM</div>
              <h3>People Suite</h3>
              <p>Attendance, payroll, and performance with flexible workflows.</p>
            </div>
            <div className="showcase-item" onMouseMove={onShowcaseMove}>
              <div className="badge">Billing</div>
              <h3>Usage‑based Billing</h3>
              <p>Metering, invoicing, tax and payment gateway integration.</p>
            </div>
            <div className="showcase-item" onMouseMove={onShowcaseMove}>
              <div className="badge">DevOps</div>
              <h3>Release Automation</h3>
              <p>End‑to‑end CI/CD with policy gates and observability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section">
        <div className="container">
          <h2 className="section-title">Partners</h2>
          <p className="section-lead">Technology alliances and ecosystem</p>
          <div className="partner-logos">
            <div className="partner"><img src={`${basePath}/partners/aws.svg`} alt="AWS" /></div>
            <div className="partner"><img src={`${basePath}/partners/gcp.svg`} alt="Google Cloud" /></div>
            <div className="partner"><img src={`${basePath}/partners/azure.svg`} alt="Microsoft Azure" /></div>
            <div className="partner"><img src={`${basePath}/partners/digitalocean.svg`} alt="DigitalOcean" /></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section section-tight">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <blockquote className="quote">
                    <p>{t.text}</p>
                    <footer>{t.by}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="slider-nav">
              {testimonials.map((_, i) => (
                <button key={i} aria-label={`Go to slide ${i+1}`} className={`dot ${i===slide ? 'active' : ''}`} onClick={() => setSlide(i)} />
              ))}
            </div>
            <div className="slider-controls">
              <button className="btn btn-secondary" onClick={prev}>Prev</button>
              <button className="btn btn-secondary" onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers teaser */}
      <section id="careers" className="section section-alt">
        <div className="container">
          <div className="cta">
            <div>
              <h2>We’re hiring</h2>
              <p>Join us to build delightful, reliable software at scale.</p>
            </div>
            <a className="btn btn-primary" href="/careers">View Open Roles</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Start a Project</h2>
          <form id="contact-form" className="form" onSubmit={onContact}>
            <div className="grid-2">
              <label>
                <span>Name</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
            </div>
            <label>
              <span>Company</span>
              <input type="text" name="company" />
            </label>
            <label>
              <span>How can we help?</span>
              <textarea name="message" rows={4} required></textarea>
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
              <a className="btn btn-link" onClick={(e) => { e.preventDefault(); (document.getElementById('contact-form') as HTMLFormElement)?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })) }}>Email instead</a>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

function AnnouncementsSlider() {
  const { basePath } = useRouter()
  const items = [
    { tag: 'New', title: 'Doonops AI Starter', date: 'Sep 2025', img: `${basePath}/announcements/banner1.svg` },
    { tag: 'Event', title: 'Cloud Summit Workshop', date: 'Oct 2025', img: `${basePath}/announcements/banner2.svg` },
    { tag: 'Update', title: 'HCM Suite v2.1', date: 'Aug 2025', img: `${basePath}/announcements/banner3.svg` },
    { tag: 'Release', title: 'DevOps Pipeline Templates', date: 'Jul 2025', img: `${basePath}/announcements/banner4.svg` },
  ]
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % items.length), 6000)
    return () => clearInterval(id)
  }, [items.length])
  const next = () => setSlide((s) => (s + 1) % items.length)
  const prev = () => setSlide((s) => (s - 1 + items.length) % items.length)
  return (
    <div className="slider annc">
      <div className="slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {items.map((it, i) => (
          <div className="slide" key={i}>
            <div className="banner">
              <img src={it.img} alt={it.title} />
              <div className="banner-meta">
                <span className="badge">{it.tag}</span>
                <strong>{it.title}</strong>
                <small className="muted">{it.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        {items.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i+1}`} className={`dot ${i===slide ? 'active' : ''}`} onClick={() => setSlide(i)} />
        ))}
      </div>
      <div className="slider-controls">
        <button className="btn btn-secondary" onClick={prev}>Prev</button>
        <button className="btn btn-secondary" onClick={next}>Next</button>
      </div>
    </div>
  )
}
