// src/pages/Contact.jsx
import React from 'react'

export default function ContactPage() {
  const CONTACT = {
    phone: '+91 98XXXXXXX',
    email: 'hello@doonops.ai',
    addressLines: ['DoonOps.ai', 'Dehradun, Uttarakhand', 'India'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.222077944304!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDehradun!5e0!3m2!1sen!2sin!4v1644684739958',
  }

  const [sending, setSending] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // TODO: backend call yahan
    setTimeout(() => { setSending(false); setSent(true) }, 800)
  }

  return (
    <main id="contact" className="contact-page py-5">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="mb-2">Get in touch</h1>
          <p className="text-muted">We usually respond within a business day.</p>
        </header>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <span className="icon-circle"><i className="fas fa-phone-alt" /></span>
                  <div>
                    <h6 className="mb-1">Call us</h6>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="link-primary">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <span className="icon-circle"><i className="fas fa-envelope" /></span>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <a href={`mailto:${CONTACT.email}`} className="link-primary">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <span className="icon-circle"><i className="fas fa-map-marker-alt" /></span>
                  <div>
                    <h6 className="mb-1">Office</h6>
                    <address className="mb-0">
                      {CONTACT.addressLines.map(l => <div key={l}>{l}</div>)}
                    </address>
                  </div>
                </div>

                <hr className="my-4" />
                <div className="d-flex align-items-start gap-3">
                  <span className="icon-circle"><i className="far fa-clock" /></span>
                  <div>
                    <h6 className="mb-1">Business hours</h6>
                    <div>Mon–Fri: 10:00–18:00 IST</div>
                    <div>Sat–Sun: Closed</div>
                  </div>
                </div>

                <div className="mt-4 d-flex gap-3">
                  <a href="#" aria-label="LinkedIn" className="social-link"><i className="fab fa-linkedin" /></a>
                  <a href="#" aria-label="Twitter" className="social-link"><i className="fab fa-twitter" /></a>
                  <a href="#" aria-label="GitHub" className="social-link"><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                {!sent ? (
                  <form onSubmit={onSubmit} className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Company</label>
                      <input type="text" className="form-control" placeholder="Company (optional)" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-control" placeholder="+91 98XXXXXXX" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="5" placeholder="How can we help?" required />
                    </div>
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary" disabled={sending}>
                        {sending ? 'Sending…' : 'Send message'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div style={{ fontSize: 28 }}>🎉</div>
                    <h5 className="mt-2">Thanks!</h5>
                    <p className="mb-0">We will get in touch with you soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-sm mt-4">
          <iframe
            title="DoonOps Office Map"
            src={CONTACT.mapEmbed}
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  )
}
