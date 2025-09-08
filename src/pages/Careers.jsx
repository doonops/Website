import React from 'react'

export default function Careers() {
  const [submitted, setSubmitted] = React.useState(false)
  const onSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="py-5 text-bg-dark" style={{ background: 'linear-gradient(120deg,#002e5f,#006ad3)' }}>
        <div className="container py-4 text-center">
          <h1 className="mb-1">Careers</h1>
          <p className="mb-0">Home / Careers</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Join Our Team</h2>
            <p>Job openings at DoonOps.ai — apply now!</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="alert alert-success" role="alert">
                  Thanks! Your application has been recorded.
                </div>
              ) : null}

              <form className="card card-body shadow-sm" onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input className="form-control" name="name" required placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Contact Number</label>
                    <input className="form-control" name="phone" required pattern="[0-9]{10}" maxLength={10} placeholder="10-digit phone" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required placeholder="you@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Years of Experience</label>
                    <input type="number" className="form-control" name="experience" min="0" required placeholder="e.g. 3" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Role</label>
                    <div className="d-flex flex-wrap gap-3">
                      {['Web Designer','Web Developer','Mobile App Designer','Mobile App Developer','Digital Marketer'].map((role, idx) => (
                        <div className="form-check me-3" key={role}>
                          <input className="form-check-input" type="radio" name="role" id={`role-${idx}`} value={role} defaultChecked={idx===0} />
                          <label className="form-check-label" htmlFor={`role-${idx}`}>{role}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Other Details</label>
                    <textarea className="form-control" name="details" rows="4" required placeholder="Tell us about your skills and projects"></textarea>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Upload your resume</label>
                    <input className="form-control" type="file" name="resume" accept=".doc,.docx,.pdf" />
                  </div>
                </div>
                <div className="text-end mt-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

