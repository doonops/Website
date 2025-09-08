// NEW: Our Customers (Projects + Testimonials) — replaces Contact()
export function Customers() {
    const projects = [
      {
        title: 'FixKrlo.com',
        icon: 'fas fa-screwdriver-wrench',         // tools / service
        color: '#0d6efd',
        tags: ['Website', 'Services', 'Support'],
        desc: 'On-demand repair & services platform with modern web stack.',
        link: '/projects/fixkrlo'
      },
      {
        title: 'Valley Hotels',
        icon: 'fas fa-hotel',                      // hospitality
        color: '#20c997',
        tags: ['Hospitality', 'Website', 'Booking'],
        desc: 'Hotel website with booking integrations & marketing pages.',
        link: '/projects/valley-hotels'
      },
      {
        title: 'Creators Constructions & Developer',
        icon: 'fas fa-building',                   // construction / real estate
        color: '#fd7e14',
        tags: ['Real Estate', 'CRM', 'Website'],
        desc: 'Project portfolio, inquiry CRM, and content-managed site.',
        link: '/projects/creators-constructions'
      },
      {
        title: 'SecureBuddy AI',
        icon: 'fas fa-shield-alt',                 // security/AI
        color: '#6f42c1',
        tags: ['AI', 'Security', 'Assistant'],
        desc: 'AI security assistant for policy Q&A and guardrails.',
        link: '/projects/securebuddy-ai'
      },
      {
        title: 'Media AI',
        icon: 'fas fa-film',                       // media
        color: '#dc3545',
        tags: ['AI', 'Media', 'Automation'],
        desc: 'AI-powered media processing and smart content workflows.',
        link: '/projects/media-ai'
      },
    ];
  
    const testimonials = [
      { quote: 'DoonOps modernized our CI/CD and infra quickly. Releases are faster and safer now.', name: 'Rahul Sharma', role: 'CTO, FinZed', rating: 5 },
      { quote: 'Great DevSecOps partner—clear communication, strong security practices, and on-time delivery.', name: 'Anita Verma', role: 'Head of Engineering, ShopSwift', rating: 5 },
      { quote: 'They migrated us to AWS with zero downtime and set up robust monitoring.', name: 'Mark Lewis', role: 'VP Tech, HealthPlus', rating: 4 },
    ];
  
    const initials = (full) =>
      full.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  
    const renderStars = (n = 5) =>
      Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fa-star ${i < n ? 'fas' : 'far'}`} aria-hidden="true" />
      ));
  
    const tcid = 'testimonialsCarousel';
  
    return (
      <section id="customers" className="py-5 section-gap" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Our Customers</h2>
            <p>Selected projects we’ve delivered — and what clients say about us.</p>
          </div>
  
          {/* Project Showcase */}
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Project Showcase</h5>
            <Link to="/projects" className="btn btn-outline-primary btn-sm">View all</Link>
          </div>
  
          <div className="row g-4">
            {projects.map((p, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 project-card">
                  <div className="d-flex align-items-center p-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 56, height: 56, background: '#f5f7fb' }}
                    >
                      <i className={p.icon} style={{ color: p.color, fontSize: '1.35rem' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h6 className="mb-1">{p.title}</h6>
                      <div className="small">
                        {p.tags.map((t) => (
                          <span key={t} className="badge bg-light text-dark me-1">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 pb-3">
                    <p className="small text-muted mb-3">{p.desc}</p>
                    <Link to={p.link} className="btn btn-sm btn-primary">Case Study</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Testimonials with fade + lift transition */}
          <div className="mt-5">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">What Clients Say</h5>
              <div className="d-none d-lg-block small text-muted">Swipe/Use arrows</div>
            </div>
  
            <div
              id={tcid}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="5000"
              data-bs-pause="hover"
              aria-label="Customer testimonials"
            >
              <div className="carousel-indicators">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target={`#${tcid}`}
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
  
              <div className="carousel-inner">
                {testimonials.map((t, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <div className="card border-0 shadow-sm testimonial-card mx-auto">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          {/* No image? Show initials circle */}
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: 56, height: 56, background: '#eef2ff', color: '#4f46e5', fontWeight: 700 }}
                            aria-hidden="true"
                          >
                            {initials(t.name)}
                          </div>
                          <div>
                            <strong className="d-block">{t.name}</strong>
                            <small className="text-muted">{t.role}</small>
                            <div className="text-warning mt-1" aria-label={`${t.rating} stars`}>
                              {renderStars(t.rating)}
                            </div>
                          </div>
                        </div>
                        <p className="mb-0">“{t.quote}”</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
              <button className="carousel-control-prev" type="button" data-bs-target={`#${tcid}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${tcid}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  