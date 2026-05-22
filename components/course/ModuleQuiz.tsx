import type { QuizContent } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { useState } from 'react'

export default function ModuleQuiz({ data }: { data: QuizContent }) {
  const { t } = useLanguage()
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  return (
    <section className="module-quiz">
      <h3 className="module-quiz-title">{data.title}</h3>
      {data.subtitle && <p className="muted module-quiz-sub">{data.subtitle}</p>}
      <div className="cert-samples">
        {data.questions.map((s, i) => (
          <article key={i} className="cert-sample">
            <p className="cert-q">
              {i + 1}. {s.q}
            </p>
            <ul>
              {s.options.map((o, j) => (
                <li key={j}>{o}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
            >
              {revealed[i] ? t('certHideAnswer') : t('certShowAnswer')}
            </button>
            {revealed[i] && (
              <div className="cert-answer">
                <p>
                  <strong>Answer:</strong> {s.answer}
                </p>
                <p className="muted">{s.explain}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
