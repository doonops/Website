/**
 * Replace bootcamp author names with Doonops-friendly names in lesson content.
 * Krish Naik → Anshul Negi; list/other contexts may use Rish.
 */

export function sanitizeNames(text) {
  if (!text || typeof text !== 'string') return text
  let s = text

  // Full name first
  s = s.replace(/Krish\s+Naik/gi, 'Anshul Negi')
  s = s.replace(/KRish\s+Naik/gi, 'Anshul Negi')

  // Variant spellings (Krish1, KRish3, etc.)
  s = s.replace(/KRish(\d*)/g, (_, n) => `Anshul${n || ''}`)
  s = s.replace(/Krish(\d*)/g, (_, n) => `Anshul${n || ''}`)

  // In lists / secondary examples → Rish
  s = s.replace(/\['Rish'/g, "['Rish'") // idempotent
  s = s.replace(/\['Krish'/g, "['Rish'")
  s = s.replace(/\['Anshul',\s*'Jack'\]/g, "['Rish', 'Jack']")
  s = s.replace(/'Krish',\s*'Jack'/g, "'Rish', 'Jack'")
  s = s.replace(/'Krish',\s*32/g, "'Anshul', 32")
  s = s.replace(/"Krish",\s*"Jack"/g, '"Rish", "Jack"')

  // Remaining Krish → Anshul (names in code/strings)
  s = s.replace(/\bNaik\b/g, 'Negi')
  s = s.replace(/\bKrish\b/gi, 'Anshul')

  // Repo / URLs (not shown to users usually)
  s = s.replace(/krishnaik06/gi, 'doonops')

  return s
}
