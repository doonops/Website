import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider.jsx' // <-- REMOVED (can break if file missing)

const services = [
  { icon: 'fa-laptop', title: 'DevSecOps Solutions', desc: 'End-to-end DevSecOps with security across SDLC.', color: 'feature_box_col_one' },
  { icon: 'fa-cloud', title: 'Cloud Migration', desc: 'Seamless migration to AWS, Azure, and GCP.', color: 'feature_box_col_two' },
  { icon: 'fa-cogs', title: 'Release Engineering', desc: 'Automated CI/CD and best-practice deployments.', color: 'feature_box_col_three' },
  { icon: 'fa-cloud-upload', title: 'Cloud Infra Consulting', desc: 'Scalable cloud architecture and strategy.', color: 'feature_box_col_four' },
  { icon: 'fa-lock', title: 'Security & Compliance', desc: 'GDPR, SOC2, ISO27001 readiness and guardrails.', color: 'feature_box_col_five' },
  { icon: 'fa-database', title: 'Database Management', desc: 'Performance, security, and scalability for SQL/NoSQL.', color: 'feature_box_col_six' },
  { icon: 'fa-code', title: 'Infrastructure as Code', desc: 'Terraform, Ansible, CloudFormation automation.', color: 'feature_box_col_seven' },
  { icon: 'fa-server', title: 'Managed Kubernetes', desc: 'Setup, scaling, monitoring for K8s workloads.', color: 'feature_box_col_eight' },
  { icon: 'fa-bug', title: 'Automated Testing', desc: 'Reliable releases through test automation.', color: 'feature_box_col_nine' },
  { icon: 'fa-shopping-cart', title: 'E-commerce Platforms', desc: 'Scalable stores, secure payments, analytics.', color: 'feature_box_col_one' },
  { icon: 'fa-robot', iconType: 'fas', title: 'AI Bots & Automation', desc: 'Chatbots and workflow automation for ops.', color: 'feature_box_col_two' },
  { icon: 'fa-briefcase', title: 'Business Applications', desc: 'Custom CRM/ERP and analytics dashboards.', color: 'feature_box_col_three' },
];

