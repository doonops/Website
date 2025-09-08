import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-modern">
      {/* Scoped styles: only this footer pe apply honge */}
      <style>{`
        .footer-modern .newsletter{
          display:flex; gap:.5rem; flex-wrap:wrap;
        }
        .footer-modern .newsletter input{
          flex:1; min-width:220px; height:44px;
          padding:.55rem .9rem; border:1px solid #e5e7eb; border-radius:.5rem;
          background:#fff; color:#111827;
        }
        .footer-modern .newsletter input::placeholder{ color:#6b7280; }
        /* Custom solid blue button (no Bootstrap .btn -> no white override) */
        .footer-modern .cs-btn{
          display:inline-flex; align-items:center; justify-content:center;
          padding:.55rem 1rem; height:44px; border-radius:.5rem;
          border:1px solid #0d6efd; background:#0d6efd; color:#fff;
          font-weight:600; line-height:1.2; text-decoration:none;
          box-shadow:0 .25rem .5rem rgba(13,110,253,.15);
          transition:background .2s, border-color .2s, color .2s, transform .15s;
          -webkit-appearance:none
        }
        .footer-modern .cs-btn:hover,
        .footer-modern .cs-btn:focus{
          background:#0b5ed7; border-color:#0a58ca; color:#fff; transform:translateY(-1px); outline:none;
        }
        .footer-modern .cs-btn:active{ transform:translateY(0); }
      `}</style>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="brand-block">
              <img src="/images/logo4.png" alt="DoonOps.ai" />
              <h5>DoonOps.ai</h5>
              <p>Cloud, DevOps, AI and business apps — engineered for scale, automation, and outcomes.</p>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Company</h6>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Solutions</h6>
            <ul>
              <li><Link to="/services">E-commerce</Link></li>
              <li><Link to="/services">AI Bots</Link></li>
              <li><Link to="/services">Business Apps</Link></li>
              <li><Link to="/services">Kubernetes</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6>Stay in the loop</h6>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" />
              {/* CHANGED: custom solid button — no Bootstrap .btn */}
              <button type="submit" className="cs-btn">Subscribe</button>
            </form>

            <div className="social mt-3">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="d-flex justify-content-between small text-muted">
          <span>© {new Date().getFullYear()} DoonOps.ai. All rights reserved.</span>
          <span>Made with ❤ in React</span>
        </div>
      </div>
    </footer>
  )
}
