import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

const PRODUCTS = [
  {
    image: 'tutor.svg',
    name: 'AI Personal Tutor',
    desc: '1-on-1 adaptive tutoring — concepts, doubts, revision plans tailored to you.',
    tag: 'Popular',
    features: ['Voice & chat tutor', 'Step-by-step explanations', 'Weak-topic detection'],
  },
  {
    image: 'assessment.svg',
    name: 'AI Assessment Platform',
    desc: 'Aptitude tests, online assessments, auto-grading & instant performance reports.',
    tag: 'B2B Ready',
    features: ['Aptitude & logical reasoning', 'Proctored online exams', 'Bulk student analytics'],
  },
  {
    image: 'govt-exam.svg',
    name: 'AI Govt Exam Prep',
    desc: 'UPSC, SSC, Banking, Railway, State PSC — syllabus-wise AI study paths.',
    tag: 'Trending',
    features: ['Daily targets & mocks', 'PYQ analysis with AI', 'Rank prediction insights'],
  },
  {
    image: 'interview.svg',
    name: 'AI Mock Interview',
    desc: 'Realistic HR & technical interviews with AI feedback on answers, tone & confidence.',
    tag: 'New',
    features: ['Campus & job roles', 'STAR method coaching', 'Communication score'],
  },
  {
    image: 'career.svg',
    name: 'AI Career Counselor',
    desc: 'Career roadmap, stream selection, college/course fit & job-market alignment.',
    tag: 'Students',
    features: ['Psychometric-style guidance', 'Resume & LinkedIn tips', 'Role-fit matching'],
  },
  {
    image: 'courses.svg',
    name: 'AI Technology Courses',
    desc: 'Hands-on courses on AI, ML, GenAI, prompt engineering & real-world projects.',
    tag: 'Upskill',
    features: ['Beginner to advanced paths', 'Project-based labs', 'Industry certificates'],
  },
]

const EXAMS = [
  'UPSC / Civil Services', 'SSC CGL / CHSL', 'IBPS / SBI Banking',
  'Railway NTPC', 'Campus Placement', 'Aptitude & Reasoning',
  'CAT / MBA Entrance', 'State PSC', 'Defence / NDA', 'NEET / JEE Prep',
]

const TRENDING = [
  { icon: '⚡', title: 'Adaptive Learning Paths', desc: 'AI adjusts difficulty based on your performance in real time.' },
  { icon: '📸', title: 'Photo Doubt Solver', desc: 'Snap a question — get instant step-by-step solutions (OCR + LLM).' },
  { icon: '🗣️', title: 'Voice AI Tutor', desc: 'Speak naturally in Hindi/English — learn like a live classroom.' },
  { icon: '📊', title: 'Predictive Score Analytics', desc: 'Know your expected rank & weak chapters before the real exam.' },
  { icon: '🛡️', title: 'AI Proctoring', desc: 'Secure online exams with face, tab & audio monitoring.' },
  { icon: '🎮', title: 'Gamified Study Streaks', desc: 'XP, badges & leaderboards to keep motivation high.' },
  { icon: '🌐', title: 'Multilingual Support', desc: 'Hindi, English & Hinglish — learn in the language you prefer.' },
  { icon: '📅', title: 'AI Study Planner', desc: 'Auto-generated daily schedules synced to your exam date.' },
]

const STATS = [
  { value: '50K+', label: 'Practice Questions' },
  { value: '10K+', label: 'Mock Tests Taken' },
  { value: '92%', label: 'Student Satisfaction' },
  { value: '24/7', label: 'AI Tutor Available' },
]

const LEARNERS = ['Schools & K-12', 'Colleges & Universities', 'Coaching Institutes', 'Corporate L&D', 'Individual Students', 'Government Training']

