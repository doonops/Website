import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — Doonops EdTech</title>
      </Head>
      <section className="section hero hero-static" style={{ minHeight: '60vh' }}>
        <div className="container hero-inner" style={{ textAlign: 'center' }}>
          <h1 className="hero-title">
            <span className="gradient">404</span>
          </h1>
          <p className="hero-subtitle">Yeh page nahi mila. Home par wapas jao.</p>
          <div className="hero-cta">
            <Link href="/" className="btn btn-primary">Go to Homepage</Link>
            <Link href="/careers/" className="btn btn-secondary">Careers</Link>
          </div>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>
    </>
  )
}
