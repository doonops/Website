import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CourseSidebar from '@/components/course/CourseSidebar'
import CourseShell from '@/components/course/CourseShell'
import LessonContent from '@/components/course/LessonContent'
import {
  PYTHON_BOOTCAMP,
  getLessonById,
  getLessonNav,
} from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { getCourseMeta, getModuleTitle } from '@/lib/i18n'

const BASE = '/tutorials/python-bootcamp'

export function getStaticPaths() {
  return {
    paths: PYTHON_BOOTCAMP.lessons.map((l) => ({ params: { slug: l.id } })),
    fallback: false,
  }
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const lesson = getLessonById(PYTHON_BOOTCAMP, params.slug)
  if (!lesson) return { notFound: true }
  return { props: { lessonId: lesson.id } }
}

export default function PythonBootcampLesson({ lessonId }: { lessonId: string }) {
  const course = PYTHON_BOOTCAMP
  const lesson = getLessonById(course, lessonId)!
  const { prev, next, index } = getLessonNav(course, lessonId)
  const { locale, t } = useLanguage()
  const meta = getCourseMeta(locale, 'python-bootcamp')
  const moduleTitle = getModuleTitle(lesson.moduleId, locale, lesson.moduleTitle)

  return (
    <Layout>
      <Head>
        <title>
          {lesson.title} — {meta.title}
        </title>
        <meta name="description" content={`${moduleTitle}: ${lesson.title}`} />
      </Head>

      <CourseShell>
      <div className="course-layout">
        <CourseSidebar course={course} currentLessonId={lessonId} basePath={BASE} />
        <div className="course-main">
          <header className="lesson-header">
            <p className="muted lesson-breadcrumb">
              {moduleTitle} · {t('lessonOf')} {index + 1} {t('of')} {course.lessonsCount}
            </p>
            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="muted" style={{ fontSize: 13 }}>
              {t('source')}: {lesson.sourceFile}
            </p>
          </header>

          <LessonContent blocks={lesson.blocks} />

          <nav className="lesson-pager" aria-label="Lesson navigation">
            {prev ? (
              <Link href={`${BASE}/${prev.id}/`} className="lesson-pager-link">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`${BASE}/${next.id}/`} className="lesson-pager-link lesson-pager-next">
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
      </CourseShell>
    </Layout>
  )
}
