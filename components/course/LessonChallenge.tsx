import { useCallback, useEffect, useState } from 'react'
import type { ChallengeTranslation } from '@/lib/courses'
import { getPyodide, normalizeOutput, runPythonCapture } from '@/lib/pyodide'

type Props = {
  challenge: ChallengeTranslation
}

type Status = 'idle' | 'loading' | 'checking' | 'correct' | 'wrong' | 'error'

export default function LessonChallenge({ challenge }: Props) {
  const [code, setCode] = useState(challenge.starterCode)
  const [status, setStatus] = useState<Status>('idle')
  const [userOutput, setUserOutput] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showSolution, setShowSolution] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCode(challenge.starterCode)
    setStatus('idle')
    setUserOutput('')
    setErrorMsg('')
    setShowSolution(false)
  }, [challenge.starterCode, challenge.question])

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    getPyodide()
      .then(() => {
        if (!cancelled) setStatus('idle')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const check = useCallback(async () => {
    setStatus('checking')
    setErrorMsg('')
    setShowSolution(false)

    const result = await runPythonCapture(code)
    setUserOutput(result.output)

    if (result.error) {
      setErrorMsg(result.error)
      setStatus('wrong')
      setShowSolution(true)
      return
    }

    const expected = normalizeOutput(challenge.expectedOutput)
    const got = normalizeOutput(result.output)

    if (got === expected) {
      setStatus('correct')
      setShowSolution(false)
    } else {
      setStatus('wrong')
      setShowSolution(true)
    }
  }, [code, challenge.expectedOutput])

  const copySolution = async () => {
    try {
      await navigator.clipboard.writeText(challenge.solution)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  const applySolution = () => {
    setCode(challenge.solution)
    setShowSolution(true)
  }

  return (
    <section className="lesson-challenge" aria-labelledby="challenge-title">
      <h2 id="challenge-title" className="lesson-challenge-title">
        {challenge.sectionTitle}
      </h2>
      <p className="muted lesson-challenge-sub">{challenge.sectionSub}</p>

      <div className="challenge-question">
        <p>{challenge.question.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}</p>
        {challenge.hint && (
          <p className="challenge-hint">
            <strong>{challenge.hintLabel}:</strong> {challenge.hint}
          </p>
        )}
      </div>

      <div className="playground challenge-playground">
        <div className="playground-toolbar">
          <span className="playground-lang">Python</span>
          {status === 'loading' && <span className="muted">{challenge.checking}</span>}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={check}
            disabled={status === 'loading' || status === 'checking'}
          >
            {status === 'checking' ? challenge.checking : challenge.check}
          </button>
        </div>
        <textarea
          className="playground-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          aria-label="Challenge code"
        />
        {(userOutput || errorMsg) && (
          <div className="playground-output-wrap">
            <div className="playground-output-label">{challenge.yourOutput}</div>
            <pre className={`playground-output ${errorMsg ? 'is-error' : ''}`}>
              {errorMsg || userOutput || challenge.noOutput}
            </pre>
          </div>
        )}
      </div>

      {status === 'correct' && (
        <p className="challenge-feedback challenge-feedback-ok" role="status">
          {challenge.correct}
        </p>
      )}
      {status === 'wrong' && (
        <p className="challenge-feedback challenge-feedback-bad" role="status">
          {challenge.wrong}
        </p>
      )}

      {showSolution && (
        <div className="challenge-solution">
          <div className="challenge-solution-head">
            <h3>{challenge.solutionTitle}</h3>
            <div className="challenge-solution-actions">
              <button type="button" className="btn btn-secondary btn-sm" onClick={copySolution}>
                {copied ? challenge.copied : challenge.copy}
              </button>
              <button type="button" className="btn btn-link btn-sm" onClick={applySolution}>
                {challenge.pasteInEditor}
              </button>
            </div>
          </div>
          <pre className="challenge-solution-code">{challenge.solution}</pre>
        </div>
      )}
    </section>
  )
}
