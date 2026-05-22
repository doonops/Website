import { useLanguage } from '@/lib/LanguageContext'

type Props = {
  code: string
  label?: string
  note?: string
}

export default function HclBlock({ code, label, note }: Props) {
  const { t } = useLanguage()
  return (
    <div className="lesson-starter-wrap">
      {label && <div className="lesson-block-label lesson-block-label-starter">{label}</div>}
      <div className="playground">
        <div className="playground-toolbar">
          <span className="playground-lang">HCL</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => navigator.clipboard?.writeText(code)}
          >
            {t('copy')}
          </button>
        </div>
        <pre className="playground-editor hcl-readonly">{code}</pre>
        {note && <p className="playground-hint muted">{note}</p>}
      </div>
    </div>
  )
}
