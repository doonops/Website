export type Locale = 'en' | 'hi' | 'hinglish'

export const LOCALES: { id: Locale; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'hinglish', label: 'Hinglish' },
  { id: 'hi', label: 'हिंदी' },
]

export const STORAGE_KEY = 'doonops-course-lang'

type Dict = Record<string, string>

const UI: Record<Locale, Dict> = {
  en: {
    language: 'Language',
    startHereTag: 'Start here — no coding background needed',
    whatYouLearn: 'What you will learn',
    inSimpleWords: 'In simple words',
    thinkLike: 'Think of it like this',
    howToUse: 'How to use this lesson',
    wordsToKnow: 'Words to know',
    easyExample: 'Easy example — try this first',
    referenceExample: 'Reference example',
    referenceSectionTitle: 'Reference notes (from full bootcamp)',
    referenceSectionSub: 'Optional — deeper detail when you are ready (mostly English)',
    starterNote: 'Easy example — run this first. Change values and press Run again.',
    run: 'Run',
    running: 'Running…',
    reset: 'Reset',
    output: 'Output',
    loadingRuntime: 'Loading runtime…',
    readOnly: 'Read-only — run full demo on your computer',
    pyodideHint: 'Runs in your browser via Pyodide — no server. First run may take a few seconds.',
    browserPracticeNote:
      'Browser practice only — full example needs Python on your computer (files, Flask, threads, etc.).',
    expectedFromNotebook: 'Expected (from notebook)',
    noOutput: '(no output)',
    lessonOf: 'Lesson',
    of: 'of',
    source: 'Source',
    freeCourses: 'Courses',
    coursesPageHero: 'Free learning paths — pick a section below. IT courses are live; more sections coming soon.',
    sectionItCourses: 'IT Courses',
    sectionItCoursesSub: 'Programming, cloud, and DevOps — hands-on lessons with local labs.',
    sectionGovtExam: 'Free Govt Exam Preparation',
    sectionGovtExamSub: 'Government job exams — study material and practice (coming soon).',
    sectionCompetitiveEnglish: 'Learn Competitive English',
    sectionCompetitiveEnglishSub: 'English for SSC, banking, and competitive exams (coming soon).',
    availableCourses: 'All courses in this section',
    startCourse: 'Start course',
    comingSoon: 'Coming soon',
    free: 'Free',
    soon: 'Soon',
    backToCourse: 'Back to course',
    startWith: 'Start with',
    modules: 'Modules',
    lessons: 'lessons',
    noCodingRequired: 'No prior coding experience required',
    tutorialsHero:
      'Never coded? No problem. Pick your language below — plain lessons, simple examples first, then deeper notes.',
    courseHeroSub:
      'Pick English, Hinglish, or Hindi — explanations change; code stays the same.',
    copy: 'Copy',
    exampleHcl: 'Example HCL',
    hclLocalNote:
      'Terraform runs on your computer — copy this HCL into a folder, then follow the local lab steps below.',
    localLabPrereq: 'Prerequisites',
    practiceTitle: 'Practice checklist',
    certShowAnswer: 'Show answer',
    certHideAnswer: 'Hide answer',
    certDomains: 'Exam domains (study weight)',
    certFormats: 'Question formats',
    certSamples: 'Sample questions (practice)',
    certTips: 'Exam tips',
    projectFolder: 'Suggested folder',
    copyAllFiles: 'Copy all files',
  },
  hinglish: {
    language: 'Bhasha',
    startHereTag: 'Yahan se shuru karo — coding ki zaroorat nahi',
    whatYouLearn: 'Kya seekhoge',
    inSimpleWords: 'Seedhe simple shabdon mein',
    thinkLike: 'Aise samjho jaise',
    howToUse: 'Is lesson ko kaise use karein',
    wordsToKnow: 'Ye words yaad rakho',
    easyExample: 'Aasan example — pehle ye try karo',
    referenceExample: 'Reference example',
    referenceSectionTitle: 'Reference notes (poora bootcamp)',
    referenceSectionSub: 'Optional — jab ready ho tab padho (zyada tar English)',
    starterNote: 'Pehle ye chalao. Values badlo aur dubara Run dabao.',
    run: 'Run',
    running: 'Chal raha hai…',
    reset: 'Reset',
    output: 'Output',
    loadingRuntime: 'Python load ho raha hai…',
    readOnly: 'Sirf padhne ke liye — full demo PC par chalao',
    pyodideHint: 'Browser mein chalta hai — server nahi. Pehli baar thoda time lagega.',
    browserPracticeNote:
      'Sirf browser practice — poora example PC par Python se chalega (files, Flask, threads, etc.).',
    expectedFromNotebook: 'Notebook se expected output',
    noOutput: '(koi output nahi)',
    lessonOf: 'Lesson',
    of: 'mein se',
    source: 'Source file',
    freeCourses: 'Courses',
    coursesPageHero:
      'Free learning — neeche section chuno. IT courses live hain; baaki jald.',
    sectionItCourses: 'IT Courses',
    sectionItCoursesSub: 'Programming, cloud, DevOps — local labs ke sath.',
    sectionGovtExam: 'Free Govt Exam Preparation',
    sectionGovtExamSub: 'Sarkari exam prep — material aur practice (jald).',
    sectionCompetitiveEnglish: 'Learn Competitive English',
    sectionCompetitiveEnglishSub: 'SSC, banking ke liye English (jald).',
    availableCourses: 'Is section ke courses',
    startCourse: 'Course shuru karo',
    comingSoon: 'Jald aa raha hai',
    free: 'Free',
    soon: 'Soon',
    backToCourse: 'Course par wapas',
    startWith: 'Shuru karo',
    modules: 'Modules',
    lessons: 'lessons',
    noCodingRequired: 'Pehle coding aani zaroori nahi',
    tutorialsHero:
      'Kabhi code nahi likha? Koi baat nahi. Neeche language chuno — Hinglish ya Hindi mein samjhao, examples pehle aasan.',
    courseHeroSub:
      'English, Hinglish ya Hindi — samjhauta badlega; code same rahega.',
    copy: 'Copy',
    exampleHcl: 'Example HCL',
    hclLocalNote:
      'Terraform PC par chalta hai — HCL copy karo, neeche local lab steps follow karo.',
    localLabPrereq: 'Pehle ye chahiye',
    practiceTitle: 'Practice checklist',
    certShowAnswer: 'Answer dikhao',
    certHideAnswer: 'Answer chhupao',
    certDomains: 'Exam domains',
    certFormats: 'Question types',
    certSamples: 'Sample questions',
    certTips: 'Exam tips',
    projectFolder: 'Folder path',
    copyAllFiles: 'Saari files copy',
  },
  hi: {
    language: 'भाषा',
    startHereTag: 'यहाँ से शुरू करें — कोडिंग की जरूरत नहीं',
    whatYouLearn: 'आप क्या सीखेंगे',
    inSimpleWords: 'आसान भाषा में',
    thinkLike: 'ऐसे समझें जैसे',
    howToUse: 'इस पाठ का उपयोग कैसे करें',
    wordsToKnow: 'जानने वाले शब्द',
    easyExample: 'आसान उदाहरण — पहले यह आज़माएँ',
    referenceExample: 'संदर्भ उदाहरण',
    referenceSectionTitle: 'संदर्भ नोट्स (पूरा बूटकैंप)',
    referenceSectionSub: 'वैकल्पिक — तैयार होने पर पढ़ें (अधिकतर अंग्रेज़ी)',
    starterNote: 'पहले यह चलाएँ। मान बदलकर फिर Run दबाएँ।',
    run: 'चलाएँ',
    running: 'चल रहा है…',
    reset: 'रीसेट',
    output: 'परिणाम',
    loadingRuntime: 'Python लोड हो रहा है…',
    readOnly: 'केवल पढ़ने के लिए — पूरा डेमो कंप्यूटर पर चलाएँ',
    pyodideHint: 'ब्राउज़र में चलता है — सर्वर नहीं। पहली बार थोड़ा समय लग सकता है।',
    browserPracticeNote:
      'केवल ब्राउज़र अभ्यास — पूरा उदाहरण कंप्यूटर पर Python से चलेगा (फ़ाइल, Flask, threads, आदि)।',
    expectedFromNotebook: 'नोटबुक से अपेक्षित परिणाम',
    noOutput: '(कोई परिणाम नहीं)',
    lessonOf: 'पाठ',
    of: 'में से',
    source: 'स्रोत फ़ाइल',
    freeCourses: 'पाठ्यक्रम',
    coursesPageHero:
      'मुफ़्त सीखना — नीचे अनुभाग चुनें। IT courses तैयार हैं; बाकी जल्द।',
    sectionItCourses: 'IT Courses',
    sectionItCoursesSub: 'प्रोग्रामिंग, क्लाउड, DevOps — स्थानीय लैब के साथ।',
    sectionGovtExam: 'मुफ़्त सरकारी परीक्षा तैयारी',
    sectionGovtExamSub: 'SSC, बैंकिंग आदि — अध्ययन सामग्री (जल्द आएगा)।',
    sectionCompetitiveEnglish: 'प्रतियोगी अंग्रेज़ी सीखें',
    sectionCompetitiveEnglishSub: 'प्रतियोगी परीक्षाओं के लिए अंग्रेज़ी (जल्द आएगा)।',
    availableCourses: 'इस अनुभाग के पाठ्यक्रम',
    startCourse: 'पाठ्यक्रम शुरू करें',
    comingSoon: 'जल्द आ रहा है',
    free: 'मुफ़्त',
    soon: 'जल्द',
    backToCourse: 'पाठ्यक्रम पर वापस',
    startWith: 'शुरू करें',
    modules: 'मॉड्यूल',
    lessons: 'पाठ',
    noCodingRequired: 'पहले कोडिंग आना ज़रूरी नहीं',
    tutorialsHero:
      'कभी कोड नहीं लिखा? कोई बात नहीं। नीचे भाषा चुनें — हिंदी में समझाएँ, पहले आसान उदाहरण।',
    courseHeroSub:
      'अंग्रेज़ी, हिंग्लिश या हिंदी — व्याख्या बदलेगी; कोड वही रहेगा।',
    copy: 'कॉपी करें',
    exampleHcl: 'HCL उदाहरण',
    hclLocalNote:
      'Terraform आपके कंप्यूटर पर चलता है — HCL कॉपी करें, नीचे स्थानीय लैब के चरणों का पालन करें।',
    localLabPrereq: 'पूर्व-आवश्यकताएँ',
    practiceTitle: 'अभ्यास सूची',
    certShowAnswer: 'उत्तर दिखाएँ',
    certHideAnswer: 'उत्तर छिपाएँ',
    certDomains: 'परीक्षा डोमेन',
    certFormats: 'प्रश्न प्रकार',
    certSamples: 'नमूना प्रश्न',
    certTips: 'परीक्षा सुझाव',
    projectFolder: 'सुझावित फ़ोल्डर',
    copyAllFiles: 'सभी फ़ाइलें कॉपी करें',
  },
}

