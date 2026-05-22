import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CourseSidebar from '@/components/course/CourseSidebar'
import CourseShell from '@/components/course/CourseShell'
import { PYTHON_BOOTCAMP } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { getCourseMeta } from '@/lib/i18n'

const BASE = '/tutorials/python-bootcamp'

export default function PythonBootcampIndex() {
  const course = PYTHON_BOOTCAMP
  const { locale, t } = useLanguage()
  const meta = getCourseMeta(locale, 'python-bootcamp')
  const firstLesson = course.lessons[0]

  return (
    <Layout>
      <Head>
        <title>{meta.title} — Doonops</title>
        <meta name="description" content={meta.description} />
      </Head>

      <CourseShell>
        <div className="course-layout">
          <CourseSidebar course={course} basePath={BASE} />
          <div className="course-main">
            <section className="section hero hero-compact hero-static">
              <div className="hero-inner">
                <h1 className="hero-title">
                  <span className="gradient">{meta.title}</span>
                </h1>
                <p className="hero-subtitle">{meta.description}</p>
                <p className="muted course-lang-hint">{t('courseHeroSub')}</p>
                <p className="muted">
                  {meta.level} · {course.lessonsCount} {t('lessons')} · {course.modules.length}{' '}
                  {t('modules')}
                </p>
                {meta.audience && <p className="layman-audience-badge">{meta.audience}</p>}
                {firstLesson && (
                  <Link href={`${BASE}/${firstLesson.id}/`} className="btn btn-primary" style={{ marginTop: 16 }}>
                    {t('startWith')}: {firstLesson.title}
                  </Link>
                )}
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">{t('modules')}</h2>
              {course.modules.map((mod) => (
                <div key={mod.id} className="course-module-block">
                  <h3>{mod.title}</h3>
                  <ul className="course-lesson-list">
                    {mod.lessonIds.map((lid) => {
                      const lesson = course.lessons.find((l) => l.id === lid)
                      if (!lesson) return null
                      return (
                        <li key={lid}>
                          <Link href={`${BASE}/${lid}/`}>{lesson.title}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </CourseShell>
    </Layout>
  )
}
