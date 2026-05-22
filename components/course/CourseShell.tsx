import LanguageSwitcher from '@/components/course/LanguageSwitcher'
import type { ReactNode } from 'react'

export default function CourseShell({ children }: { children: ReactNode }) {
  return (
    <div className="course-shell">
      <div className="course-lang-bar container">
        <LanguageSwitcher />
      </div>
      {children}
    </div>
  )
}
