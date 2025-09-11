import { useEffect, useRef } from 'react'

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Lightweight neural particle background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let w = 0, h = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)
    type P = { x:number; y:number; vx:number; vy:number }
    const pts: P[] = []
    type Burst = { x:number; y:number; vx:number; vy:number; life:number }
    const bursts: Burst[] = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      // seed points based on area
      pts.length = 0
      const count = Math.max(24, Math.floor((w*h) / 40000))
      for (let i=0;i<count;i++) {
        pts.push({
          x: Math.random()*w,
          y: Math.random()*h,
          vx: (Math.random()-0.5)*0.3,
          vy: (Math.random()-0.5)*0.3,
        })
      }
    }
    let hue = 260
    const draw = () => {
      ctx.clearRect(0,0,w,h)
      // glow grid background
      ctx.fillStyle = 'rgba(255,255,255,0.02)'
      for (let y=0; y<h; y+=32) ctx.fillRect(0, y, w, 1)
      for (let x=0; x<w; x+=32) ctx.fillRect(x, 0, 1, h)

      // particles
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      // connections (color-shift)
      for (let i=0;i<pts.length;i++) {
        for (let j=i+1;j<pts.length;j++) {
          const a = pts[i], b = pts[j]
          const dx = a.x-b.x, dy = a.y-b.y
          const d2 = dx*dx + dy*dy
          const md2 = 150*150
          if (d2 < md2) {
            const t = 1 - d2/md2
            const h = (hue + (t*40)) % 360
            ctx.strokeStyle = `hsla(${h}, 85%, 65%, ${0.22*t})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      // nodes
      for (const p of pts) {
        ctx.fillStyle = `hsla(${(hue+20)%360}, 90%, 70%, 0.45)`
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI*2); ctx.fill()
      }

      // bursts
      for (let i=bursts.length-1;i>=0;i--) {
        const b = bursts[i]
        b.x += b.vx; b.y += b.vy
        b.vx *= 0.985; b.vy *= 0.985
        b.life -= 1
        const t = Math.max(0, Math.min(1, b.life/60))
        ctx.fillStyle = `hsla(${(hue+140)%360}, 90%, 60%, ${0.40*t})`
        ctx.beginPath(); ctx.arc(b.x, b.y, 2+ (1-t)*3, 0, Math.PI*2); ctx.fill()
        if (b.life <= 0) bursts.splice(i,1)
      }

      hue = (hue + 0.5) % 360
      raf = requestAnimationFrame(draw)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize(); draw()
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const N = 24
      for (let i=0;i<N;i++) {
        const a = (Math.PI*2) * (i/N) + Math.random()*0.5
        const s = 1.5 + Math.random()*2.5
        bursts.push({ x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s, life: 60+Math.floor(Math.random()*20) })
      }
    }
    canvas.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); ro.disconnect(); canvas.removeEventListener('click', onClick) }
  }, [])

  return (
    <section id="hero" className="section hero hero-3d">
      <div className="container hero-inner">
        <div className="title-wrap">
          <h1 className="hero-title">
            <span className="gradient">Build Bold. Ship Smart. Scale Confidently.</span>
          </h1>
          <p className="hero-subtitle">
            We craft enterprise-grade software, AI-driven mobile apps, and automated DevOps pipelines
            that power modern businesses.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-secondary">Start a Project</a>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="neural" aria-hidden="true" />
      <div className="hero-bg" aria-hidden="true"></div>
    </section>
  )
}
