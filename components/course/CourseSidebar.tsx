import Link from 'next/link'
import type { Course } from '@/lib/courses'
import { useLanguage } from '@/lib/LanguageContext'
import { getModuleTitle } from '@/lib/i18n'

type Props = {
  course: Course
  currentLessonId?: string
  basePath: string
}

export default function CourseSidebar({ course, currentLessonId, basePath }: Props) {
  const { locale, t } = useLanguage()
  const lessonMap = new Map(course.lessons.map((l) => [l.id, l]))

  return (
    <aside className="course-sidebar">
      <Link href={`${basePath}/`} className="course-sidebar-back">
        ← {t('backToCourse')}
      </Link>
      <nav className="course-sidebar-nav" aria-label="Course lessons">
        {course.modules.map((mod) => (
          <div key={mod.id} className="course-sidebar-module">
            <div className="course-sidebar-module-title">
              {getModuleTitle(mod.id, locale, mod.title)}
            </div>
            <ul>
              {mod.lessonIds.map((lid) => {
                const lesson = lessonMap.get(lid)
                if (!lesson) return null
                const active = lid === currentLessonId
                return (
                  <li key={lid}>
                    <Link
                      href={`${basePath}/${lid}/`}
                      className={active ? 'active' : undefined}
                      aria-current={active ? 'page' : undefined}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