export type CourseSlug = 'python-bootcamp' | 'terraform-aws'
export type CatalogCourseSlug = CourseSlug | 'govt-exam-prep' | 'competitive-english'

const COURSE_META: Record<
  CourseSlug,
  Record<Locale, { title: string; description: string; level: string; audience: string }>
> = {
  'python-bootcamp': {
    en: {
      title: 'Python Bootcamp for Beginners',
      description:
        'Never coded before? Start here. Plain explanations, everyday examples, and a simple practice box in every lesson.',
      level: 'Absolute beginner → Advanced',
      audience: 'No prior coding experience required',
    },
    hinglish: {
      title: 'Python Bootcamp — Beginners ke liye',
      description:
        'Pehli baar code? Yahan shuru karo. Seedhi samjh, roz ke examples, aur har lesson mein browser practice.',
      level: 'Bilkul naya → Advanced',
      audience: 'Pehle coding ki zaroorat nahi',
    },
    hi: {
      title: 'पायथन बूटकैंप — शुरुआती के लिए',
      description:
        'पहली बार कोड? यहाँ से शुरू करें। सरल भाषा, रोज़मर्रा के उदाहरण, और हर पाठ में ब्राउज़र अभ्यास।',
      level: 'बिल्कुल नया → उन्नत',
      audience: 'पहले कोडिंग आना ज़रूरी नहीं',
    },
  },
  'terraform-aws': {
    en: {
      title: 'Terraform on AWS — Beginner to Certification',
      description:
        'IaC from zero to production patterns on AWS. Every module includes local lab steps; final module covers HashiCorp Terraform Associate exam format and sample questions.',
      level: 'Beginner → Associate ready',
      audience: 'No prior Terraform — AWS account for cloud labs',
    },
    hinglish: {
      title: 'Terraform on AWS — Beginner se Certification',
      description:
        'IaC shuru se AWS production tak. Har module ke baad local lab; last mein Terraform Associate exam format + sample MCQs (English/Hindi/Hinglish).',
      level: 'Beginner → Associate ready',
      audience: 'Terraform pehle nahi — AWS labs ke liye account',
    },
    hi: {
      title: 'Terraform on AWS — शुरुआती से प्रमाणन',
      description:
        'IaC की बुनियाद से AWS production तक। हर मॉड्यूल में स्थानीय लैब; अंत में Terraform Associate परीक्षा प्रारूप और नमूना प्रश्न।',
      level: 'शुरुआती → Associate तैयार',
      audience: 'Terraform अनुभव नहीं — क्लाउड लैब के लिए AWS खाता',
    },
  },
}

