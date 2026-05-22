import type { LessonBlock } from '@/lib/courses'
import { localizeStarterCode } from '@/lib/i18n'
import { useLanguage } from '@/lib/LanguageContext'
import CertExamPrep from '@/components/course/CertExamPrep'
import HclBlock from '@/components/course/HclBlock'
import LessonChallenge from '@/components/course/LessonChallenge'
import LocalLabSteps from '@/components/course/LocalLabSteps'
import ModuleQuiz from '@/components/course/ModuleQuiz'
import ProjectFilesBlock from '@/components/course/ProjectFilesBlock'
import PythonPlayground from '@/components/course/PythonPlayground'

function CodeBlock({
  block,
  index,
}: {
  block: Extract<LessonBlock, { type: 'code' }>
  index: number
}) {
  const { locale, t } = useLanguage()
  const isStarter = block.label === 'starter'
  const isHcl = !block.runnable
  const code =
    isStarter && block.codeByLocale?.[locale]
      ? block.codeByLocale[locale]!
      : isStarter
        ? localizeStarterCode(block.code, locale)
        : block.code
  const note = block.noteKey ? t(block.noteKey) : block.note

  if (isHcl) {
    return <HclBlock code={code} label={t('exampleHcl')} note={note} />
  }

  return (
    <div className={isStarter ? 'lesson-starter-wrap' : 'lesson-reference-wrap'}>
      {isStarter && (
        <div className="lesson-block-label lesson-block-label-starter">{t('easyExample')}</div>
      )}
      {block.label === 'reference' && (
        <div className="lesson-block-label lesson-block-label-ref">{t('referenceExample')}</div>
      )}
      <PythonPlayground
        key={`${index}-${locale}`}
        initialCode={code}
        runnable={block.runnable}
        sampleOutput={block.sampleOutput}
        note={note}
      />
    </div>
  )
}

export default function LessonContent({ blocks }: { blocks: LessonBlock[] }) {
  const { locale, t } = useLanguage()

  return (
    <div className="lesson-content">
      {blocks.map((block, i) => {
        if (block.type === 'intro') {
          const tr = block.translations[locale] ?? block.translations.en
          return (
            <div
              key={i}
              className="lesson-intro layman-intro"
              dangerouslySetInnerHTML={{ __html: tr.html }}
            />
          )
        }
        if (block.type === 'section') {
          const tr = block.translations[locale] ?? block.translations.en
          return (
            <div key={i} className="lesson-section-divider">
              <h2>{tr.title}</h2>
              {tr.subtitle && <p className="muted">{tr.subtitle}</p>}
            </div>
          )
        }
        if (block.type === 'markdown') {
          const tr =
            block.translations?.[locale] ??
            block.translations?.en ??
            (block.html ? { html: block.html } : null)
          if (!tr?.html) return null
          return (
            <div
              key={i}
              className="lesson-prose lesson-prose-reference"
              dangerouslySetInnerHTML={{ __html: tr.html }}
            />
          )
        }
        if (block.type === 'projectFiles') {
          const pf = block.translations[locale] ?? block.translations.en
          return (
            <ProjectFilesBlock
              key={i}
              title={pf.title}
              subtitle={pf.subtitle}
              folderHint={pf.folderHint}
              files={pf.files}
            />
          )
        }
        if (block.type === 'localLab') {
          const lab = block.translations[locale] ?? block.translations.en
          return <LocalLabSteps key={i} lab={lab} />
        }
        if (block.type === 'practice') {
          const pr = block.translations[locale] ?? block.translations.en
          return (
            <section key={i} className="lesson-practice">
              <h3>{pr.title}</h3>
              <ul>
                {pr.tasks.map((task, j) => (
                  <li key={j}>{task}</li>
                ))}
              </ul>
            </section>
          )
        }
        if (block.type === 'quiz') {
          const quiz = block.translations[locale] ?? block.translations.en
          return <ModuleQuiz key={i} data={quiz} />
        }
        if (block.type === 'certPrep') {
          const cert = block.translations[locale] ?? block.translations.en
          return <CertExamPrep key={i} data={cert} />
        }
        if (block.type === 'challenge') {
          const ch = block.translations[locale] ?? block.translations.en
          return <LessonChallenge key={i} challenge={ch} />
        }
        return <CodeBlock key={i} block={block} index={i} />
      })}
    </div>
  )
}
