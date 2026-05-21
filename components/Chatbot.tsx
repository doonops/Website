import { FormEvent, useEffect, useRef, useState } from 'react'

const BOT_NAME = 'Vidhyarth'
const AUTO_OPEN_MS = 4500
const SESSION_AUTO_KEY = 'vidhyarth-auto-shown'
const SESSION_DISMISS_KEY = 'vidhyarth-chat-dismissed'

type Msg = { from: 'bot' | 'user'; text: string }

const GREETING = `Hi! Main **${BOT_NAME}** hoon — aapka AI EdTech assistant. 👋\n\n**How can I help you?**\n\nAI Tutor, Govt Exam Prep, Assessments, Mock Interview ya AI Courses — kuch bhi pooch sakte hain.`

const QUICK_REPLIES = [
  'AI Personal Tutor',
  'Govt Exam Prep',
  'Assessment Platform',
  'Book a Demo',
]

function looksLikeEmail(text: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())
}

function botReply(input: string, hasEmail: boolean): string {
  const t = input.toLowerCase().trim()

  if (looksLikeEmail(input)) {
    return `Dhanyavaad! ✅\n\nHumne **${input.trim()}** note kar liya hai. Hamari **sales team** jald hi aap se contact karegi.\n\nKoi aur sawaal ho to likh dena.`
  }

  if (hasEmail) {
    return 'Aapka email already mil chuka hai — team jald contact karegi. Aur kuch poochna ho to bataiye!'
  }

  if (/tutor|padhai|learn|study/.test(t)) {
    return '**AI Personal Tutor** — 24/7 doubt solving, adaptive learning, Hindi/English support.\n\nDemo ke liye apna **email** bhej dena, sales team connect karegi.'
  }
  if (/govt|upsc|ssc|bank|exam prep|railway/.test(t)) {
    return '**AI Govt Exam Prep** — UPSC, SSC, Banking, Railway ke liye AI study plan + mock tests.\n\nPlease apna **email** share karein — hum aapko guide karenge.'
  }
  if (/assess|test|aptitude|exam|proctor/.test(t)) {
    return '**AI Assessment Platform** — aptitude tests, online exams, auto-grading schools/colleges ke liye.\n\nApna **email** bhejein, sales team demo schedule karegi.'
  }
  if (/interview|placement|campus|job/.test(t)) {
    return '**AI Mock Interview** — HR & technical rounds ki practice + instant feedback.\n\nDemo chahiye? Apna **email** likh dena.'
  }
  if (/career|counsel|course|ai course|ml|genai/.test(t)) {
    return '**AI Career Counselor** aur **AI Technology Courses** — career roadmap + hands-on AI/ML learning.\n\nDetails ke liye **email** share karein.'
  }
  if (/demo|price|pricing|cost|fees|buy|plan/.test(t)) {
    return 'Demo aur pricing ke liye hamari sales team best plan suggest karegi.\n\nPlease apna **email** bhej den — **we will contact you soon**. 📧'
  }
  if (/hi|hello|namaste|hey|help/.test(t)) {
    return `Hello! **${BOT_NAME}** yahan hoon. Products, demos, ya partnerships — jo bhi chahiye likh dena.\n\nJaldi response ke liye apna **email** bhi share kar sakte hain.`
  }

  return 'Shukriya! Aapka message note ho gaya.\n\nHamari **sales team** aap se jald contact karegi — please apna **email** yahan bhej den. 📩\n\n_Ya niche quick options choose karein._'
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [hasEmail, setHasEmail] = useState(false)
  const [popped, setPopped] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)
  const greeted = useRef(false)

  // Auto-open ~4.5s after first visit (once per session)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(SESSION_DISMISS_KEY)) return
    if (sessionStorage.getItem(SESSION_AUTO_KEY)) return

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_AUTO_KEY, '1')
      setOpen(true)
      setPopped(true)
    }, AUTO_OPEN_MS)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true
      setMessages([{ from: 'bot', text: GREETING }])
    }
    if (!open) greeted.current = false
  }, [open])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const close = () => {
    setOpen(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_DISMISS_KEY, '1')
    }
  }

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((m) => [...m, { from: 'user', text: trimmed }])
    setInput('')

    if (looksLikeEmail(trimmed)) setHasEmail(true)

    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: botReply(trimmed, hasEmail || looksLikeEmail(trimmed)) }])
    }, 500)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part.split('\n').map((line, j) => (
        <span key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </span>
      ))
    })
  }

  return (
    <div className={`chatbot ${open ? 'open' : ''} ${popped ? 'popped' : ''}`}>
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label={`Chat with ${BOT_NAME}`}>
          <header className="chatbot-header">
            <div className="chatbot-avatar">V</div>
            <div>
              <strong>{BOT_NAME}</strong>
              <span>AI EdTech Assistant • Online</span>
            </div>
            <button type="button" className="chatbot-close" onClick={close} aria-label="Close chat">
              ✕
            </button>
          </header>

          <div className="chatbot-messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-bubble ${msg.from}`}>
                {formatText(msg.text)}
              </div>
            ))}
          </div>

          {messages.length <= 2 && (
            <div className="chatbot-quick">
              {QUICK_REPLIES.map((q) => (
                <button key={q} type="button" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-form" onSubmit={onSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message or your email…"
              aria-label="Message"
              autoComplete="email"
            />
            <button type="submit" className="btn btn-primary btn-sm" aria-label="Send">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chatbot-fab"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : `Chat with ${BOT_NAME}`}
      >
        {open ? '✕' : '💬'}
        {!open && <span className="chatbot-fab-label">{BOT_NAME}</span>}
      </button>
    </div>
  )
}
