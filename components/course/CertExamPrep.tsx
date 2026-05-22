import type { CertPrepContent } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { useState } from 'react'

export default function CertExamPrep({ data }: { data: CertPrepContent }) {
  const { t } = useLanguage()
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  return (
    <section className="cert-prep">
      <div className="cert-prep-header">
        <h2>{data.examName}</h2>
        <p className="muted">
          {data.duration} · {data.format}
        </p>
        <p className="muted">{data.passingNote}</p>
      </div>

      <h3>{t('certDomains')}</h3>
      <div className="cert-domains">
        {data.domains.map((d, i) => (
          <div key={i} className="cert-domain-card">
            <div className="cert-domain-head">
              <strong>{d.name}</strong>
              <span className="cert-weight">{d.weight}</span>
            </div>
            <ul>
              {d.topics.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3>{t('certFormats')}</h3>
      <ul className="cert-formats">
        {data.questionTypes.map((q, i) => (
          <li key={i}>
            <strong>{q.type}</strong> — {q.desc}
          </li>
        ))}
      </ul>

      <h3>{t('certSamples')}</h3>
      <div className="cert-samples">
        {data.samples.map((s, i) => (
          <article key={i} className="cert-sample">
            <p className="cert-q">{i + 1}. {s.q}</p>
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

      <h3>{t('certTips')}</h3>
      <ul>
        {data.tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  )
}