const STEPS = [
  { n: '01', title: 'Sign Up & Set Goal', desc: 'Choose exam, role, or course — AI builds your roadmap.' },
  { n: '02', title: 'Learn with AI Tutor', desc: 'Concepts, videos, notes & doubt-solving on demand.' },
  { n: '03', title: 'Practice & Assess', desc: 'Aptitude tests, chapter quizzes & full-length mocks.' },
  { n: '04', title: 'Interview & Place', desc: 'Mock interviews + career counselor → job-ready.' },
]

const TESTIMONIALS = [
  { text: '“AI tutor ne meri weak topics identify karke 3 mahine mein SSC pre clear karwaya.”', by: '— Rahul, SSC Aspirant' },
  { text: '“Online assessment platform se humne 2000+ students ka proctored exam ek din mein conduct kiya.”', by: '— Dr. Mehta, College Admin' },
  { text: '“Mock interview feedback itna detailed tha ki campus placement mein confidence double ho gaya.”', by: '— Priya, B.Tech Final Year' },
]

export default function Home() {
  const { basePath } = useRouter()

  const onContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const product = String(data.get('product') || '')
    const message = String(data.get('message') || '')
    const subject = `EdTech Demo Request — ${product || 'General'} — ${name}`
    const body = `Name: ${name}\nEmail: ${email}\nProduct Interest: ${product}\n\n${message}`
    window.location.href = `mailto:hello@doonops.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Layout>
      <Head>
        <title>Doonops EdTech — AI Tutor, Assessments, Govt Exam Prep & Career AI</title>
        <meta
          name="description"
          content="AI personal tutor, aptitude tests, online assessments, government exam preparation, mock interviews, career counselor & AI courses — India's AI EdTech platform by Doonops."
        />
        <meta property="og:title" content="Doonops EdTech — AI Learning Platform" />
        <meta
          property="og:description"
          content="Learn smarter with AI tutor, smart assessments, govt exam prep, mock interviews & career guidance."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Hero />

      {/* Stats bar — light band for trust/readability */}
      <section className="stats-bar section-edu-light">
        <div className="container stats-grid">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Products */}
      <section id="products" className="section section-glow">
        <div className="container">
          <p className="eyebrow center">Our EdTech Products</p>
          <h2 className="section-title center">Complete AI Learning Suite</h2>
          <p className="section-lead center">
            Har learner ke liye — school se government exam tak, placement se AI upskilling tak.
          </p>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <article className="product-card" key={p.name}>
                <div className="product-img-wrap">
                  <img
                    src={`${basePath}/illustrations/${p.image}`}
                    alt={p.name}
                    className="product-img"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={140}
                  />
                  <span className={`product-tag ${p.tag === 'Popular' ? 'hot' : ''}`}>{p.tag}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul className="product-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-secondary btn-block">Request Demo</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning journey */}
      <section id="journey" className="section section-alt">
        <div className="container split-section">
          <div className="split-content">
            <span className="label-pill">One Platform</span>
            <h2 className="section-title">Learn → Practice → Assess → Succeed</h2>
            <p className="section-lead">
              Sab products ek ecosystem mein connected — tutor se test, test se interview, interview se placement.
            </p>
            <ul className="feature-list">
              <li>Unified student dashboard across all products</li>
              <li>AI tracks progress across tutor, tests & interviews</li>
              <li>Institutes get admin panel & bulk licensing</li>
            </ul>
          </div>
          <div className="split-visual glass-panel">
            <img
              src={`${basePath}/illustrations/platform.svg`}
              alt="Learn Practice Assess Succeed flow"
              className="section-illustration"
            />
          </div>
        </div>
      </section>

      {/* Govt & competitive exams */}
      <section id="exams" className="section">
        <div className="container split-section">
          <div className="split-content">
            <span className="label-pill">Exam Coverage</span>
            <h2 className="section-title">Government & Competitive Exam Preparation</h2>
            <p className="section-lead">
              AI-generated study plans, daily targets, previous year analysis aur unlimited mock tests — har major exam ke liye.
            </p>
          </div>
          <div className="exam-visual">
            <img src={`${basePath}/illustrations/govt-exam.svg`} alt="Government exam preparation" className="section-illustration" />
          </div>
        </div>
        <div className="container">
          <div className="exam-grid">
            {EXAMS.map((e) => (
              <div className="exam-chip" key={e}>{e}</div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tutor highlight */}
      <section id="tutor" className="section section-alt">
        <div className="container split-section reverse">
          <div className="split-content">
            <span className="label-pill">Flagship Product</span>
            <h2 className="section-title">Your 24/7 AI Personal Tutor</h2>
            <p className="section-lead">
              Jaise ek best teacher — par kabhi tired nahi, kabhi unavailable nahi. Concepts samjhao, doubts poocho, revision karwao.
            </p>
            <ul className="feature-list">
              <li>Chapter-wise & topic-wise learning</li>
              <li>Instant quiz after every concept</li>
              <li>Works on mobile, tablet & desktop</li>
            </ul>
          </div>
          <div className="tutor-visual-col">
            <img src={`${basePath}/illustrations/tutor.svg`} alt="AI Personal Tutor" className="section-illustration" />
            <div className="chat-demo glass-panel">
            <div className="chat-msg bot slide-in">Namaste! Aaj hum Percentage ke shortcut tricks cover karenge. Ready?</div>
            <div className="chat-msg user slide-in d1">Haan, profit-loss se related doubt hai.</div>
            <div className="chat-msg bot slide-in d2">Bilkul! Pehle base concept samjhte hain, phir 3 practice questions…</div>
            <div className="chat-typing"><span className="pulse-dot" /> AI Tutor typing…</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment platform */}
      <section id="assessments" className="section">
        <div className="container">
          <div className="dashboard-header">
            <div>
              <span className="label-pill">For Schools & Institutes</span>
              <h2 className="section-title">AI Assessment & Aptitude Test Platform</h2>
              <p className="section-lead">
                Online exams, aptitude batteries, auto-evaluation — teachers ko hours ki marking bachao, students ko instant feedback do.
              </p>
            </div>
            <span className="live-badge"><span className="pulse" /> Live Proctoring</span>
          </div>
          <div className="assess-split">
          <img src={`${basePath}/illustrations/assessment.svg`} alt="AI Assessment platform" className="section-illustration assess-img" />
          <div className="dashboard glass-panel">
            <div className="dashboard-title">Assessment Dashboard — Live</div>
            <div className="agent-grid">
              <div className="agent-card">
                <div className="agent-top">
                  <strong>Aptitude Test — Batch A</strong>
                  <span className="agent-role">Logical + Quant</span>
                </div>
                <div className="agent-metric">248</div>
                <div className="agent-delta">students attempted today</div>
              </div>
              <div className="agent-card">
                <div className="agent-top">
                  <strong>Mid-Term Assessment</strong>
                  <span className="agent-role">Auto-graded</span>
                </div>
                <div className="agent-metric">96%</div>
                <div className="agent-delta">papers evaluated by AI</div>
              </div>
              <div className="agent-card">
                <div className="agent-top">
                  <strong>Avg. Score Improvement</strong>
                  <span className="agent-role">Last 30 days</span>
                </div>
                <div className="agent-metric">+18%</div>
                <div className="agent-delta">vs previous cycle</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mock interview */}
      <section id="interview" className="section section-alt">
        <div className="container split-section">
          <div className="split-content">
            <span className="label-pill">Placement Ready</span>
            <h2 className="section-title">AI Mock Interview Preparation</h2>
            <p className="section-lead">
              HR, technical, managerial — har role ke liye AI interviewer. Answer analyze, body language tips, improvement plan.
            </p>
            <div className="tab-row">
              {['HR Round', 'Technical', 'Managerial', 'Campus'].map((t, i) => (
                <span key={t} className={`tab-chip ${i === 0 ? 'active' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="interview-score glass-panel">
            <div className="score-ring">
              <span className="score-val">87</span>
              <span className="score-label">Interview Score</span>
            </div>
            <ul className="score-breakdown">
              <li><span>Communication</span><div className="bar"><div className="fill" style={{ width: '90%' }} /></div></li>
              <li><span>Technical Depth</span><div className="bar"><div className="fill" style={{ width: '82%' }} /></div></li>
              <li><span>Confidence</span><div className="bar"><div className="fill" style={{ width: '88%' }} /></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trending AI features */}
      <section id="trending" className="section section-glow">
        <div className="container">
          <p className="eyebrow center">Trending in 2025–26</p>
          <h2 className="section-title center">Cutting-Edge AI Features</h2>
          <p className="section-lead center">
            Jo aaj market mein sabse zyada demand mein hai — hum already build kar chuke hain.
          </p>
          <div className="trending-grid">
            {TRENDING.map((t) => (
              <div className="trending-card" key={t.title}>
                <span className="trending-icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section section-alt">
        <div className="container">
          <h2 className="section-title center">How It Works</h2>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div className="step-card" key={s.n}>
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="section">
        <div className="container split-section reverse">
          <div className="split-content">
            <span className="label-pill">Smart Insights</span>
            <h2 className="section-title">AI Progress Analytics</h2>
            <p className="section-lead">
              Students, parents aur teachers — sab ko clear dashboards: accuracy, speed, weak topics, predicted score.
            </p>
            <ul className="feature-list">
              <li>Weekly performance reports (PDF + app)</li>
              <li>Compare with batch / national percentile</li>
              <li>Parent & teacher notifications</li>
            </ul>
          </div>
          <div className="analytics-panel glass-panel">
            {['Accuracy', 'Speed', 'Consistency', 'Rank Potential'].map((m, i) => (
              <div className="analytics-row" key={m}>
                <span>{m}</span>
                <div className="bar"><div className="fill accent" style={{ width: `${78 + i * 5}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section id="for-whom" className="section section-edu-light">
        <div className="container">
          <h2 className="section-title center">Built For Everyone in Education</h2>
          <div className="industry-grid">
            {LEARNERS.map((l) => (
              <div className="industry-chip" key={l}>{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title center">Students & Institutes Trust Us</h2>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <blockquote className="quote" key={i}>
                <p>{t.text}</p>
                <footer>{t.by}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section section-tight">
        <div className="container">
          <h2 className="section-title center">Powered by Trusted Cloud</h2>
          <div className="partner-logos">
            <div className="partner"><img src={`${basePath}/partners/aws.svg`} alt="AWS" /></div>
            <div className="partner"><img src={`${basePath}/partners/gcp.svg`} alt="Google Cloud" /></div>
            <div className="partner"><img src={`${basePath}/partners/azure.svg`} alt="Microsoft Azure" /></div>
            <div className="partner"><img src={`${basePath}/partners/digitalocean.svg`} alt="DigitalOcean" /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section section-cta">
        <div className="container cta-block">
          <h2>Apni Learning Journey AI se Shuru Karo</h2>
          <p>Free demo, institute pricing, ya individual plan — hum 24 ghante mein respond karte hain.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Book Free Demo</a>
            <a href="#products" className="btn btn-secondary">View All Products</a>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers-teaser" className="section section-alt">
        <div className="container">
          <div className="cta">
            <div>
              <h2>EdTech mein build karo</h2>
              <p>AI engineers, educators, content creators — join our team.</p>
            </div>
            <a className="btn btn-primary" href="/careers">View Open Roles</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-edu-light">
        <div className="container">
          <h2 className="section-title">Book a Free Demo</h2>
          <p className="section-lead">Batao kaunsa product chahiye — hum personalized demo schedule karenge.</p>
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
              <span>Product Interest</span>
              <select name="product" required defaultValue="">
                <option value="" disabled>Select a product</option>
                {PRODUCTS.map((p) => (
                  <option key={p.name} value={p.name}>{p.name}</option>
                ))}
                <option value="Multiple / Full Suite">Multiple / Full Suite</option>
                <option value="Institute Partnership">Institute Partnership</option>
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={4} placeholder="Exam, batch size, timeline…" required />
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Request Demo</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
