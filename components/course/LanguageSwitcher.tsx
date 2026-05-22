import { LOCALES, useLanguage } from '@/lib/LanguageContext'
import type { Locale } from '@/lib/i18n'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className={`lang-switcher ${className}`} role="group" aria-label={t('language')}>
      <span className="lang-switcher-label">{t('language')}</span>
      <div className="lang-switcher-btns">
        {LOCALES.map((l) => (
          <button
            key={l.id}
            type="button"
            className={`lang-btn ${locale === l.id ? 'active' : ''}`}
            onClick={() => setLocale(l.id as Locale)}
            aria-pressed={locale === l.id}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  )
}
