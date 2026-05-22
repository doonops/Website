import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CourseShell from '@/components/course/CourseShell'
import { COURSE_SECTIONS } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { getCatalogCourseMeta, getSectionTitle } from '@/lib/i18n'

function CourseCard({
  courseId,
  href,
  available,
  lessonsCount,
}: {
  courseId: string
  href: string
  available: boolean
  lessonsCount: number
}) {
  const { t, locale } = useLanguage()
  const meta = getCatalogCourseMeta(locale, courseId)
  if (!meta) return null

  return (
    <article className={`card course-card ${available ? '' : 'course-card-soon'}`}>
      <div className="course-badge">{available ? t('free') : t('soon')}</div>
      <h3>{meta.title}</h3>
      <p>{meta.description}</p>
      <div className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
        {meta.level}
        {lessonsCount > 0 && ` · ${lessonsCount} ${t('lessons')}`}
      </div>
      {available ? (
        <Link href={href} className="btn btn-primary">
          {t('startCourse')}
        </Link>
      ) : (
        <span className="btn btn-secondary" style={{ opacity: 0.6, pointerEvents: 'none' }}>
          {t('comingSoon')}
        </span>
      )}
    </article>
  )
}

export default function Tutorials() {
  const { locale, t } = useLanguage()

  return (
    <Layout>
      <Head>
        <title>{t('freeCourses')} — Doonops</title>
        <meta name="description" content={t('coursesPageHero')} />
      </Head>

      <CourseShell>
        <section className="section hero hero-compact hero-static">
          <div className="container hero-inner">
            <h1 className="hero-title">
              <span className="gradient">{t('freeCourses')}</span>
            </h1>
            <p className="hero-subtitle">{t('coursesPageHero')}</p>
          </div>
          <div className="hero-bg" aria-hidden="true" />
        </section>

        <section className="section">
          <div className="container">
            {COURSE_SECTIONS.map((section) => {
              const { title, subtitle } = getSectionTitle(locale, section.id)
              return (
                <div key={section.id} className="course-section-block">
                  <header className="course-section-header">
                    <h2 className="section-title course-section-title">{title}</h2>
                    {subtitle && <p className="muted course-section-sub">{subtitle}</p>}
                  </header>
                  <div className="cards grid-3">
                    {section.courses.map((c) => (
                      <CourseCard
                        key={c.id}
                        courseId={c.id}
                        href={c.href}
                        available={c.available}
                        lessonsCount={c.lessonsCount}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </CourseShell>
    </Layout>
  )
}