export function t(locale: Locale, key: string): string {
  return UI[locale][key] ?? UI.en[key] ?? key
}

export function getCourseMeta(locale: Locale, course: CourseSlug = 'python-bootcamp') {
  return COURSE_META[course][locale]
}

const CATALOG_COURSE_META: Record<
  'govt-exam-prep' | 'competitive-english',
  Record<Locale, { title: string; description: string; level: string }>
> = {
  'govt-exam-prep': {
    en: {
      title: 'Free Govt Exam Preparation',
      description:
        'SSC, banking, railway, UPSC-style prep notes, practice sets, and strategies — free on Doonops.',
      level: 'All aspirants',
    },
    hinglish: {
      title: 'Free Govt Exam Preparation',
      description:
        'SSC, banking, railway — sarkari exam ke liye notes, practice, strategy. Jald launch.',
      level: 'Sab aspirants',
    },
    hi: {
      title: 'मुफ़्त सरकारी परीक्षा तैयारी',
      description:
        'SSC, बैंकिंग, रेलवे — नोट्स, अभ्यास, रणनीति। जल्द उपलब्ध।',
      level: 'सभी अभ्यर्थी',
    },
  },
  'competitive-english': {
    en: {
      title: 'Learn Competitive English',
      description:
        'Grammar, vocabulary, comprehension, and writing for SSC, banking, and state exams — step by step.',
      level: 'Beginner → Exam ready',
    },
    hinglish: {
      title: 'Learn Competitive English',
      description:
        'Grammar, vocab, comprehension — competitive exams ke liye. Course jald aa raha hai.',
      level: 'Beginner → Exam ready',
    },
    hi: {
      title: 'प्रतियोगी अंग्रेज़ी सीखें',
      description:
        'व्याकरण, शब्दावली, समझ — SSC, बैंकिंग परीक्षाओं के लिए। जल्द उपलब्ध।',
      level: 'शुरुआती → परीक्षा तैयार',
    },
  },
}

