import { cpSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const root = join(import.meta.dirname, '..')
const outDir = join(root, 'out')
const docsDir = join(root, 'docs')

if (!existsSync(outDir)) {
  console.error('Run "npm run build" first — out/ folder missing.')
  process.exit(1)
}

mkdirSync(docsDir, { recursive: true })
cpSync(outDir, docsDir, { recursive: true, force: true })

const cname = join(root, 'CNAME')
if (existsSync(cname)) {
  cpSync(cname, join(docsDir, 'CNAME'))
}
writeFileSync(join(docsDir, '.nojekyll'), '')

console.log('✓ docs/ updated from out/ — git add docs && git push')
