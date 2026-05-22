import type { Locale } from '@/lib/i18n'

/** Common headings/phrases in bootcamp reference markdown → hi / hinglish */
const PHRASES: [RegExp, { hi: string; hinglish: string }][] = [
  [/Syntax and Semantics/gi, { hi: 'वाक्य-रचना और अर्थ', hinglish: 'Syntax aur matlab' }],
  [/Single line Comments/gi, { hi: 'एक पंक्ति की टिप्पणी', hinglish: 'Single line comment' }],
  [/multiline comments/gi, { hi: 'कई पंक्तियों की टिप्पणी', hinglish: 'Multiline comment' }],
  [/Definition of Syntax/gi, { hi: 'वाक्य-रचना की परिभाषा', hinglish: 'Syntax ki definition' }],
  [/Basic Syntax Rules/gi, { hi: 'बुनियादी वाक्य-रचना नियम', hinglish: 'Basic syntax rules' }],
  [/Understanding Semantics/gi, { hi: 'अर्थ को समझना', hinglish: 'Semantics samajhna' }],
  [/Common Syntax Errors/gi, { hi: 'आम वाक्य-रचना की गलतियाँ', hinglish: 'Common syntax errors' }],
  [/Practical Code Examples/gi, { hi: 'व्यावहारिक कोड उदाहरण', hinglish: 'Practical code examples' }],
  [/Indentation/gi, { hi: 'हाशिया (Indentation)', hinglish: 'Indentation (spaces)' }],
  [/Case sensitivity/gi, { hi: 'बड़े-छोटे अक्षर का ध्यान', hinglish: 'Capital/small letter matter karta hai' }],
  [/Variables/gi, { hi: 'वेरिएबल', hinglish: 'Variables' }],
  [/Data [Tt]ypes/gi, { hi: 'डेटा के प्रकार', hinglish: 'Data types' }],
  [/Operators/gi, { hi: 'ऑपरेटर', hinglish: 'Operators' }],
  [/Conditional/gi, { hi: 'शर्त', hinglish: 'Condition' }],
  [/Loops/gi, { hi: 'लूप', hinglish: 'Loops' }],
  [/Functions/gi, { hi: 'फ़ंक्शन', hinglish: 'Functions' }],
  [/Lists/gi, { hi: 'सूची', hinglish: 'Lists' }],
  [/Tuples/gi, { hi: 'टपल', hinglish: 'Tuples' }],
  [/Sets/gi, { hi: 'सेट', hinglish: 'Sets' }],
  [/Dictionaries/gi, { hi: 'डिक्शनरी', hinglish: 'Dictionaries' }],
  [/Exception/gi, { hi: 'त्रुटि (Exception)', hinglish: 'Exception (error)' }],
  [/Inheritance/gi, { hi: 'वंशानुक्रम (Inheritance)', hinglish: 'Inheritance' }],
  [/Polymorphism/gi, { hi: 'बहुरूपता', hinglish: 'Polymorphism' }],
  [/Encapsulation/gi, { hi: 'एनकैप्सुलेशन', hinglish: 'Encapsulation' }],
  [/Video Outline/gi, { hi: 'वीडियो की रूपरेखा', hinglish: 'Video outline' }],
  [/Real-World Examples/gi, { hi: 'वास्तविक जीवन के उदाहरण', hinglish: 'Real life examples' }],
  [/The filter\(\) Function/gi, { hi: 'filter() फ़ंक्शन', hinglish: 'filter() function' }],
  [/The map\(\) Function/gi, { hi: 'map() फ़ंक्शन', hinglish: 'map() function' }],
  [/Lambda/gi, { hi: 'लैम्ब्डा', hinglish: 'Lambda' }],
]

export function translateReferenceHtml(html: string, locale: Locale): string {
  if (locale === 'en' || !html) return html
  let out = html
  for (const [re, tr] of PHRASES) {
    out = out.replace(re, tr[locale])
  }
  return out
}
