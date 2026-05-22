import type { Locale } from '@/lib/i18n'

export type ProjectFileEntry = {
  path: string
  content: string
  description?: string
}

export type ProjectFilesTranslation = {
  title: string
  subtitle?: string
  folderHint: string
  files: ProjectFileEntry[]
}

export type QuizQuestion = {
  q: string
  options: string[]
  answer: string
  explain: string
}

export type QuizContent = {
  title: string
  subtitle?: string
  questions: QuizQuestion[]
}

export type CertPrepContent = {
  examName: string
  duration: string
  format: string
  passingNote: string
  domains: { name: string; weight: string; topics: string[] }[]
  questionTypes: { type: string; desc: string }[]
  samples: { q: string; options: string[]; answer: string; explain: string }[]
  tips: string[]
}

export type ChallengeTranslation = {
  sectionTitle: string
  sectionSub: string
  question: string
  hint?: string
  hintLabel: string
  starterCode: string
  solution: string
  expectedOutput: string
  check: string
  checking: string
  correct: string
  wrong: string
  solutionTitle: string
  copy: string
  copied: string
  yourOutput: string
  noOutput: string
  pasteInEditor: string
}

export type IntroTranslation = {
  goal: string
  plain: string
  analogy?: string
  steps?: string[]
  glossary?: { term: string; def: string }[]
  html: string
}

export type LessonBlock =
  | { type: 'intro'; translations: Record<Locale, IntroTranslation> }
  | {
      type: 'section'
      translations: Record<Locale, { title: string; subtitle?: string }>
    }
  | {
      type: 'markdown'
      translations: Record<Locale, { html: string }>
      /** @deprecated legacy */
      html?: string
    }
  | { type: 'challenge'; translations: Record<Locale, ChallengeTranslation> }
  | {
      type: 'localLab'
      translations: Record<
        Locale,
        { title: string; prerequisites?: string[]; steps: string[] }
      >
    }
  | {
      type: 'practice'
      translations: Record<Locale, { title: string; tasks: string[] }>
    }
  | { type: 'projectFiles'; translations: Record<Locale, ProjectFilesTranslation> }
  | { type: 'quiz'; translations: Record<Locale, QuizContent> }
  | { type: 'certPrep'; translations: Record<Locale, CertPrepContent> }
  | {
      type: 'code'
      code: string
      codeByLocale?: Partial<Record<Locale, string>>
      runnable: boolean
      sampleOutput?: string
      note?: string
      noteKey?: string
      label?: 'starter' | 'reference'
    }

export type Lesson = {
  id: string
  moduleId: string
  moduleTitle: string
  title: string
  order: number
  sourceFile: string
  blocks: LessonBlock[]
  beginnerFriendly?: boolean
}

export type Module = {
  id: string
  title: string
  order: number
  lessonIds: string[]
}

export type Course = {
  id: string
  title: string
  description: string
  level: string
  audience?: string
  lessonsCount: number
  modules: Module[]
  lessons: Lesson[]
}

export type FreeCourseCard = {
  id: string
  slug: string
  title: string
  description: string
  level: string
  lessonsCount: number
  href: string
  available: boolean
}

import bootcamp from '@/data/python-bootcamp.json'
import terraformAws from '@/data/terraform-aws.json'

export const PYTHON_BOOTCAMP = bootcamp as Course
export const TERRAFORM_AWS = terraformAws as Course

export type CourseSectionId = 'it-courses' | 'govt-exam' | 'competitive-english'

export type CourseSection = {
  id: CourseSectionId
  courses: FreeCourseCard[]
}

const IT_COURSES: FreeCourseCard[] = [
  {
    id: 'python-bootcamp',
    slug: 'python-bootcamp',
    title: PYTHON_BOOTCAMP.title,
    description: PYTHON_BOOTCAMP.description,
    level: PYTHON_BOOTCAMP.level,
    lessonsCount: PYTHON_BOOTCAMP.lessonsCount,
    href: '/tutorials/python-bootcamp/',
    available: true,
  },
  {
    id: 'terraform-aws',
    slug: 'terraform-aws',
    title: TERRAFORM_AWS.title,
    description: TERRAFORM_AWS.description,
    level: TERRAFORM_AWS.level,
    lessonsCount: TERRAFORM_AWS.lessonsCount,
    href: '/tutorials/terraform-aws/',
    available: true,
  },
]

/** Grouped catalog on /tutorials/ */
export const COURSE_SECTIONS: CourseSection[] = [
  { id: 'it-courses', courses: IT_COURSES },
  {
    id: 'govt-exam',
    courses: [
      {
        id: 'govt-exam-prep',
        slug: 'govt-exam-prep',
        title: 'Free Govt Exam Preparation',
        description: 'SSC, banking, railway and other government exam prep — free resources.',
        level: 'All levels',
        lessonsCount: 0,
        href: '#',
        available: false,
      },
    ],
  },
  {
    id: 'competitive-english',
    courses: [
      {
        id: 'competitive-english',
        slug: 'competitive-english',
        title: 'Learn Competitive English',
        description: 'Grammar, vocabulary, and exam-style English for competitive tests.',
        level: 'Beginner → Advanced',
        lessonsCount: 0,
        href: '#',
        available: false,
      },
    ],
  },
]

/** Flat list (legacy) */
export const FREE_COURSES: FreeCourseCard[] = COURSE_SECTIONS.flatMap((s) => s.courses)

export function getLessonById(course: Course, lessonId: string): Lesson | undefined {
  return course.lessons.find((l) => l.id === lessonId)
}

export function getLessonNav(course: Course, lessonId: string) {
  const idx = course.lessons.findIndex((l) => l.id === lessonId)
  return {
    prev: idx > 0 ? course.lessons[idx - 1] : null,
    next: idx >= 0 && idx < course.lessons.length - 1 ? course.lessons[idx + 1] : null,
    index: idx,
  }
}
