import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LOCALES, STORAGE_KEY, type Locale, t as translate } from '@/lib/i18n'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'hi' || stored === 'hinglish' || stored === 'en') return stored
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'hi' ? 'hi' : next === 'hinglish' ? 'hi' : 'en'
  }, [])

  useEffect(() => {
    if (ready) {
      document.documentElement.lang = locale === 'hi' ? 'hi' : locale === 'hinglish' ? 'hi' : 'en'
    }
  }, [locale, ready])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string) => translate(locale, key),
    }),
    [locale, setLocale]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

export { LOCALES }
