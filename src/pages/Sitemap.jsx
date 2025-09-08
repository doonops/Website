import React from 'react'
import { Link } from 'react-router-dom'

export default function Sitemap() {
  const routes = [
    { to: '/', label: 'Home', desc: 'Landing page with all sections' },
    { to: '/about', label: 'About', desc: 'About Us section' },
    { to: '/services', label: 'Services', desc: 'All capabilities and offerings' },
    { to: '/training', label: 'Training', desc: 'IT trainings carousel grid' },
    { to: '/team', label: 'Team', desc: 'Core team members' },
    { to: '/partners', label: 'Partners', desc: 'Cloud and tech partners' },
    { to: '/faq', label: 'FAQ', desc: 'Frequently asked questions' },
    { to: '/contact', label: 'Contact', desc: 'Map and contact form' },
    { to: '/careers', label: 'Careers', desc: 'Open roles and application' },
  ]
  return (
    <main className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="section-title">Sitemap</h1>
          <p className="section-subtitle">Quick links to every page and section</p>
        </div>
        <div className="row g-3">
          {routes.map((r) => (
            <div key={r.to} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title"><Link to={r.to}>{r.label}</Link></h5>
                  <p className="card-text text-muted flex-grow-1">{r.desc}</p>
                  <div>
                    <Link to={r.to} className="btn btn-sm btn-primary">Open</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

