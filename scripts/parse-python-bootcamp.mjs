/**
 * Parses Complete-Python-Bootcamp notebooks & .py lessons into data/python-bootcamp.json
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { applyLaymanToLesson } from './layman-content.mjs'
import { sanitizeNames } from './sanitize-names.mjs'
import { translateMarkdown } from './reference-i18n.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'Complete-Python-Bootcamp')
const OUT = path.join(__dirname, '..', 'data', 'python-bootcamp.json')

const MODULE_ORDER = [
  { dir: '1-Python Basics', title: 'Python Basics' },
  { dir: '2-Control Flow', title: 'Control Flow' },
  { dir: '3-Data Structures', title: 'Data Structures' },
  { dir: '4-Functions', title: 'Functions' },
  { dir: '5-Modules', title: 'Modules' },
  { dir: '6-File Handling', title: 'File Handling' },
  { dir: '7-Exception Handling', title: 'Exception Handling' },
  { dir: '8-Class And Objects', title: 'Classes & Objects' },
  { dir: '9-Advance Python Concepts', title: 'Advanced Python' },
  { dir: '10-Data Analysis With Python', title: 'Data Analysis' },
  { dir: '11-Working With Databases', title: 'Databases' },
  { dir: '12-Logging In Python', title: 'Logging' },
  { dir: '13-Flask', title: 'Flask (Reference)' },
  { dir: '14-Streamlit', title: 'Streamlit' },
  { dir: '15-Memory Management', title: 'Memory Management' },
  { dir: '16-Multithreading and Multiprocessing', title: 'Multithreading & Multiprocessing' },
]

const PY_LESSONS = {
  '13-Flask': [
    { file: 'flask/main.py', title: 'Flask Entry Point' },
    { file: 'flask/app.py', title: 'Flask App Basics' },
    { file: 'flask/jinja.py', title: 'Jinja Templates' },
    { file: 'flask/getpost.py', title: 'GET & POST' },
    { file: 'flask/api.py', title: 'Flask API' },
  ],
  '14-Streamlit': [
    { file: 'widgets.py', title: 'Streamlit Widgets' },
    { file: 'app.py', title: 'Streamlit App' },
    { file: 'classification.py', title: 'Classification Demo' },
  ],
  '16-Multithreading and Multiprocessing': [
    { file: 'multi_threading.py', title: 'Multithreading Basics' },
    { file: 'advance_multi_threading.py', title: 'Advanced Multithreading' },
    { file: 'webscrapping_multi_threading.py', title: 'Web Scraping with Threads' },
    { file: 'multi_processing.py', title: 'Multiprocessing Basics' },
    { file: 'factorial_multi_processing.py', title: 'Factorial with Multiprocessing' },
    { file: 'advance_multi_processing.py', title: 'Advanced Multiprocessing' },
  ],
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\.ipynb$|\.py$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function titleFromFilename(name) {
  const base = name.replace(/\.(ipynb|py)$/i, '')
  const cleaned = base
    .replace(/^\d+(\.\d+)*-?/, '')
    .replace(/-/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) || base
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out = []
  let inPre = false
  let listType = null

  const flushList = () => {
    if (listType) {
      out.push(listType === 'ol' ? '</ol>' : '</ul>')
      listType = null
    }
  }

  const inline = (t) =>
    escapeHtml(t)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')

  for (let raw of lines) {
    const line = raw.trimEnd()
    if (line.startsWith('```')) {
      flushList()
      if (!inPre) {
        inPre = true
        out.push('<pre><code>')
      } else {
        inPre = false
        out.push('</code></pre>')
      }
      continue
    }
    if (inPre) {
      out.push(escapeHtml(line) + '\n')
      continue
    }

    if (!line.trim()) {
      flushList()
      continue
    }

    const hm = line.match(/^(#{1,6})\s+(.+)$/)
    if (hm) {
      flushList()
      const level = hm[1].length
      out.push(`<h${level}>${inline(hm[2])}</h${level}>`)
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
        out.push('<ul>')
      }
      out.push(`<li>${inline(line.replace(/^[-*]\s+/, ''))}</li>`)
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
        out.push('<ol>')
      }
      out.push(`<li>${inline(line.replace(/^\d+\.\s+/, ''))}</li>`)
      continue
    }

    flushList()
    out.push(`<p>${inline(line)}</p>`)
  }
  flushList()
  if (inPre) out.push('</code></pre>')
  return out.join('\n')
}

function cellSource(source) {
  if (Array.isArray(source)) return source.join('')
  return sanitizeNames(source || '')
}

function markdownBlock(md) {
  const src = sanitizeNames(md)
  return {
    type: 'markdown',
    translations: {
      en: { html: markdownToHtml(src) },
      hi: { html: markdownToHtml(translateMarkdown(src, 'hi')) },
      hinglish: { html: markdownToHtml(translateMarkdown(src, 'hinglish')) },
    },
  }
}

function sanitizeBlockContent(block) {
  if (block.type === 'markdown' && block.translations) {
    const tr = {}
    for (const loc of ['en', 'hi', 'hinglish']) {
      tr[loc] = { html: sanitizeNames(block.translations[loc]?.html || '') }
    }
    return { ...block, translations: tr }
  }
  if (block.type === 'markdown' && block.html) {
    return markdownBlock(block.html.replace(/<[^>]+>/g, ' '))
  }
  if (block.type === 'code' && block.code) {
    return {
      ...block,
      code: sanitizeNames(block.code),
      sampleOutput: block.sampleOutput ? sanitizeNames(block.sampleOutput) : block.sampleOutput,
      note: block.note ? sanitizeNames(block.note) : block.note,
    }
  }
  return block
}

function extractOutput(outputs) {
  if (!outputs?.length) return undefined
  const parts = []
  for (const o of outputs) {
    if (o.output_type === 'stream' && o.text) {
      parts.push(Array.isArray(o.text) ? o.text.join('') : o.text)
    } else if (o.output_type === 'execute_result' && o.data?.['text/plain']) {
      const t = o.data['text/plain']
      parts.push(Array.isArray(t) ? t.join('') : t)
    }
  }
  return parts.length ? parts.join('') : undefined
}

function isRunnable(code) {
  const blockers = [
    /^\s*!/, /^\s*%/, /\binput\s*\(/, /\bopen\s*\(/, /\bos\.system\b/,
    /\bsubprocess\b/, /\brequests\.get\b/, /\burllib\b/, /\bflask\b/i,
    /\bstreamlit\b/i, /\bst\./, /\bplt\.show\s*\(/, /\bpd\.read_csv\s*\(/,
    /\bread_excel\b/, /\bsqlite3\.connect\b/, /\b__file__\b/, /\bimport\s+flask\b/i,
    /\bfrom\s+flask\b/i, /\bimport\s+streamlit\b/i, /\bThread\s*\(/,
    /\bProcess\s*\(/, /\bmultiprocessing\b/, /\bthreading\b/,
  ]
  return !blockers.some((re) => re.test(code))
}

function parseNotebook(filePath, moduleId, moduleTitle, order) {
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const name = path.basename(filePath)
  const id = `${moduleId}--${slugify(name)}`
  const blocks = []

  for (const cell of raw.cells || []) {
    const src = cellSource(cell.source)
    if (!src.trim()) continue

    if (cell.cell_type === 'markdown') {
      blocks.push(sanitizeBlockContent(markdownBlock(src)))
    } else if (cell.cell_type === 'code') {
      const sampleOutput = extractOutput(cell.outputs)
      blocks.push(
        sanitizeBlockContent({
          type: 'code',
          code: src,
          runnable: isRunnable(src),
          sampleOutput,
          note: !isRunnable(src)
            ? 'Browser practice: simplified version — full example needs local Python (files, Flask, threads, etc.).'
            : undefined,
          noteKey: !isRunnable(src) ? 'browserPracticeNote' : undefined,
        })
      )
    }
  }

  return {
    id,
    moduleId,
    moduleTitle,
    title: titleFromFilename(name),
    order,
    sourceFile: path.relative(ROOT, filePath),
    blocks,
  }
}

function parsePyLesson(filePath, moduleId, moduleTitle, title, order) {
  const code = fs.readFileSync(filePath, 'utf8')
  const name = path.basename(filePath)
  const id = `${moduleId}--${slugify(name)}`
  return {
    id,
    moduleId,
    moduleTitle,
    title,
    order,
    sourceFile: path.relative(ROOT, filePath),
    blocks: [
      {
        type: 'markdown',
        html: `<p>Reference script from the bootcamp repo. Read the code below; run a simplified version in the playground when marked runnable.</p>`,
      },
      {
        type: 'code',
        code,
        runnable: isRunnable(code),
        note: 'Flask/Streamlit/multithreading scripts are for local study — use the playground for basic Python syntax practice.',
      },
    ],
  }
}

const modules = []
const lessons = []

MODULE_ORDER.forEach((mod, mi) => {
  const modulePath = path.join(ROOT, mod.dir)
  if (!fs.existsSync(modulePath)) return

  const moduleId = slugify(mod.dir.replace(/^\d+-/, ''))
  const lessonIds = []
  let order = 0

  const notebooks = fs
    .readdirSync(modulePath)
    .filter((f) => f.endsWith('.ipynb'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  for (const nb of notebooks) {
    order++
    const lesson = parseNotebook(
      path.join(modulePath, nb),
      moduleId,
      mod.title,
      order
    )
    lessons.push(applyLaymanToLesson(lesson))
    lessonIds.push(lesson.id)
  }

  const pyList = PY_LESSONS[mod.dir] || []
  for (const py of pyList) {
    const fp = path.join(modulePath, py.file)
    if (!fs.existsSync(fp)) continue
    order++
    const lesson = applyLaymanToLesson(parsePyLesson(fp, moduleId, mod.title, py.title, order))
    lessons.push(lesson)
    lessonIds.push(lesson.id)
  }

  modules.push({
    id: moduleId,
    title: mod.title,
    order: mi + 1,
    lessonIds,
  })
})

const course = {
  id: 'python-bootcamp',
  title: 'Python Bootcamp for Beginners',
  description:
    'Never coded before? Start here. Plain explanations, everyday examples, and a simple practice box in every lesson — then optional deep notes from the full bootcamp.',
  level: 'Absolute beginner → Advanced',
  audience: 'No prior coding experience required',
  lessonsCount: lessons.length,
  modules,
  lessons,
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(course))
console.log(`Wrote ${lessons.length} lessons in ${modules.length} modules → ${OUT}`)
