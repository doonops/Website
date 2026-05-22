import { useState } from 'react'
import type { ProjectFileEntry } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'

type Props = {
  title: string
  subtitle?: string
  folderHint: string
  files: ProjectFileEntry[]
}

export default function ProjectFilesBlock({ title, subtitle, folderHint, files }: Props) {
  const { t } = useLanguage()
  const [open, setOpen] = useState<string | null>(files[0]?.path ?? null)

  const copyAll = () => {
    const text = files.map((f) => `### ${f.path}\n${f.content}`).join('\n\n')
    navigator.clipboard?.writeText(text)
  }

  return (
    <section className="project-files">
      <div className="project-files-header">
        <h3 className="project-files-title">{title}</h3>
        {subtitle && <p className="muted project-files-sub">{subtitle}</p>}
        <p className="project-files-folder">
          <strong>{t('projectFolder')}:</strong> <code>{folderHint}</code>
        </p>
        <button type="button" className="btn btn-secondary btn-sm" onClick={copyAll}>
          {t('copyAllFiles')}
        </button>
      </div>

      <ul className="project-files-tree" aria-label="Project file list">
        {files.map((f) => (
          <li key={f.path}>
            <button
              type="button"
              className={`project-files-tab ${open === f.path ? 'active' : ''}`}
              onClick={() => setOpen(open === f.path ? null : f.path)}
            >
              {f.path}
            </button>
          </li>
        ))}
      </ul>

      {files.map((f) =>
        open === f.path ? (
          <div key={f.path} className="project-files-panel">
            <div className="project-files-panel-head">
              <code>{f.path}</code>
              {f.description && <span className="muted">{f.description}</span>}
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => navigator.clipboard?.writeText(f.content)}
              >
                {t('copy')}
              </button>
            </div>
            <pre className="project-files-code">{f.content}</pre>
          </div>
        ) : null
      )}
    </section>
  )
}
