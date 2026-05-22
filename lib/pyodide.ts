const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'

export type PyodideInstance = {
  runPythonAsync: (code: string) => Promise<unknown>
  setStdout: (opts: { batched: (msg: string) => void }) => void
  loadPackage: (names: string | string[]) => Promise<void>
}

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInstance>
  }
}

let pyodidePromise: Promise<PyodideInstance> | null = null

function loadPyodideScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('SSR'))
  if (window.loadPyodide) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-pyodide]')
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', reject)
      return
    }
    const s = document.createElement('script')
    s.src = `${PYODIDE_CDN}pyodide.js`
    s.async = true
    s.dataset.pyodide = '1'
    s.onload = () => resolve()
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export async function getPyodide(): Promise<PyodideInstance> {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      await loadPyodideScript()
      if (!window.loadPyodide) throw new Error('Pyodide failed to load')
      return window.loadPyodide({ indexURL: PYODIDE_CDN })
    })()
  }
  return pyodidePromise
}

export function normalizeOutput(s: string): string {
  return s.replace(/\r\n/g, '\n').trimEnd()
}

export async function runPythonCapture(code: string): Promise<{ output: string; error?: string }> {
  const py = await getPyodide()
  let output = ''
  py.setStdout({ batched: (msg: string) => { output += msg } })
  try {
    await py.runPythonAsync(code)
    return { output: normalizeOutput(output) }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return { output: normalizeOutput(output), error: msg }
  }
}