export function getCatalogCourseMeta(locale: Locale, courseId: string) {
  if (courseId === 'python-bootcamp' || courseId === 'terraform-aws') {
    return getCourseMeta(locale, courseId)
  }
  const m = CATALOG_COURSE_META[courseId as keyof typeof CATALOG_COURSE_META]
  if (m) return { ...m[locale], audience: '' }
  return null
}

export function getSectionTitle(locale: Locale, sectionId: string) {
  const key =
    sectionId === 'it-courses'
      ? 'sectionItCourses'
      : sectionId === 'govt-exam'
        ? 'sectionGovtExam'
        : sectionId === 'competitive-english'
          ? 'sectionCompetitiveEnglish'
          : sectionId
  const subKey =
    sectionId === 'it-courses'
      ? 'sectionItCoursesSub'
      : sectionId === 'govt-exam'
        ? 'sectionGovtExamSub'
        : sectionId === 'competitive-english'
          ? 'sectionCompetitiveEnglishSub'
          : ''
  return { title: t(locale, key), subtitle: subKey ? t(locale, subKey) : '' }
}

/** Module sidebar titles */
export const MODULE_TITLES: Record<string, Record<Locale, string>> = {
  'python-basics': { en: 'Python Basics', hinglish: 'Python Basics', hi: 'पायथन बुनियाद' },
  'control-flow': { en: 'Control Flow', hinglish: 'Control Flow', hi: 'नियंत्रण प्रवाह' },
  'data-structures': { en: 'Data Structures', hinglish: 'Data Structures', hi: 'डेटा संरचनाएँ' },
  functions: { en: 'Functions', hinglish: 'Functions', hi: 'फ़ंक्शन' },
  modules: { en: 'Modules', hinglish: 'Modules', hi: 'मॉड्यूल' },
  'file-handling': { en: 'File Handling', hinglish: 'File Handling', hi: 'फ़ाइल हैंडलिंग' },
  'exception-handling': { en: 'Exception Handling', hinglish: 'Exception Handling', hi: 'त्रुटि संभालना' },
  'class-and-objects': { en: 'Classes & Objects', hinglish: 'Classes & Objects', hi: 'क्लास और ऑब्जेक्ट' },
  'advance-python-concepts': { en: 'Advanced Python', hinglish: 'Advanced Python', hi: 'उन्नत पायथन' },
  'data-analysis-with-python': { en: 'Data Analysis', hinglish: 'Data Analysis', hi: 'डेटा विश्लेषण' },
  'working-with-databases': { en: 'Databases', hinglish: 'Databases', hi: 'डेटाबेस' },
  'logging-in-python': { en: 'Logging', hinglish: 'Logging', hi: 'लॉगिंग' },
  flask: { en: 'Flask (Reference)', hinglish: 'Flask (Reference)', hi: 'Flask (संदर्भ)' },
  streamlit: { en: 'Streamlit', hinglish: 'Streamlit', hi: 'Streamlit' },
  'memory-management': { en: 'Memory Management', hinglish: 'Memory Management', hi: 'मेमोरी प्रबंधन' },
  'multithreading-and-multiprocessing': {
    en: 'Multithreading & Multiprocessing',
    hinglish: 'Multithreading & Multiprocessing',
    hi: 'मल्टीथ्रेडिंग',
  },
  'course-intro': { en: 'Course Introduction', hinglish: 'Course Introduction', hi: 'कोर्स परिचय' },
  'iac-fundamentals': { en: 'IaC Fundamentals', hinglish: 'IaC Fundamentals', hi: 'IaC की बुनियाद' },
  'setup-cli': { en: 'Setup & CLI', hinglish: 'Setup & CLI', hi: 'सेटअप और CLI' },
  'hcl-core': { en: 'HCL & Core Workflow', hinglish: 'HCL & Workflow', hi: 'HCL और वर्कफ़्लो' },
  'variables-state': { en: 'Variables & State', hinglish: 'Variables & State', hi: 'Variables और State' },
  'meta-arguments': { en: 'Loops & Meta-Arguments', hinglish: 'Loops & meta-args', hi: 'Loops और Meta-Arguments' },
  'aws-vpc': { en: 'AWS VPC', hinglish: 'AWS VPC', hi: 'AWS VPC' },
  'aws-compute': { en: 'EC2 & Security', hinglish: 'EC2 & Security', hi: 'EC2 और Security' },
  'aws-alb': { en: 'Application Load Balancer', hinglish: 'ALB', hi: 'Application Load Balancer' },
  'aws-routing': { en: 'ALB Routing & TLS', hinglish: 'ALB routing', hi: 'ALB Routing और TLS' },
  'aws-three-tier': { en: '3-Tier on AWS', hinglish: '3-Tier on AWS', hi: 'AWS पर 3-Tier' },
  'aws-scaling': { en: 'Auto Scaling', hinglish: 'Auto Scaling', hi: 'Auto Scaling' },
  'aws-observability': { en: 'CloudWatch & NLB', hinglish: 'CloudWatch & NLB', hi: 'CloudWatch और NLB' },
  'terraform-modules': { en: 'Terraform Modules', hinglish: 'Modules', hi: 'Terraform Modules' },
  'remote-state': { en: 'Remote State & Teams', hinglish: 'Remote state', hi: 'Remote State' },
  'iac-devops': { en: 'IaC with CI/CD', hinglish: 'IaC with CI/CD', hi: 'CI/CD के साथ IaC' },
  troubleshooting: { en: 'Troubleshooting', hinglish: 'Troubleshooting', hi: 'समस्या निवारण' },
  capstone: { en: 'Capstone Project', hinglish: 'Capstone project', hi: 'कैपस्टोन प्रोजेक्ट' },
  certification: { en: 'Certification Prep', hinglish: 'Certification prep', hi: 'प्रमाणन की तैयारी' },
}

