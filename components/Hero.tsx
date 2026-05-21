import { useRouter } from 'next/router'

const PILLS = [
  { label: 'AI Tutor', sub: '24/7 Learning' },
  { label: 'Smart Tests', sub: 'Aptitude & Exams' },
  { label: 'Govt Prep', sub: 'UPSC • SSC' },
  { label: 'Career AI', sub: 'Interview' },
]

export default function Hero() {
  const { basePath } = useRouter()

  return (
    <section id="hero" className="hero hero-static">
      <div className="container hero-split">
        <div className="hero-inner">
          <p className="eyebrow ai-badge">
            <span className="pulse-dot" />
            AI-Powered EdTech
          </p>
          <h1 className="hero-title">
            <span className="gradient">Learn Smarter.</span>
            <br />
            <span className="hero-tagline">Score Higher. Get Hired.</span>
          </h1>
          <p className="hero-subtitle">
            AI tutor, aptitude tests, govt exam prep, mock interviews & career guidance — ek platform.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Free Demo</a>
          </div>
          <div className="hero-pills">
            {PILLS.map((p) => (
              <div className="hero-pill" key={p.label}>
                <strong>{p.label}</strong>
                <span>{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={`${basePath}/illustrations/hero-learners.svg`}
            alt="Students learning with AI"
            className="hero-illustration"
            width={400}
            height={300}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true" />
    </section>
  )
}
