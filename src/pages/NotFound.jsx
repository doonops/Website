import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <div className="text-center">
        <h1 className="display-4">404</h1>
        <p className="lead mb-4">The page you’re looking for doesn’t exist.</p>
        <div className="d-flex gap-2 justify-content-center">
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <Link to="/sitemap" className="btn btn-outline-secondary">Open Sitemap</Link>
        </div>
      </div>
    </main>
  )
}

