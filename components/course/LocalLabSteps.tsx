import { useLanguage } from '@/lib/LanguageContext'

type Props = {
  lab: { title: string; prerequisites?: string[]; steps: string[] }
}

export default function LocalLabSteps({ lab }: Props) {
  const { t } = useLanguage()
  return (
    <section className="local-lab">
      <h3 className="local-lab-title">{lab.title}</h3>
      {lab.prerequisites?.length ? (
        <>
          <p className="local-lab-label">{t('localLabPrereq')}</p>
          <ul>
            {lab.prerequisites.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      ) : null}
      <ol className="local-lab-steps">
        {lab.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </section>
  )
}
