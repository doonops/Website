import Head from 'next/head'
import Layout from '@/components/Layout'
import { FormEvent, useRef, useState } from 'react'

const roles = [
  'AI/ML Engineer (EdTech)',
  'Full‑Stack Engineer',
  'EdTech Content Creator',
  'Assessment & Test Platform Engineer',
  'Product Manager — EdTech',
  'Customer Success — Institutes',
]

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>('')
  const applyRef = useRef<HTMLElement | null>(null)

  const applyFor = (role: string) => {
    setSelectedRole(role)
    applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onApply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const role = String(data.get('role') || '')
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const portfolio = String(data.get('portfolio') || '')
    const about = String(data.get('about') || '')
    const subject = `Job Application — ${role || 'Role'} — ${name}`
    const body = `Role: ${role}\nName: ${name}\nEmail: ${email}\nPortfolio: ${portfolio}\n\nAbout:\n${about}`
    window.location.href = `mailto:hr@doonops.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Layout>
      <Head>
        <title>Careers — Doonops AI</title>
        <meta name="description" content="Join Doonops to build autonomous AI platforms and enterprise software." />
      </Head>

      <section className="section hero hero-compact hero-static">
        <div className="container hero-inner">
          <h1 className="hero-title"><span className="gradient">Careers at Doonops AI</span></h1>
          <p className="hero-subtitle">Build AI EdTech products with a team obsessed with craft, reliability, and impact.</p>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      <section id="roles" className="section">
        <div className="container">
          <h2 className="section-title">Open Roles</h2>
          <div className="cards grid-3">
            {roles.map((r) => (
              <article key={r} className="card job">
                <h3>{r}</h3>
                <p>
                  {r.includes('AI/ML') && 'LLMs, RAG, voice AI, adaptive learning models for tutors & assessments.'}
                  {r.includes('Full‑Stack') && 'Next.js, Node, real-time dashboards, proctoring & exam platforms.'}
                  {r.includes('Content') && 'Exam syllabi, question banks, video scripts for govt & aptitude prep.'}
                  {r.includes('Assessment') && 'Online test engines, auto-grading, analytics, anti-cheat systems.'}
                  {r.includes('Product Manager') && 'EdTech roadmaps, B2B institutes, student growth metrics.'}
                  {r.includes('Customer Success') && 'Onboarding schools/coaching centers, training, renewals.'}
                </p>
                <button className="btn btn-secondary" onClick={() => applyFor(r)}>Apply</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section section-alt" ref={applyRef as any}>
        <div className="container">
          <h2 className="section-title">Apply Now</h2>
          <form id="apply-form" className="form" onSubmit={onApply}>
            <label>
              <span>Role</span>
              <select name="role" required value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="">Select a role</option>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
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
              <span>LinkedIn or Portfolio URL</span>
              <input type="url" name="portfolio" placeholder="https://" />
            </label>
            <label>
              <span>About you</span>
              <textarea name="about" rows={4} placeholder="Briefly tell us about your background" required></textarea>
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Submit Application</button>
              <a className="btn btn-link" onClick={(e) => { e.preventDefault(); (document.getElementById('apply-form') as HTMLFormElement)?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })) }}>Apply via Email</a>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