export function HomeHero() {
  return (
    <section
      id="home"
      className="home-hero d-flex align-items-center"
      style={{
        backgroundImage: "url('/images/img1.jpg'), url('../images/img1.jpg')",
      }}
    >
      <div className="container text-center">
        <h1>Design, Deployment, and Management</h1>
        <h2>Your Trusted Cloud Partner</h2>
        <p className="lead">Adopt powerful cloud and AI solutions to scale your business.</p>
        <div className="actions">
          <a className="btn btn-primary btn-lg me-2" href="#services">Explore Services</a>
          <a className="btn btn-outline-light btn-lg" href="#customers">Our Customers</a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-5 section-gap about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Building Scalable, AI-Driven Cloud Solutions</p>
            <p>
              At <b>DoonOps.ai</b>, we craft seamless DevOps, Cloud, AI, and Software solutions designed to scale, automate, and innovate your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const byTitle = Object.fromEntries(services.map(s => [s.title, s]));
  const slides = [
    [byTitle['E-commerce Platforms'], byTitle['AI Bots & Automation'], byTitle['Business Applications']],
    [byTitle['Cloud Infra Consulting'], byTitle['Security & Compliance'], byTitle['Database Management']],
    [byTitle['Infrastructure as Code'], byTitle['Managed Kubernetes'], byTitle['Automated Testing']],
    [byTitle['DevSecOps Solutions'], byTitle['Cloud Migration'], byTitle['Release Engineering']],
  ];
  const carouselId = 'servicesCarouselReact';

  return (
    <section id="services" className="pt-5 pb-5 section-gap" style={{ backgroundColor: '#f7f8fb' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Our Services</h2>
          <p>We provide world-class engineering and products tailored to your needs.</p>
        </div>

        <div className="text-center">
          <p className="mb-3">Want to dive deeper into our capabilities and approach?</p>
          <Link to="/about" className="btn btn-outline-primary btn-lg">Discover More</Link>
        </div>

        <div
          id={carouselId}
          className="carousel slide"
          style={{ marginTop: '4rem' }}
          data-bs-ride="carousel"
          data-bs-interval="3500"
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            {slides.map((_, idx) => (
              <button key={idx} type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''} aria-current={idx === 0 ? 'true' : undefined} aria-label={`Slide ${idx + 1}`}></button>
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((group, slideIdx) => (
              <div key={slideIdx} className={`carousel-item ${slideIdx === 0 ? 'active' : ''}`}>
                <div className="row">
                  {group.filter(Boolean).map((s, i) => (
                    <div key={i} className="col-lg-4 col-sm-6">
                      <div className="item">
                        <span className={`icon ${s.color}`}>
                          <i className={`${s.iconType || 'fa'} ${s.icon}`}></i>
                        </span>
                        <h6>{s.title}</h6>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const items = [
    { icon: 'fab fa-aws', color: '#FF9900', name: 'AWS', desc: 'Scalable cloud computing and security.' },
    { icon: 'fab fa-microsoft', color: '#0078D4', name: 'Azure', desc: 'Hybrid cloud and enterprise security.' },
    { icon: 'fab fa-google', color: '#4285F4', name: 'GCP', desc: 'AI-driven analytics and HPC.' },
    { icon: 'fab fa-gitlab', color: '#607078', name: 'VMware', desc: 'Virtualization and hybrid-cloud.' },
    { icon: 'fab fa-digital-ocean', color: '#0080FF', name: 'DigitalOcean', desc: 'Developer-friendly cloud.' },
  ];
  const partnerSlides = [];
  for (let i = 0; i < items.length; i += 3) partnerSlides.push(items.slice(i, i + 3));
  const pid = 'partnersCarouselReact';

  return (
    <section id="partners" className="py-5 section-gap">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Our Partners</h2>
          <p>We collaborate with leading cloud and infrastructure providers.</p>
        </div>
        <div id={pid} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2800" data-bs-pause="hover">
          <div className="carousel-indicators">
            {partnerSlides.map((_, i) => (
              <button key={i} type="button" data-bs-target={`#${pid}`} data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-current={i === 0 ? 'true' : undefined} aria-label={`Slide ${i + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {partnerSlides.map((group, gi) => (
              <div key={gi} className={`carousel-item ${gi === 0 ? 'active' : ''}`}>
                <div className="row g-4 g-lg-5">
                  {group.map((p, pi) => (
                    <div key={pi} className="col-md-6 col-lg-4">
                      <div className="item text-center h-100">
                        <span className="icon" style={{ background: 'transparent' }}>
                          <i className={`${p.icon}`} style={{ color: p.color, fontSize: '1.5em' }}></i>
                        </span>
                        <h6>{p.name}</h6>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${pid}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${pid}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// NEW: Our Customers (Projects + Testimonials)
export function Customers() {
  const projects = [
    {
      title: 'fixkrlo.com',
      icon: 'fas fa-screwdriver-wrench',
      color: '#0d6efd',
      tags: ['Website', 'Services', 'Support'],
      desc: 'On-demand repair & services platform with modern web stack.',
      link: '/projects/fixkrlo'
    },
    {
      title: 'Valley Hotels',
      icon: 'fas fa-hotel',
      color: '#20c997',
      tags: ['Hospitality', 'Website', 'Booking'],
      desc: 'Hotel website with booking integrations & marketing pages.',
      link: '/projects/valley-hotels'
    },
    {
      title: 'Creators Constructions & Developer',
      icon: 'fas fa-building',
      color: '#fd7e14',
      tags: ['Real Estate', 'CRM', 'Website'],
      desc: 'Portfolio site + inquiry CRM and CMS.',
      link: '/projects/creators-constructions'
    },
    {
      title: 'SecureBuddy AI',
      icon: 'fas fa-shield-alt',
      color: '#6f42c1',
      tags: ['AI', 'Security', 'Assistant'],
      desc: 'AI security assistant for policy Q&A and guardrails.',
      link: '/projects/securebuddy-ai'
    },
    {
      title: 'Media AI',
      icon: 'fas fa-film',
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

  const initials = (full) => full.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const renderStars = (n = 5) =>
    Array.from({ length: 5 }).map((_, i) => (
      <i key={i} className={`fa-star ${i < n ? 'fas' : 'far'}`} aria-hidden="true" />
    ));

  const tcid = 'testimonialsCarousel';

  return (
    <section id="customers" className="py-5 section-gap" style={{ background: '#fff' }}>
      {/* INLINE STYLES: buttons + testimonials (guaranteed override) */}
      <style>{`
        /* Custom blue button (no Bootstrap .btn to avoid theme conflicts) */
        #customers .cs-btn{
          display:inline-flex;align-items:center;justify-content:center;gap:.5rem;
          padding:.5rem .9rem;border-radius:.5rem;border:1px solid #0d6efd;
          background:#0d6efd;color:#fff;text-decoration:none;font-weight:600;line-height:1.2;
          box-shadow:0 .25rem .5rem rgba(13,110,253,.15);
          transition:background .2s,border-color .2s,color .2s,transform .15s;-webkit-appearance:none
        }
        #customers .cs-btn:hover,#customers .cs-btn:focus{
          background:#0b5ed7;border-color:#0a58ca;color:#fff;transform:translateY(-1px);outline:none
        }

        /* Project card hover */
        #customers .project-card{transition:transform .2s,box-shadow .2s}
        #customers .project-card:hover{transform:translateY(-3px);box-shadow:0 .75rem 1.25rem rgba(0,0,0,.08)}

        /* Testimonials bigger, comfy & smooth */
        #customers .testimonial-card{max-width:1024px}
        #customers .testimonial-card .card-body{padding:2rem 2.25rem}
        #customers .testimonial-card p{font-size:1.1rem;line-height:1.7;color:#2b2f36}
        #customers .carousel-fade .carousel-item{transition:opacity .5s ease-in-out}
        #customers .carousel-item.active .testimonial-card{
          transform:translateY(-2px);box-shadow:0 .75rem 1.5rem rgba(0,0,0,.08);
          transition:transform .3s,box-shadow .3s
        }
        #customers .carousel-indicators [data-bs-target]{width:8px;height:8px;border-radius:50%}
      `}</style>

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
                  {/* CUSTOM BUTTON (blue even without hover) */}
                  <Link to={p.link} className="cs-btn">Case Study</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
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
                        {/* No photo → initials circle */}
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: 64, height: 64, background: '#eef2ff', color: '#4f46e5', fontWeight: 700 }}
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


export function Contact() {
  // NOT USED ANYMORE — keeping here only if you still link to it somewhere
  return null;
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <Counters />
      <Partners />
      <Communicate />
      <Trainings />
      <Team />
      <Customers /> {/* replaced Contact */}
      <FAQ />
    </>
  );
}

export function Trainings() {
  const logos = [
    { icon: 'devicon-docker-plain colored', label: 'DevOps Training' },
    { icon: 'fab fa-aws colored', label: 'AWS Training' },
    { icon: 'fas fa-brain colored', label: 'Generative AI Training' },
    { icon: 'fas fa-laptop-code colored', label: 'Full Stack Training' },
    { icon: 'fas fa-chart-line colored', label: 'Data Science Training' },
    { icon: 'devicon-salesforce-plain colored', label: 'Salesforce Training' },
    { icon: 'devicon-googlecloud-plain colored', label: 'GCP Training' },
    { icon: 'fab fa-microsoft colored', label: 'Azure Training' },
  ];
  return (
    <section id="training" className="py-5 section-gap" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">IT Trainings</h2>
          <p>Future-Ready IT Training for Students & Professionals.</p>
        </div>
        <div className="row justify-content-center">
          {logos.map((l, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <div className="training-logo">
                <i className={l.icon}></i>
                <p>{l.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const team = [
    { name: 'Anshul Negi', role: 'DevOps Engineer', img: '/images/pexels-andrea-piacquadio-845434.jpg' },
    { name: 'Saurav Rawat', role: 'Operation Manager', img: '/images/pexels-vinicius-wiesehofer-1130624.jpg' },
    { name: 'Prabhat', role: 'Technical Lead', img: '/images/pexels-hussein-altameemi-2776353.jpg' },
    { name: 'Yutesh', role: 'DevOps', img: '/images/pexels-andrea-piacquadio-745136.jpg' },
  ];
  return (
    <section className="team section-gap" id="team">
      <h2 className="heading" style={{ marginTop: '-1.5rem' }}>our team</h2>
      <p></p>
      {team.map((m) => (
        <div className="row" key={m.name}>
          <div className="card">
            <div className="image">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="info">
              <h3>{m.name}</h3>
              <span>{m.role}</span>
              <div className="icons">
                <a href="#" className="fab fa-facebook-f" aria-label="Facebook"></a>
                <a href="#" className="fab fa-twitter" aria-label="Twitter"></a>
                <a href="#" className="fab fa-instagram" aria-label="Instagram"></a>
                <a href="#" className="fab fa-linkedin" aria-label="LinkedIn"></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function FAQ() {
  const items = [
    { q: 'How much will it cost?', a: 'Give us a quick call with your needs and we will provide a ballpark and a firm quote after a short discovery.' },
    { q: 'How long does it take to design?', a: 'Timeline depends on scope and content readiness. We can work to your target date.' },
    { q: 'How do I start with DoonOps.ai?', a: 'Contact us with your requirements, pick an engagement model, and we start right away.' },
    { q: 'Can you modernize my current site?', a: 'Yes. We redesign and rebuild for performance, UX, and SEO.' },
    { q: 'When do I pay?', a: 'Typically split across project milestones; we’re flexible to your needs.' },
  ];
  return (
    <section className="py-5 section-gap" id="faq">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title" style={{ color: '#00bfff' }}>FAQ</h2>
        </div>
        <div className="accordion" id="faqAccordion">
          {items.map((it, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading-${idx}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${idx}`} aria-expanded="false" aria-controls={`collapse-${idx}`}>
                  {it.q}
                </button>
              </h2>
              <div id={`collapse-${idx}`} className="accordion-collapse collapse" aria-labelledby={`heading-${idx}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Counters() {
  return (
    <section className="counters section-gap">
      <div className="container">
        <div>
          <i className="far fa-clock fa-4x"></i>
          <div className="counter" data-target="1350">1350</div>
          <h3>Working Hours</h3>
        </div>
        <div>
          <i className="fas fa-gift fa-4x"></i>
          <div className="counter" data-target="70">70</div>
          <h3>Completed Projects</h3>
        </div>
        <div>
          <i className="fas fa-users fa-4x"></i>
          <div className="counter" data-target="50">50</div>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <i className="fas fa-award fa-4x"></i>
          <div className="counter" data-target="25">25</div>
          <h3>Awards Received</h3>
        </div>
      </div>
    </section>
  );
}

export function Communicate() {
  return (
    <div className="communicate section-gap">
      <h3>Adopt powerful cloud solutions to introduce better efficiency, </h3>
      <p>increase revenues and build a scalable business.</p>
      <a href="#customers"><button className="btn">See Customers</button></a>
    </div>
  );
}
