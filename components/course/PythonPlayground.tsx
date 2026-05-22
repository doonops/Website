import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'

type PyodideInstance = {
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

async function getPyodide(): Promise<PyodideInstance> {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      await loadPyodideScript()
      if (!window.loadPyodide) throw new Error('Pyodide failed to load')
      return window.loadPyodide({ indexURL: PYODIDE_CDN })
    })()
  }
  return pyodidePromise
}

type Props = {
  initialCode: string
  runnable?: boolean
  sampleOutput?: string
  note?: string
}

export default function PythonPlayground({
  initialCode,
  runnable = true,
  sampleOutput,
  note,
}: Props) {
  const { t } = useLanguage()
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'running'>('idle')
  const stdoutRef = useRef('')

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    getPyodide()
      .then(() => {
        if (!cancelled) setStatus('ready')
      })
      .catch((e) => {
        if (!cancelled) {
          setError(String(e))
          setStatus('idle')
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  const run = useCallback(async () => {
    setError('')
    setOutput('')
    setStatus('running')
    stdoutRef.current = ''
    try {
      const py = await getPyodide()
      py.setStdout({
        batched: (msg: string) => {
          stdoutRef.current += msg
        },
      })
      await py.runPythonAsync(code)
      setOutput(stdoutRef.current || t('noOutput'))
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      setError(msg)
    } finally {
      setStatus('ready')
    }
  }, [code])

  const reset = () => {
    setCode(initialCode)
    setOutput('')
    setError('')
  }

  return (
    <div className="playground">
      {note && <p className="playground-note muted">{note}</p>}
      <div className="playground-toolbar">
        <span className="playground-lang">Python</span>
        {status === 'loading' && <span className="muted">{t('loadingRuntime')}</span>}
        {runnable ? (
          <>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={run}
              disabled={status === 'loading' || status === 'running'}
            >
              {status === 'running' ? t('running') : t('run')}
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={reset}>
              {t('reset')}
            </button>
          </>
        ) : (
          <span className="muted">{t('readOnly')}</span>
        )}
      </div>
      <textarea
        className="playground-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        readOnly={!runnable}
        aria-label="Python code editor"
      />
      {(output || error || sampleOutput) && (
        <div className="playground-output-wrap">
          <div className="playground-output-label">{t('output')}</div>
          <pre className={`playground-output ${error ? 'is-error' : ''}`}>
            {error ||
              output ||
              (sampleOutput ? `${t('expectedFromNotebook')}:\n${sampleOutput}` : '')}
          </pre>
        </div>
      )}
      <p className="playground-hint muted">{t('pyodideHint')}</p>
    </div>
  )
}