export function getModuleTitle(moduleId: string, locale: Locale, fallback: string) {
  return MODULE_TITLES[moduleId]?.[locale] ?? fallback
}

export type IntroContent = {
  goal: string
  plain: string
  analogy?: string
  steps?: string[]
  glossary?: { term: string; def: string }[]
  moduleNote?: string
}

/** Starter code # comments — client-side */
export function localizeStarterCode(code: string, locale: Locale): string {
  if (!code || locale === 'en') return code
  const rules: [RegExp, string][] =
    locale === 'hi'
      ? [
          [/Step 1: Run this/gi, 'चरण 1: यह चलाएँ'],
          [/Step 2: Change/gi, 'चरण 2: बदलें'],
          [/Your first Python/gi, 'आपकी पहली Python'],
          [/text \(str\)/gi, 'टेक्स्ट (str)'],
          [/whole number \(int\)/gi, 'पूर्ण संख्या (int)'],
          [/decimal \(float\)/gi, 'दशमलव (float)'],
          [/yes\/no \(bool\)/gi, 'हाँ/ना (bool)'],
          [/Try: change marks/gi, 'आज़माएँ: marks बदलें'],
          [/No coding experience/gi, 'कोडिंग अनुभव की जरूरत नहीं'],
          [/Python is just/gi, 'Python bas'],
        ]
      : [
          [/Step 1: Run this/gi, 'Step 1: Ye chalao'],
          [/Step 2: Change/gi, 'Step 2: Badlo'],
          [/Your first Python/gi, 'Tumhari pehli Python'],
          [/text \(str\)/gi, 'text (str)'],
          [/whole number \(int\)/gi, 'poori number (int)'],
          [/decimal \(float\)/gi, 'decimal (float)'],
          [/yes\/no \(bool\)/gi, 'haan/na (bool)'],
          [/Try: change marks/gi, 'Try: marks badlo'],
          [/No coding experience/gi, 'Coding experience ki zaroorat nahi'],
          [/Python is just/gi, 'Python bas'],
        ]
  let out = code
  for (const [re, rep] of rules) out = out.replace(re, rep)
  return out
}

export function buildIntroHtml(locale: Locale, content: IntroContent): string {
  const stepsHtml = content.steps?.length
    ? `<ol>${content.steps.map((s) => `<li>${s}</li>`).join('')}</ol>`
    : ''
  const glossaryHtml = content.glossary?.length
    ? `<p><strong>${t(locale, 'wordsToKnow')}:</strong></p><ul>${content.glossary
        .map((g) => `<li><strong>${g.term}</strong> — ${g.def}</li>`)
        .join('')}</ul>`
    : ''
  return `
<div class="layman-intro-inner">
  <p class="layman-tag">${t(locale, 'startHereTag')}</p>
  <h3>${t(locale, 'whatYouLearn')}</h3>
  <p>${content.goal}</p>
  <h3>${t(locale, 'inSimpleWords')}</h3>
  <p>${content.plain}</p>
  ${content.analogy ? `<h3>${t(locale, 'thinkLike')}</h3><p>${content.analogy}</p>` : ''}
  ${stepsHtml ? `<h3>${t(locale, 'howToUse')}</h3>${stepsHtml}` : ''}
  ${glossaryHtml}
  ${content.moduleNote ? `<p class="layman-module-note">${content.moduleNote}</p>` : ''}
</div>`
}
